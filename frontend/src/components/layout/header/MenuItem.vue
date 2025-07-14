<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p
    class="group relative overflow-hidden py-4 transition hover:cursor-pointer hover:text-amber-400/80"
  >
    <span>{{ props.name }}</span>
    <span
      class="absolute bottom-0 left-1/2 h-0.5 w-0 bg-amber-400/80 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </p>
</template>
