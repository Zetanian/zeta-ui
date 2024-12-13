<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="header px-16 py-4">
    <div class="title-bar text-xl flex justify-between">
      <div>{{ appData.appName }}</div>
      <div class="nav text-base hover:cursor-pointer">
        <span
          v-for="page, idx in appData.pages"
          :key="idx"
          class="mr-4"
        >
          {{ page }}
        </span>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: rgb(185, 165, 144);
  color: rgb(54, 48, 42)
}

</style>