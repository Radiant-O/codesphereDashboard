<!-- eslint-disable no-unused-vars -->
<script setup>
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  xDataKey: {
    type: String,
    required: true
  },
  yDataKey: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart :data="data">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis :dataKey="xDataKey" />
        <YAxis />
        <Tooltip />
        <Bar 
          :dataKey="yDataKey" 
          fill="var(--primary)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</template>