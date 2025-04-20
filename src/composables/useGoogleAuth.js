/* eslint-disable no-undef */
import { ref, onMounted } from 'vue'
import googleApi from '@/services/googleService'

const user = ref(null)
const isSignedIn = ref(false)
const accessToken = ref(null)
const selectedSheetId = ref(localStorage.getItem('google_sheet_id') || '')

export function useGoogleAuth() {
  const init = async () => {
    await googleApi.initClient()
    const auth = gapi.auth2.getAuthInstance()
    isSignedIn.value = auth.isSignedIn.get()

    if (isSignedIn.value) {
      user.value = auth.currentUser.get().getBasicProfile()
      accessToken.value = auth.currentUser.get().getAuthResponse().access_token
    }

    // Optional: listen for sign-in changes
    auth.isSignedIn.listen((val) => {
      isSignedIn.value = val
      if (val) {
        user.value = auth.currentUser.get().getBasicProfile()
        accessToken.value = auth.currentUser.get().getAuthResponse().access_token
      } else {
        user.value = null
        accessToken.value = null
      }
    })
  }

  const signIn = async () => {
    await googleApi.signIn()
    await init()
  }

  const pickSheet = () => {
    googleApi.openPicker((data) => {
      if (data.action === google.picker.Action.PICKED) {
        const id = data.docs[0].id
        selectedSheetId.value = id
        localStorage.setItem('google_sheet_id', id)
      }
    })
  }

  onMounted(init)

  return {
    user,
    isSignedIn,
    accessToken,
    selectedSheetId,
    signIn,
    pickSheet,
  }
}
