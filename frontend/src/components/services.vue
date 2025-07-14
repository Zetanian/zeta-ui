<script setup>
const appData = useAppStore()
</script>

<template>
  <!-- -->
  <div id="what_we_are">
    <!-- text-blue-700 -->

    <div class="mb-12 text-center text-4xl font-medium md:text-left">Our Principles</div>

    <!-- <div class="bg-[url(@/assets/images/border-top-left.png)] bg-top-left bg-no-repeat bg-blend-lighten  bg-position-top-left"> -->
    <!-- Your content here -->
    <!-- </div> -->

    <!-- Should be converted to Box contianer -->
    <div class="grid grid-cols-3 justify-center gap-8 overflow-clip rounded-xl">
      <div v-for="(service, idx) in appData.services" :key="idx">
        <div class="group relative h-48 cursor-pointer rounded-xl transition-all">
          <div class="absolute right-4 bottom-4 z-10">
            <Icon
              v-if="service.icon"
              :icon="service.icon"
              class="size-6 text-zinc-300 opacity-50"
            />
          </div>

          <div
            class="absolute h-24 w-24 rounded-xl bg-purple-500/40"
            :class="{
              'top-0 left-0': idx === 0,
              'left-1/2 -translate-x-1/2 -translate-y-1/2': idx === 1,
              'top-0 right-0': idx === 2,
              'bottom-0 left-0': idx === 3,
              'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2': idx === 4,
              'right-0 bottom-0': idx === 5,
            }"
          ></div>

          <div class="shadow- h-full rounded-xl bg-zinc-700/10 p-4 backdrop-blur-2xl">
            <div
              class="absolute flex items-center justify-center p-4 text-center text-2xl text-zinc-300 opacity-100 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0"
            >
              {{ service.name }}
            </div>

            <div
              class="absolute flex items-center justify-center p-4 text-center text-zinc-300 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
            >
              {{ service.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
