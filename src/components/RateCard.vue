<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card class="w-1/4">
    <CardHeader>
      <CardTitle>Total Calls</CardTitle>
      <!-- <CardDescription>Card Description</CardDescription> -->
    </CardHeader>
    <CardContent>
      <div>
        <div class="flex items-baseline">
          <p class="text-4xl font-semibold text-gray-900 dark:text-white">61</p>
          <span class="ml-2 flex items-baseline text-sm font-semibold">
            <span className="ml-1">12.0%</span>
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
