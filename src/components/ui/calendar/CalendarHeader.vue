<script setup>
import { cn } from '@/lib/utils';
import { CalendarHeader, useForwardProps } from 'reka-ui';
import { computed } from 'vue';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeader
    data-slot="calendar-header"
    :class="
      cn('flex justify-center pt-1 relative items-center w-full', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeader>
</template>
