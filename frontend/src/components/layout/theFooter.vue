<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="footer px-16 py-24 flex">

    <div class="justify-self-start">
      <div class="text-2xl font-medium mb-1">zetatium</div>
      <div>Organize | Optimize</div>
    </div>
    <div class="
        ml-auto
        flex
        gap-8">
      <div>
        <div class="text-2xl mb-6">Location</div>
        <div class="">2588 Vicksburg Ln <br />
          Aurora IL 60503</div>
      </div>
      <div>
        <div class="text-2xl mb-6">Contact</div>
        <div>VinoJay@zetatium.com<br />
          (555) 555-5555</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: rgb(236, 228, 218);
}
</style>