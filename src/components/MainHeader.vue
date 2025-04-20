<template>
  <header
    class="flex items-center justify-between py-6 px-8 mx-auto mt-8 mb-12 w-[85%] border-2 rounded-[50px] border-gray-300 bg-white shadow-md"
  >
    <div class="flex items-center">
      <p class="text-2xl">SphereAI Dashboard</p>
    </div>
    <nav>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-10 h-10">
              <Settings />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent class="w-60" v-if="!isSignedIn">
            <DropdownMenuItem @click.prevent="signIn">
              <span>Sign in with Google</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
          <DropdownMenuContent class="w-60" v-else>
            <DropdownMenuLabel> {{ user?.getName() }}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span @click.prevent="handleLogout()">Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>

<script setup>
// import { ref, onMounted } from 'vue'
import { useGoogleAuth } from '@/composables/useGoogleAuth'
import { Settings } from 'lucide-vue-next'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useRouter } from 'vue-router'

const { user, isSignedIn, signIn } = useGoogleAuth()

const router = useRouter()
const handleLogout = () => {
  try {
    // Add any logout logic here (clearing localStorage, etc)
    router.push({ name: 'login' })
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>

<style scoped></style>
