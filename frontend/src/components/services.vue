<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const appData = useAppStore()
const breakpoints = useBreakpoints(breakpointsTailwind)

// Dynamically determine icon size based on breakpoints
const iconSize = computed(() => {
  if (breakpoints.greaterOrEqual('md').value) {
    return 32
  } else if (breakpoints.greaterOrEqual('sm').value) {
    return 24
  } else {
    return 16
  }
})
</script>

<template>
  <!-- -->
  <div
    class="bg-opacity-75 px-4 md:px-16 py-12"
    id="what_we_are"
  >
    <!-- text-blue-700 -->
    <div class="font-medium text-4xl pb-16 text-center md:text-left">What we are</div>

    <!-- Should be converted to Box contianer -->
    <div class="flex flex-wrap gap-8 justify-center">
      <card
        v-motion-slide-visible-once-left
        v-for="service, idx in appData.services"
        :key="idx"
        class="flex justify-center flex-col p-4"
      >
        <div class="w-full flex justify-center items-center h-[120px]">
          <Icon
            :icon="service.icon"
            v-if="service.icon"
            :class="`w-[64px] h-[64px] ${service.color}`"
          ></Icon>
        </div>

        <div
          class="font-medium text-lg p-4  flex items-center justify-center"
          :class="`${service.color}`"
        >
          {{ service.name }}
        </div>
        <div class="text-sm">{{ service.description }}</div>
      </card>
    </div>
  </div>
</template>
