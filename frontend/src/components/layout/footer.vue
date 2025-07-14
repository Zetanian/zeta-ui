<script setup>
// # Modal Controllers
const showTC = ref(false)
const showPrivacy = ref(false)
const showUnSubscribe = ref(false)
const cancelledSubscription = ref(true)

// Form Variables
const email = ref('')
const debouncedEmail = useDebounce(email, 300)
const isEmailValid = computed(() => {
  // Basic regex to validate an email address.
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  return emailRegex.test(debouncedEmail.value)
})

function openMail() {
  let win = window.open('mailto:zetaniumglobal@gmail.com', '_blank')
  win.close()
}
</script>

<template>
  <footer class="app-max-width mt-32">
    <div class="flex justify-center gap-8 px-2">
      <div class="flex w-1/3 flex-col items-start">
        <img src="@/assets/zetanium.svg" width="160px" alt="Zetanium Logo" title="Zetanium Logo" />
        <p class="mt-8">
          Zetanium stands as a premier partner in IT services and staffing solutions, dedicated to
          bridging exceptional talent with transformative opportunities. We empower professionals to
          reach their full potential while driving businesses toward a future of optimized
          performance and innovation.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="mb-5 flex w-1/3 flex-col items-center">
        <div id="QuickLinks">
          <h3 class="mb-8 text-start text-lg font-bold">Quick Links</h3>
          <ul class="list-none p-0 md:block">
            <li>
              <router-link to="#about_us" class="no-underline hover:text-amber-400">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="#what_we_do" class="no-underline hover:text-amber-400">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="#" class="no-underline hover:text-amber-400"> Careers </router-link>
            </li>
            <li>
              <a class="cursor-pointer no-underline hover:text-amber-400" @click="showTC = true">
                Terms & Conditions
              </a>
            </li>
            <li>
              <!-- <a
              class="cursor-pointer no-underline hover:underline"
              @click="
                showUnSubscribe = true
                cancelledSubscription = false
                email = ''
              "
              >Unsubscribe</a -->
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Us -->
      <div class="mb-5 w-1/3 flex-1">
        <h3 class="mb-8 text-lg font-bold">Contact Us</h3>
        <div class="">
          <div class="font-medium">Zetanium Global</div>
          2588 Vicksburg Ln<br />
          Aurora, IL 60503<br />
          <span class="mt-2 inline-block font-medium">Phone:</span> 9296301230 <br />
          <span class="inline font-medium">Email:</span>
          <a href="mailto:zetaniumglobal@gmail.com" class="no-underline hover:underline">
            zetaniumglobal@gmail.com
          </a>

          <div class="mt-8 flex flex-col gap-4">
            <input
              type="button"
              value="Book a call"
              class="w-32 cursor-pointer rounded border border-white/30 bg-white/80 py-1 text-slate-950 transition-transform hover:scale-105"
            />
            <input
              type="button"
              value="Email Us"
              class="w-32 cursor-pointer rounded border border-white/30 bg-amber-400 py-1 text-slate-950 transition-transform hover:scale-105"
              @click="openMail"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 flex justify-between border-t border-amber-400 px-2 pt-4 pb-8">
      <span class="text-left">Copyright © 2025 Zetanium</span>
      <a class="cursor-pointer text-right no-underline hover:underline" @click="showPrivacy = true">
        Privacy Policy
      </a>
    </div>
  </footer>
</template>
