<template>
  <header class="flex items-center justify-between py-6 px-8 mx-auto mt-8 mb-12 w-[85%] border-2 rounded-[50px] border-gray-300 bg-white shadow-md">
    <div class="flex items-center ">
      <p class="text-2xl">SphereAI Dashboard</p>
    </div>
    <nav>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button>
              <Settings />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent class="w-60">
            <DropdownMenuLabel>abiodun@mail.com</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Log In</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Settings } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
</script>

<style scoped></style>
