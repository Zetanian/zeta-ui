<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="ethos px-16 py-24">

    <div class="title text-6xl mb-16 font-semibold w-4/6">Our Principles</div>

    <div class="flex gap-6 px-16">
      <div
        class="w-1/3 text-center border shadow p-4 py-8"
        v-for="principle, idx in appData.principles"
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
        <button class="bg-black text-white w-[120px] py-2 rounded">Learn More</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.ethos {
  background-color: rgb(236, 228, 218);
}
</style>