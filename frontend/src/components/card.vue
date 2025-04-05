<script setup>
</script>

<template>
  <div class="card">
    <div class="bg"></div>
    <div class="blob"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="css" scoped>
    /* box-shadow: 20px 20px 40px var(--color-blue-100),
    -20px -20px 40px var(--color-blue-200); */
.card {
  position: relative;
  width: 280px;
  height: 360px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.content {
  @apply z-3 text-center h-full;
}


.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 270px;
  height: 350px;
  z-index: 2;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

    /* background-color: var(--color-blue-700); */
.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--color-purple-500);
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite linear;
  will-change: transform; /* Add this line */
}

@keyframes blob-bounce {
  0% {
    transform: translate3d(-100%, -100%, 0);
  }

  25% {
    transform: translate3d(0%, -100%, 0);
  }

  50% {
    transform: translate3d(0%, 0%, 0);
  }

  75% {
    transform: translate3d(-100%, 0%, 0);
  }

  100% {
    transform: translate3d(-100%, -100%, 0);
  }
}
</style>