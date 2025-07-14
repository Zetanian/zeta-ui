<template>
  <div
    id="hero"
    class="hero-bg-img flex flex-col items-center justify-center gap-4 pt-[200px] pb-[48px] text-center text-white/90"
  >
    <span class="block px-8 text-7xl">Software Development <br />& IT Consulting Company.</span>
    <br />
    <span class="block text-3xl">Organize. Optimize. Synergize.</span>

    <input
      type="button"
      value="Get In Touch"
      class="shadow-rnd mt-8 h-14 w-48 cursor-pointer rounded-md bg-amber-400/80 px-6 py-3 text-2xl font-medium text-slate-950 shadow-amber-400/80 transition duration-300 hover:bg-amber-400"
    />
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
