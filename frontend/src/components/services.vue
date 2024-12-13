<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="services px-16 py-24">
    <div class="title text-6xl mb-16 font-semibold">Our Services</div>

    <div class="flex gap-8 px-2">
      <div
        v-for="service, idx in appData.services"
        :key="idx"
        class="w-1/3 relative"
      >
        <div class="service__title text-3xl font-medium mb-4">{{ service.name }}</div>
        <div class="service__description mb-8">{{ service.description }}</div>
        <div class="service__link underline absolute bottom-0">Learn More</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.services {
  background-color: rgb(236, 228, 218);
}
</style>