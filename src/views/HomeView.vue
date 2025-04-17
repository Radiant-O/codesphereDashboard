<script setup>
import MainHeader from '@/components/MainHeader.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <div>
    <MainHeader />
    <main>
      <section>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent> Card Content </CardContent>
            <CardFooter> Card Footer </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
