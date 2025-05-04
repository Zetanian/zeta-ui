<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black/50">
    <div
      ref="modalRef"
      class="bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl shadow-xl p-6 relative"
    >
      <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean
})
const emit = defineEmits(['update:visible'])

function close() {
  emit('update:visible', false)
}

const modalRef = ref(null)

onClickOutside(modalRef, () => {
  if (props.visible) close()
})
</script>
