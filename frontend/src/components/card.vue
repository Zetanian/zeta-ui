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
.card {
  position: relative;
  width: 200px;
  height: 250px;
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
  width: 190px;
  height: 240px;
  z-index: 2;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000;
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