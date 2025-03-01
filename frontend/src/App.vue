<script setup lang="ts">
</script>

<template>
  <div class="font-poppins text-zinc-700 h-full">
    <LayoutTheHeader></LayoutTheHeader>
    <div class="h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
}

/* For WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-orange-100);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-orange-500);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-orange-500);
}

</style>
