<template>
  <header class="flex items-center justify-between p-4">
    <div class="flex items-center">
      <p class="text-xl">SphereAI</p>
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
