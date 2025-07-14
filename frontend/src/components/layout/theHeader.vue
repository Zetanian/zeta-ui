<script setup>
const appData = useAppStore()
const router = useRouter()
const isMenuOpen = ref(false)

function navigate(page) {
  if (page.type === 'external') {
    router.push({
      path: page.path,
    })
  } else {
    router.push({ path: '/', hash: page.hash })
  }
}

// function toggleMenu() {
//   isMenuOpen.value = !isMenuOpen.value;
// }
</script>
<!-- bg-purple-900 -->
<template>
  <div class="z-100 h-[64px] w-full bg-purple-900 px-4 py-4 text-white md:px-16">
    <div class="title-bar flex items-center justify-between text-xl">
      <router-link
        to="/#about_us"
        class="w-full text-center text-4xl text-white md:w-1/4 md:text-left"
      >
        <!-- {{ appData.appName }} -->
        <img src="@/assets/zetanium.svg" width="160px" />
      </router-link>

      <!-- Navigation Links -->
      <div class="nav hidden items-center text-base md:flex">
        <button
          v-for="(page, idx) in appData.pages"
          :key="idx"
          class="mr-4 cursor-pointer"
          @click="navigate(page)"
        >
          {{ page.name }}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="mt-4 md:hidden">
      <button
        v-for="(page, idx) in appData.pages"
        :key="idx"
        class="block w-full cursor-pointer py-2 text-left"
        @click="navigate(page)"
      >
        {{ page.name }}
      </button>
    </div>
  </div>
</template>
