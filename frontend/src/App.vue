<script setup lang="ts">
</script>

<template>
  <div class="font-poppins text-zinc-700 h-full">
    <LayoutTheHeader></LayoutTheHeader>
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss">
/* For WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-purple-100);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-purple-500);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-purple-800);
}

</style>
