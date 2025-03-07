<script setup>

onBeforeRouteUpdate((nav) => {
  console.log("Called", nav)
})

</script>

<template>
  <div
    class="bg-linear-to-br from-purple-200 via-purple-50 to-white h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden"
  >
    <LayoutJumbotron></LayoutJumbotron>
    <Services v-motion-fade-visible-once></Services>
    <Principles v-motion-fade-visible-once></Principles>
    <!-- <Appointment v-motion-fade-visible-once></Appointment> -->
    <!-- <Subscribe v-motion-fade-visible-once></Subscribe> -->
    <Contactus v-motion-fade-visible-once></Contactus>
    <LayoutTheFooter v-motion-fade-visible-once></LayoutTheFooter>
  </div>
</template>