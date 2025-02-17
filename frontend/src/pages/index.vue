<script setup>

onBeforeRouteUpdate((nav) => {
  console.log("Called", nav)
})

</script>

<template>
  <div>
    <LayoutJumbotron></LayoutJumbotron>
    <Services v-motion-fade-visible-once></Services>
    <Principles v-motion-fade-visible-once></Principles>
    <Appointment v-motion-fade-visible-once></Appointment>
    <Subscribe v-motion-fade-visible-once></Subscribe>
    <Contactus v-motion-fade-visible-once></Contactus>
    <LayoutTheFooter v-motion-fade-visible-once></LayoutTheFooter>
  </div>
</template>