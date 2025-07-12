<template>
  <div class="flex justify-center">
    <LayoutHeader></LayoutHeader>
  </div>

  <div class="pt-[200px] pb-[48px] text-center hero-bg-img text-white/90" id="hero">
    <span class="block text-8xl">Software Development <br />& IT Consulting Company.</span>
    <br />
    <span class="block mt-4 text-4xl">Organize. Optimize. Synergize.</span>
  </div>
</template>

<style scoped lang="scss">
.hero-bg-img {
  background-image: url('@/assets/images/hero-bg.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
}
</style>