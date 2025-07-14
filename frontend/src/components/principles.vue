<script setup>
const appData = useAppStore()
</script>

<template>
  <div id="what_we_do" class="px-4 py-12 md:px-16">
    <!-- text-blue-700 -->
    <div class="pb-12 text-center text-4xl font-medium md:text-left">What We Do</div>

    <div class="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
      <div
        v-for="(principle, idx) in appData.principles"
        :key="idx"
        v-motion-slide-visible-once-right
        class="service-card p-8"
      >
        <div class="my-4 text-xl font-medium">
          <Icon :icon="principle.icon" :width="32" :height="32" class="inline" />
          {{ principle.name }}
        </div>
        <div class="my-8">
          {{ principle.description }}
        </div>
        <!-- <button class="bg-purple-700 text-white text-base w-[120px] py-2 rounded-sm">Learn More</button> -->
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.service-card {
  border-radius: 10px;
  background: var(--color-purple-50);
  box-shadow:
    20px 20px 60px var(--color-gray-200),
    -20px -20px 60px var(--color-gray-100);
}
</style>
