<!-- eslint-disable no-unused-vars -->
<script setup>
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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
      <LineChart :data="data">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis :dataKey="xDataKey" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          :dataKey="yDataKey" 
          stroke="var(--primary)" 
          strokeWidth={2} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</template>