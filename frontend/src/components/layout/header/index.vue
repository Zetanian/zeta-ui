<script setup>
const router = useRouter()

const state = reactive({
  showDropdown: false,
  activeMenu: ''
})

const dropdownPosition = reactive({ left: 0, top: 0, width: 0 })

onBeforeRouteUpdate((nav) => {
  console.log("Called", nav)
})

const showDropdown = (menu, event) => {

  console.log("showDropdown called", menu, event)

  const menuItemsWithDropdown = ['services', 'company']
  if (!menuItemsWithDropdown.includes(menu)) {
    state.showDropdown = false
    return
  }


  state.activeMenu = menu
  state.showDropdown = true
  // Get button position relative to viewport
  const rect = event.target.getBoundingClientRect()
  dropdownPosition.left = rect.left + rect.width / 2
  dropdownPosition.top = rect.bottom
  dropdownPosition.width = rect.width
}

const hideDropdown = () => {
  state.showDropdown = false
}
</script>

<template>
  <header class="fixed top-10 w-full lg:w-[90%] flex h-24 bg-zinc-800/50 backdrop-blur-md rounded-xl shadow-lg z-50">
    <div class="flex items-center justify-between w-full px-6">

      <div>
        <button class="lg:hidden text-white text-2xl">
          <Icon icon="fa:bars" width="32" height="32" />
        </button>
      </div>

      <div class="w-full lg:w-1/4 flex items-center justify-center lg:justify-start">
        <img src="@/assets/zetanium.svg" width="160px" alt="Zetanium Logo" title="Zetanium Logo" />
      </div>

      <div class="w-3/4 lg:flex items-center justify-end hidden">
        <div v-for="menu in ['Services', 'Industries', 'Portfolio', 'Company', 'Blog']" :key="menu"
          class="relative flex w-1/6">
          <button class="text-white text-xl hover:cursor-pointer" @mouseover="showDropdown(menu.toLowerCase(), $event)">
            {{ menu }}
          </button>
        </div>

        <button
          class="w-1/6 text-white text-xl px-4 py-2 border border-white/30 rounded-md hover:bg-white hover:text-slate-950 hover:cursor-pointer ml-4">
          Get in Touch
        </button>
      </div>
    </div>
  </header>

  <div v-if="state.showDropdown" class="fixed z-[100] left-0 top-10 pointer-events-none text-lg font-poppins"
    style="width: 100vw; height: 100vh;">
    <div
      class="absolute rounded-xl my-blur border border-white/10 shadow-2xl p-8 pointer-events-auto transition-all duration-300 ease-in-out"
      :style="{
        left: `${dropdownPosition.left}px`,
        top: `${dropdownPosition.top + 8}px`,
        minWidth: '320px',
        width: '720px',
        transform: 'translateX(-50%)'
      }">
      <div v-if="state.activeMenu === 'services'" class="min-w-[450px] z-[60]">
        <div class="grid grid-cols-4 gap-2">
          <div class="col-span-2 flex items-center border-r border-gray-700 pr-4">
            <span class="font-semibold">Our Services</span>
          </div>
          <div class="col-span-2 pl-4 w-full">
            <LayoutHeaderMenuItem name="Software Development" />
            <LayoutHeaderMenuItem name="Web Development" />
            <LayoutHeaderMenuItem name="Mobile App Development" />
            <LayoutHeaderMenuItem name="AI Software Development" />
            <LayoutHeaderMenuItem name="Data Management & Analytics" />
          </div>
        </div>
      </div>
      <div v-else-if="state.activeMenu === 'company'">
        <div class="grid grid-cols-6 gap-6 text-white">
          <div class="col-span-2 flex items-center border-r border-gray-700 pr-4">
            <span class="font-semibold">Company</span>
          </div>
          <div class="col-span-2 pl-4 w-full">
            <LayoutHeaderMenuItem name="About Us" />
            <LayoutHeaderMenuItem name="Careers" />
            <LayoutHeaderMenuItem name="Contact Us" />
          </div>
          <div class="col-span-2 pl-4 w-full">
            <LayoutHeaderMenuItem name="Privacy Policy" />
            <LayoutHeaderMenuItem name="Terms of Service" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
header {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.my-blur {
  background-color: rgba(30, 30, 30, 0.5);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: background-color 0.3s cubic-bezier(.4, 0, .2, 1), backdrop-filter 0.3s cubic-bezier(.4, 0, .2, 1);
}
</style>
