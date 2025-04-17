<script setup>
import MainHeader from '@/components/MainHeader.vue'
import RateCard from '@/components/RateCard.vue'
</script>

<template>
  <div>
    <MainHeader />
    <main>
      <section>
        <div class="flex gap-8">
          <RateCard />
          <RateCard />
          <RateCard />
          <RateCard />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
