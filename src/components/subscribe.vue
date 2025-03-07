<script setup>
const appData = useAppStore()
</script>

<template>
  <!-- bg-orange-200 -->
  <div class=" py-6 px-16 flex gap-16">
    <div class="w-1/2 px-8 py-36">
      <div class="subscribe__title text-6xl font-medium my-16">Subscribe to get access now</div>
      <button class="bg-[rgb(54,48,42)] text-white rounded-full w-[120px] py-2 mb-4">Subscribe</button>
      <div class="h-[0.5px] w-full bg-white"></div>
      <div class="py-4">
        ✓ Over 20 hours of video content <br />
        ✓ Unlimited lifetime access
      </div>
    </div>

    <div class="w-1/2">
      <img
        src="@/assets/images/imgg-od3-algc_t9f.png"
        class="object-cover h-full"
        v-motion-pop-visible-once
      />
    </div>
  </div>

</template>


<style lang="scss">
.subscribe {
  background-color: rgb(185, 165, 144);
}
</style>