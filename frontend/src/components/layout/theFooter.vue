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
</script>

<template>
  <footer class="contianer">
    <VModal v-model:visible="showTC">
      <TermAndConditions />
      <button
        class="float-right mr-2 w-[112px] cursor-pointer rounded-sm py-1 text-white"
        @click="showTC = false"
      >
        Close
      </button>
    </VModal>

    <VModal v-model:visible="showPrivacy">
      <PrivacyPolicy />
      <button
        class="float-right mr-2 w-[112px] cursor-pointer rounded-sm py-1 text-white"
        @click="showPrivacy = false"
      >
        Close
      </button>
    </VModal>

    <VModal v-model:visible="showUnSubscribe">
      <h2 class="mb-4 text-2xl font-medium text-[#004080]">Cancel Subscription</h2>

      <section v-if="!cancelledSubscription">
        <p>
          By canceling your subscription, you may stop receiving important updates and notifications
          from Zetanium Global. Fill the form below to continue.
        </p>
        <div class="my-8 flex items-center">
          <label class="w-1/3">Registered Email ID</label>
          <div class="w-full">
            <input
              v-model="email"
              type="email"
              :class="[
                'h-10 w-full rounded-lg border bg-transparent px-2',
                email && !isEmailValid ? 'border-red-500' : 'border-zinc-700',
              ]"
              placeholder="Registered Email id.."
            />
            <p v-if="email && !isEmailValid" class="mt-1 text-sm text-red-500">
              Please enter a valid email address.
            </p>
          </div>
        </div>
        <div class="mb-8 flex">
          <label class="w-1/3">Reason for Cancellation</label>
          <textarea class="h-24 w-full rounded-lg border border-zinc-700 bg-transparent px-2" />
        </div>

        <button
          :class="{
            'cursor-pointer bg-purple-700': isEmailValid,
            '!cursor-not-allowed !bg-gray-400': !isEmailValid,
          }"
          class="float-right mr-2 w-[120px] cursor-pointer rounded-sm py-1 text-white"
          :disabled="!isEmailValid"
          @click="cancelledSubscription = true"
        >
          Unsubscribe
        </button>
      </section>
      <div v-else>
        <p>Your subscription has been successfully canceled.</p>
        <button
          class="float-right mr-2 w-[112px] cursor-pointer rounded-sm bg-purple-700 py-1 text-white"
          @click="showUnSubscribe = false"
        >
          Close
        </button>
      </div>
    </VModal>

    <div class="flex items-center justify-center gap-8">
      <!-- About Section -->
      <div class="mb-5 md:w-7/12">
        <h3 class="mb-2 text-lg font-bold">About Zetanium</h3>
        <p class="text-sm">
          Zetanium stands as a premier partner in IT services and staffing solutions, dedicated to
          bridging exceptional talent with transformative opportunities. We empower professionals to
          reach their full potential while driving businesses toward a future of optimized
          performance and innovation.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="mb-5 md:w-2/12">
        <h3 class="mb-2 text-lg font-bold">Quick Links</h3>
        <ul class="list-none p-0 md:block">
          <li>
            <router-link to="#about_us" class="no-underline hover:underline"> Home </router-link>
          </li>
          <li>
            <router-link to="#what_we_do" class="no-underline hover:underline">
              Services
            </router-link>
          </li>
          <li>
            <router-link to="#contact_us" class="no-underline hover:underline">
              Contact Us
            </router-link>
          </li>
          <li>
            <router-link to="#" class="no-underline hover:underline"> Careers </router-link>
          </li>
          <li>
            <a class="cursor-pointer no-underline hover:underline" @click="showTC = true"
              >Terms & Conditions</a
            >
          </li>
          <li>
            <a class="cursor-pointer no-underline hover:underline" @click="showPrivacy = true"
              >Privacy Policy</a
            >
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

      <!-- Contact Us -->
      <div class="mb-5 flex-1">
        <h3 class="mb-2 text-lg font-bold">Contact Us</h3>
        <div class="text-sm">
          <div class="font-medium">Zetanium Global</div>
          2588 Vicksburg Ln<br />
          Aurora, IL 60503<br /><br />
          <span class="font-medium">Phone:</span> 9296301230 <br />
          <span class="font-medium">Email:</span>
          <a href="mailto:zetaniumglobal@gmail.com" class="no-underline hover:underline"
            >zetaniumglobal@gmail.com</a
          >
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="mt-3 pb-16 text-center">
      <h3 class="mb-2 text-lg font-bold">Follow Us</h3>
      <a href="#" class="mx-2 no-underline hover:underline">Facebook</a> |
      <a href="#" class="mx-2 no-underline hover:underline">Twitter</a> |
      <a
        href="https://www.linkedin.com/company/zetanium"
        class="mx-2 no-underline hover:underline"
        target="_blank"
      >
        LinkedIn
      </a>
      |
      <a href="#" class="mx-2 no-underline hover:underline">Instagram</a>
    </div>

    <!-- Motto and Copyright -->
    <div class="mt-5 border-t border-[#555] pt-5 pb-4 text-center">
      <p class="font-bold">"Organize. Optimize. Synergize."</p>
      <p class="text-sm">© 2025 Zetanium. All Rights Reserved.</p>
    </div>
  </footer>
</template>
