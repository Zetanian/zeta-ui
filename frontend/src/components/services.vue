<script setup>
const appData = useAppStore()
</script>

<template>
  <div
    class="bg-orange-200 bg-opacity-75 px-16 py-24"
    id="what_we_are"
  >

    <div class="title mb-16 text-5xl font-medium">What we are</div>

    <!-- <-- Should be converted to Box contianer -->
    <div class="flex flex-wrap gap-8 justify-center px-4">
      <card
        v-motion-slide-visible-once-left
        v-for="service, idx in appData.services"
        :key="idx"
        class="flex justify-center"
      >
        <div class="flex justify-center items-center h-[60%]">
          <div class="relative h-24 w-24 bg-gray-200 rounded-full justify-center items-center">
            <Icon
              class="card-icon"
              :icon="service.icon"
              v-if="service.icon"
            ></Icon>
            <Icon
              class="card-icon"
              icon="line-md:question"
              v-else
            ></Icon>
          </div>
        </div>

        <div class="h-[40%] font-medium px-4 flex items-center justify-center">
          <span>{{ service.name }}</span>
        </div>
        <!-- <div class="service__description mb-8">{{ service.description }}</div> -->
        <!-- <div class="service__link underline absolute bottom-0">Learn More</div> -->
      </card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}


</style>