<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6 md:px-8"
  >
    <div
      ref="modalRef"
      class="relative max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
    >
      <button
        class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
        @click="close"
      >
        &times;
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
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
