<template>
  <div class="w-1/2 h-96 border rounded-3xl shadow-2xl bg-white px-5 py-5">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from '../lib/barchartConfigs.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar,
  },
  data() {
    return chartConfig
  },
}
</script>
