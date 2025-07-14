<script setup lang="ts"></script>

<!-- </div> -->
<template>
  <RouterView />
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-slate-950);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-amber-400);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-amber-500);
  cursor: pointer;
}
</style>
