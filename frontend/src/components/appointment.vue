<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="px-16 py-24">
    <div class="flex gap-16">
      <div v-motion-pop-visible-once class="w-1/2">
        <div class="pb-12 text-4xl font-medium text-blue-700">
          Reserve<br />
          an appointment
        </div>
        <div class="mb-8">
          Experience unparalleled professionalism and personalized service when you book an
          appointment with us—where your career aspirations are our foremost priority.
        </div>
        <img src="@/assets/images/imgg-od3-kdsff4xv.png" />
      </div>

      <div v-motion-slide-visible-once-right class="w-1/2">
        <div class="mb-4 bg-white p-4">
          <div class="text-right text-xs">Returning? <span class="underline">Log in</span></div>
          <div class="my-6 h-8">
            <div
              class="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              1
            </div>
            <div class="inline-flex items-baseline text-lg font-medium">Choose Appointment</div>
          </div>

          <div
            v-for="(appointment, idx) in appData.appointments"
            :key="idx"
            :class="['mb-4 flex border px-4 py-8 text-sm last:mb-0']"
          >
            <div class="w-4/6">
              <div class="appointment__title font-medium">
                {{ appointment.name }}
              </div>
              <div class="appointment__description font-light">
                {{ appointment.description }}
              </div>
            </div>
            <div class="flex w-2/6 items-center justify-end">
              <button class="mr-2 w-[112px] rounded-sm bg-black py-1 text-white">Book</button>
            </div>
          </div>
        </div>

        <div class="mb-4 bg-white p-6">
          <div
            class="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
          >
            2
          </div>
          <div class="inline-flex items-baseline text-lg font-medium">Your Information</div>
        </div>

        <div class="bg-white p-6">
          <div
            class="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
          >
            3
          </div>
          <div class="inline-flex items-baseline text-lg font-medium">Confirmation</div>
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
