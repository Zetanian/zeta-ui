<script setup>
const appData = useAppStore()
</script>

<template>
  <div class="jumbotron px-16 pt-4 pb-16">
    <div class="text-6xl text-center py-16">Discover Elite Career Opportunities</div>

    <div
      id="jumbotron_image"
      class="relative"
    >
      <div class="absolute bottom-16 left-8 text-[22px] text-[rgb(235,227,217)] w-2/6">
        Discover a world where ambition meets elegance in the pursuit of your dream career. Elevate your job
        search with exclusive insights and refined opportunities tailored for the discerning professional.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  background-color: rgb(185, 165, 144);
}

#jumbotron_image {
  background-color: rgb(185, 165, 144);
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    display: block;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 640px;
    background-image: url('~/assets/images/imgg-od3-_05zdz1u.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 25%;
    background-color: rgba(36, 32, 27, 0.5);
    background-blend-mode: multiply;
  }
}

</style>