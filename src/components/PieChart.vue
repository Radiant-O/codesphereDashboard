<!-- eslint-disable no-unused-vars -->
<script setup>
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  dataKey: {
    type: String,
    required: true,
    default: 'value'
  },
  nameKey: {
    type: String,
    required: true,
    default: 'name'
  }
})

const COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)'
]
</script>

<template>
  <div class="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          :data="data"
          :dataKey="dataKey"
          :nameKey="nameKey"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
        >
          {data.map((_, index) => (
            <Cell 
              :key="`cell-${index}`" 
              :fill="COLORS[index % COLORS.length]" 
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
</template>