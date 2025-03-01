<script setup>
const appData = useAppStore()
</script>

<template>
  <!-- -->
  <div
    class=" bg-opacity-75 px-16 py-24 bg-orange-200 "
    id="what_we_are"
  >
    <!-- text-blue-700 -->
    <div class="font-medium text-4xl pb-16 ">What we are</div>

    <!-- <-- Should be converted to Box contianer -->
    <div class="flex flex-wrap gap-8 justify-center px-4">
      <card
        v-motion-slide-visible-once-left
        v-for="service, idx in appData.services"
        :key="idx"
        class="flex justify-center flex-col p-4"
      >
        <div class="w-full flex justify-center items-center h-[120px]">
          <Icon
            :icon="service.icon"
            v-if="service.icon"
            :class="`w-[64px] h-[64px] ${service.color}`"
          ></Icon>
        </div>

        <div
          class="font-medium text-lg p-4  flex items-center justify-center"
          :class="`${service.color}`"
        >
          {{ service.name }}
        </div>
        <div class="text-sm">{{ service.description }}</div>
      </card>
    </div>
  </div>
</template>
