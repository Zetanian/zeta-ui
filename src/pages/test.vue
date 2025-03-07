<script lang="js" setup>
const router = useRouter()
onBeforeRouteUpdate((nav) => {
  console.log("Called", nav)
})

</script>

<template>
  <div @click="router.push('/')">
    TEST
  </div>
</template>