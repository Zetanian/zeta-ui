<script setup>
const appData = useAppStore()
const router = useRouter()
const isMenuOpen = ref(false);

function navigate(page) {
  if (page.type === 'external') {
    router.push({
      path: page.path
    })
  } else {
    router.push({ hash: page.hash })
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<!-- bg-purple-900 -->
<template>
  <div class="h-[64px]  bg-purple-900 px-4 md:px-16 py-4 w-full z-100 text-white">
    <div class="title-bar text-xl flex justify-between items-center">
      <router-link
        to="#about_us"
        class="text-4xl text-white w-full text-center md:w-1/4 md:text-left"
      >
        <!-- {{ appData.appName }} -->
        <img
          src="@/assets/zetanium.svg"
          width="160px"
        />
      </router-link>

      <!-- Navigation Links -->
      <div class="nav text-base md:flex items-center hidden">
        <button
          v-for="page, idx in appData.pages"
          :key="idx"
          class="mr-4 cursor-pointer"
          @click="navigate(page)"
        >
          {{ page.name }}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden mt-4"
    >
      <button
        v-for="page, idx in appData.pages"
        :key="idx"
        class="block w-full text-left py-2 cursor-pointer"
        @click="navigate(page)"
      >
        {{ page.name }}
      </button>
    </div>
  </div>
</template>