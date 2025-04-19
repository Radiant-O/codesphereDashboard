<script setup>
import MainHeader from '@/components/MainHeader.vue'
import RateCard from '@/components/RateCard.vue'
import BarChart from '@/components/BarChart.vue'
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'
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

        <div class="flex flex-col gap-8 mt-8 mb-8">
          <div class="flex gap-8">
            <BarChart />
            <PieChart />
          </div>
          <div>
            <LineChart />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
