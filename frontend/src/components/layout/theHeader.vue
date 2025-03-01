<script setup>
const appData = useAppStore()
const router = useRouter()

function navigate(page) {
  if (page.type === 'external') {
    router.push({
      path: page.path
    })
  } else {
    router.push({ hash: page.hash })
  }
}
</script>

<template>
  <div class="h-[72px] bg-purple-900 px-16 py-4 w-full z-100 text-white ">
    <div class="title-bar text-xl flex justify-between">
      <router-link
        to="#about_us"
        class="text-4xl"
      >
        {{ appData.appName }}
      </router-link>
      <div class="nav text-base flex items-center">
        <button
          v-for="page, idx in appData.pages"
          :key="idx"
          class="mr-4 cursor-pointer"
          @click=navigate(page)
        >
          {{ page.name }}
        </button>
      </div>
    </div>
  </div>
</template>

