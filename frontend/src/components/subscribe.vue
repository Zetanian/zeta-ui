<template>
  <!-- bg-orange-200 -->
  <div class="flex gap-16 px-16 py-6">
    <div class="w-1/2 px-8 py-36">
      <div class="subscribe__title my-16 text-6xl font-medium">Subscribe to get access now</div>
      <button class="mb-4 w-[120px] rounded-full bg-[rgb(54,48,42)] py-2 text-white">
        Subscribe
      </button>
      <div class="h-[0.5px] w-full bg-white" />
      <div class="py-4">
        ✓ Over 20 hours of video content <br />
        ✓ Unlimited lifetime access
      </div>
    </div>

    <div class="w-1/2">
      <img
        v-motion-pop-visible-once
        src="@/assets/images/imgg-od3-algc_t9f.png"
        class="h-full object-cover"
      />
    </div>
  </div>
</template>

<style lang="scss">
.subscribe {
  background-color: rgb(185, 165, 144);
}
</style>
