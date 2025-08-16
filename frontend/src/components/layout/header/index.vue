<script setup>
const state = reactive({
  showDropdown: false,
  activeMenu: '',
})

const dropdownPosition = reactive({ left: 0, top: 0, width: 0 })

onBeforeRouteUpdate((nav) => {
  console.log('Called', nav)
})

const showDropdown = (menu, event) => {
  console.log('showDropdown called', menu, event)

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
  <header
    class="app-max-width fixed top-10 left-1/2 z-50 flex h-24 w-full -translate-x-1/2 justify-center rounded-xl bg-zinc-800/50 px-8 shadow-lg backdrop-blur-md"
  >
    <div class="group">
      <button class="flex h-full items-center justify-center text-2xl text-white md:hidden">
        <Icon icon="fa:bars" width="32" height="32" />
      </button>

      <!-- Todo: Responsive SideMenu for mobile -->
      <div class="hidden group-hover:block">
        <div
          v-for="menu in ['Services', 'Industries', 'Portfolio', 'Company', 'Blog']"
          :key="menu"
          class="relative flex w-1/12"
        >
          {{ menu }}
        </div>
      </div>
    </div>

    <div class="flex w-[160px] items-center justify-center lg:w-1/4 lg:justify-start">
      <img src="@/assets/zetanium.svg" width="160px" alt="Zetanium Logo" title="Zetanium Logo" />
    </div>

    <div class="hidden flex-1 items-center justify-end gap-8 md:flex">
      <div
        v-for="menu in ['Services', 'Industries', 'Portfolio', 'Company', 'Blog']"
        :key="menu"
        class="relative flex gap-2"
      >
        <button
          class="text-xl text-white hover:cursor-pointer"
          @mouseover="showDropdown(menu.toLowerCase(), $event)"
        >
          {{ menu }}
        </button>
      </div>

      <Teleport to="body">
        <div
          v-if="state.showDropdown"
          class="font-poppins pointer-events-none fixed top-10 left-0 z-[100] text-lg text-white"
          style="width: 100vw; height: 100vh"
        >
          <div
            class="my-blur pointer-events-auto absolute rounded-xl border border-white/10 p-8 shadow-2xl transition-all duration-300 ease-in-out"
            :style="{
              left: `${dropdownPosition.left}px`,
              top: `${dropdownPosition.top + 8}px`,
              minWidth: '320px',
              width: '720px',
              transform: 'translateX(-50%)',
            }"
            @mouseleave="hideDropdown"
          >
            <div v-if="state.activeMenu === 'services'" class="z-[60] min-w-[450px]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2 flex items-center border-r border-gray-700 pr-4">
                  <span class="font-semibold">Our Services</span>
                </div>
                <div class="col-span-2 w-full pl-4">
                  <LayoutHeaderMenuItem name="Software Development" />
                  <LayoutHeaderMenuItem name="Web Development" />
                  <LayoutHeaderMenuItem name="Mobile App Development" />
                  <LayoutHeaderMenuItem name="AI Software Development" />
                  <LayoutHeaderMenuItem name="Data Management & Analytics" />
                </div>
              </div>
            </div>
            <div v-else-if="state.activeMenu === 'company'">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-2 flex items-center border-r border-gray-700 pr-4">
                  <span class="font-semibold">Company</span>
                </div>
                <div class="col-span-2 w-full pl-4">
                  <LayoutHeaderMenuItem name="About Us" />
                  <LayoutHeaderMenuItem name="Careers" />
                  <LayoutHeaderMenuItem name="Contact Us" />
                </div>
                <div class="col-span-2 w-full pl-4">
                  <LayoutHeaderMenuItem name="Privacy Policy" />
                  <LayoutHeaderMenuItem name="Terms of Service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>

    <div class="jusity-center flex items-center">
      <button
        class="hover:shadow-rnd ml-8 flex h-10 w-3/12 flex-1/4 items-center rounded-md border border-white/30 px-4 py-2 text-xl text-white transition hover:cursor-pointer hover:bg-amber-400 hover:text-slate-950 hover:shadow-amber-400 lg:w-1/6"
        @click="$router.push('/signin')"
      >
        Sign In
      </button>
    </div>
  </header>
</template>

<style lang="scss">
header {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.my-blur {
  background-color: rgba(30, 30, 30, 0.5);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
