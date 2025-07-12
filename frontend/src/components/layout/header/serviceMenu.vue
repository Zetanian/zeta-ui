<script setup>
const props = defineProps({
  name: String
})

</script>

<template>
  <div v-if="state.showDropdown && state.activeMenu === name.toLowerCase()"
    class="absolute left-0 top-full mt-10 min-w-[160px] bg-zinc-800/50 backdrop-blur-md rounded-lg shadow-lg p-4 z-50"
    @mouseleave="hideDropdown">
    <div v-if="name.toLowerCase() === 'services'" class="text-white">
      <LayoutHeaderMenuItem name="Software Development" />
    </div>
    <div v-if="name.toLowerCase() === 'industries'" class="text-white">
      <p>Industry 1</p>
      <p>Industry 2</p>
      <p>Industry 3</p>
    </div>
  </div>
</template>