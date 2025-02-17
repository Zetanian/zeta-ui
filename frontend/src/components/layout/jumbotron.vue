<script setup>
const appData = useAppStore()
</script>

<template>
  <div
    class="bg-orange-100 px-16 pt-16 pb-16"
    id="about_us"
  >
    <div class="text-2xl pt-16 pb-8">Zooming into Potential, Zestfully Driving Excellence</div>
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
            <div class="flex w-4/6 relative overflow-hidden">
              <img
                :src="item.img"
                class="w-full h-[65vh] object-cover [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]"
              />
            </div>

            <div class="flex-1 px-2 flex items-end">
              <p>
                {{ item.description }}
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

    </div>
  </div>
</template>
