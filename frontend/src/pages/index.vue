<script setup>

onBeforeRouteUpdate((nav) => {
  console.log("Called", nav)
})

</script>

<template>
  <div class="animated-gradient-background h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden">
    <LayoutJumbotron></LayoutJumbotron>
    <Services v-motion-fade-visible-once></Services>
    <Principles v-motion-fade-visible-once></Principles>
    <!-- <Appointment v-motion-fade-visible-once></Appointment> -->
    <!-- <Subscribe v-motion-fade-visible-once></Subscribe> -->
    <Contactus v-motion-fade-visible-once></Contactus>
    <LayoutTheFooter v-motion-fade-visible-once></LayoutTheFooter>
  </div>
</template>


<style scoped>
.animated-gradient-background {
  width: 100%;
  background: linear-gradient(45deg, var(--color-purple-400), #fff, #fbc2eb, #a6c1ee);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>