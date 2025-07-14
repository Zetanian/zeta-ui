<script setup>
onBeforeRouteUpdate((nav) => {
  console.log('Called', nav)
})
</script>

<template>
  <LayoutHeader />
  <LayoutJumbotron />
  <Services></Services>
  <ContactUs></ContactUs>
  <LayoutFooter />
</template>
