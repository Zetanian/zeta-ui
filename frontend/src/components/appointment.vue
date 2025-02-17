<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="bg-orange-100 px-16 py-24">

    <div class="flex gap-16">
      <div class="w-1/2" v-motion-pop-visible-once>
        <div class="title text-6xl mb-8 font-semibold">Reserve an appointment</div>
        <div class="mb-8">Experience unparalleled professionalism and personalized service when you book an
          appointment
          with us—where
          your career aspirations are our foremost priority.</div>
        <img src="@/assets/images/imgg-od3-kdsff4xv.png" />
      </div>

      <div
        class="w-1/2"
        v-motion-slide-visible-once-right
      >
        <div class="bg-white p-4 mb-4">
          <div class="text-right text-xs">Returning? <span class="underline">Log in</span></div>
          <div class="h-8 my-6">
            <div class="inline-flex bg-black text-white h-8 w-8 rounded-full mr-2 items-center justify-center">1</div>
            <div class="inline-flex items-baseline font-medium text-lg">Choose Appointment</div>
          </div>

          <div
            :class="['flex px-4 text-sm border py-8 mb-4 last:mb-0' ]"
            v-for="appointment, idx in appData.appointments"
            :key="idx"
          >
            <div class="w-4/6 ">
              <div class="appointment__title font-medium">{{ appointment.name }}</div>
              <div class="appointment__description font-light">{{ appointment.description }}</div>
            </div>
            <div class="w-2/6 flex items-center justify-end  ">
              <button class="bg-black text-white mr-2 w-[112px] py-1 rounded-sm">Book</button>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 mb-4">
          <div class="inline-flex bg-black text-white h-8 w-8 rounded-full mr-2 items-center justify-center">2</div>
          <div class="inline-flex items-baseline font-medium text-lg">Your Information</div>
        </div>

        <div class="bg-white p-6">
          <div class="inline-flex bg-black text-white h-8 w-8 rounded-full mr-2 items-center justify-center">3</div>
          <div class="inline-flex items-baseline font-medium text-lg">Confirmation</div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appointment {
  background-color: rgb(236, 228, 218);
}
</style>