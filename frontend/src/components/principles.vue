<script setup>
const appData = useAppStore()
</script>

<template>
  <div
    class="bg-orange-100 px-16 py-24"
    id="what_we_do"
  >
    <!-- text-blue-700 -->
    <div class="font-medium text-4xl pb-12 ">What We Do</div>
    <div class="flex gap-8 px-16">
      <!-- class="w-1/3 text-center shadow-sm" -->

      <div
        class="service-card p-8"
        v-for="principle, idx in appData.principles"
        v-motion-slide-visible-once-right
      >
        <div class="text-xl font-medium my-4">
          <Icon
            :icon="principle.icon"
            width="32"
            height="32"
            class="inline"
          />
          {{ principle.name }}
        </div>
        <div class="my-8">{{ principle.description }}</div>
        <button class="bg-zinc-800 text-white text-base w-[120px] py-2 rounded-sm">Learn More</button>
      </div>
    </div>

  </div>
</template>

<style lang="css" scoped>
.service-card {
  border-radius: 50px;
  /* box-shadow: 10px 10px 15px var(--color-blue-100), -10px -10px 15px var(--color-blue-100); */

  background: var(--color-orange-50);
  box-shadow: 20px 20px 60px var(--color-orange-200),
    -20px -20px 60px var(--color-orange-100);
}
</style>
