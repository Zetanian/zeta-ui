<script setup>
const appData = useAppStore()
</script>

<template>
  <!-- -->
  <div
    class=" px-16 py-12"
    id="about_us"
  >
    <div
      class="flex w-full max-w-4xl mx-auto"
      v-motion-pop-visible-once
    >

      <Carousel>
        <CarouselItem
          v-for="item, idx in appData.aboutUs"
          :key="idx"
        >
          <div class="flex">
            <div class="flex w-4/6 relative overflow-hidden ">
              <img
                :src="item.img"
                class="w-full h-[65vh] object-cover opacity-75 [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)] "
              />
            </div>

            <div
              class="flex-1 px-2 flex items-center"
            >
              <p>
                <span
                  class="font-medium block text-2xl pb-8 text-purple-700 mb-2"
                  v-if="idx == 0"
                >
                  Zooming into Potential, Zestfully Driving Excellence
                </span>
                {{ item.description }}
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

    </div>
  </div>
</template>
