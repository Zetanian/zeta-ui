<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<template>
  <p class="group relative overflow-hidden py-4 hover:cursor-pointer">
    <span>{{ props.name }}</span>
    <span class="absolute left-1/2 bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out w-0 group-hover:left-0 group-hover:w-full"></span>
  </p>
</template>
