/* eslint-disable no-undef */
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const API_KEY = import.meta.env.VITE_API_KEY
const DISCOVERY_DOCS = [
  'https://sheets.googleapis.com/$discovery/rest?version=v4',
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
]
const SCOPES = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets'

export default {
  initClient() {
    return new Promise((resolve, reject) => {
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(() => {
            resolve(gapi.auth2.getAuthInstance())
          })
          .catch(reject)
      })
    })
  },

  signIn() {
    return this.initClient().then((auth) => auth.signIn())
  },

  isSignedIn() {
    return gapi.auth2.getAuthInstance().isSignedIn.get()
  },

  getAccessToken() {
    return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token
  },

  openPicker(callback) {
    const view = new google.picker.View(google.picker.ViewId.SPREADSHEETS)
    const token = this.getAccessToken()

    const picker = new google.picker.PickerBuilder()
      .addView(view)
      .setOAuthToken(token)
      .setDeveloperKey(API_KEY)
      .setCallback(callback)
      .build()

    picker.setVisible(true)
  },
}
