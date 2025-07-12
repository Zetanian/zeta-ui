<script setup>
const appData = useAppStore()

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
  <VModal v-model:visible="showTC">
    <TermAndConditions></TermAndConditions>
    <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
      @click="showTC = false">Close</button>
  </VModal>

  <VModal v-model:visible="showPrivacy">
    <PrivacyPolicy></PrivacyPolicy>
    <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
      @click="showPrivacy = false">Close</button>
  </VModal>

  <VModal v-model:visible="showUnSubscribe">
    <h2 class="font-medium mb-4 text-2xl text-[#004080]">Cancel Subscription</h2>

    <section v-if="!cancelledSubscription">
      <p>
        By canceling your subscription, you may stop receiving important updates and notifications from Zetanium Global.
        Fill the form below to continue.
      </p>
      <div class="my-8 flex items-center">
        <label class="w-1/3">Registered Email ID</label>
        <div class="w-full">
          <input v-model="email" type="email" :class="[
            'rounded-lg h-10 w-full px-2 bg-transparent border',
            email && !isEmailValid ? 'border-red-500' : 'border-zinc-700'
          ]" placeholder="Registered Email id.." />
          <p v-if="email && !isEmailValid" class="text-red-500 text-sm mt-1">
            Please enter a valid email address.
          </p>
        </div>
      </div>
      <div class="flex mb-8">
        <label class="w-1/3">Reason for Cancellation</label>
        <textarea class="rounded-lg h-24 px-2 w-full bg-transparent border border-zinc-700"></textarea>
      </div>

      <button 
        :class="{
          'bg-purple-700 cursor-pointer': isEmailValid,
          '!bg-gray-400 !cursor-not-allowed': !isEmailValid
        }"
        class="float-right text-white mr-2 w-[120px] py-1 rounded-sm cursor-pointer"
        @click="cancelledSubscription = true"
        :disabled="!isEmailValid"
        >
        Unsubscribe
      </button>

    </section>
    <div v-else>
      <p>Your subscription has been successfully canceled.</p>
      <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
        @click="showUnSubscribe = false">Close</button>
    </div>

  </VModal>

  <footer class="px-4 md:px-16">
    <div class="max-w-7xl mx-auto px-5 flex flex-wrap gap-8 justify-between pt-16 pb-8">
      <!-- About Section -->
      <div class="md:w-7/12 mb-5">
        <h3 class="text-lg font-bold mb-2">About Zetanium</h3>
        <p class="text-sm">
          Zetanium stands as a premier partner in IT services and staffing solutions, dedicated to bridging exceptional
          talent with transformative opportunities. We empower professionals to reach their full potential while driving
          businesses toward a future of optimized performance and innovation.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="md:w-2/12 mb-5">
        <h3 class="text-lg font-bold mb-2">Quick Links</h3>
        <ul class="md:block list-none p-0">
          <li><router-link to="#about_us" class="no-underline hover:underline">Home</router-link></li>
          <li><router-link to="#what_we_do" class="no-underline hover:underline">Services</router-link></li>
          <li><router-link to="#contact_us" class="no-underline hover:underline">Contact Us</router-link></li>
          <li><router-link to="#" class="no-underline hover:underline">Careers</router-link></li>
          <li><a @click="showTC = true" class="no-underline hover:underline cursor-pointer">Terms & Conditions</a></li>
          <li><a @click="showPrivacy = true" class="no-underline hover:underline cursor-pointer">Privacy Policy</a></li>
          <li><a @click="showUnSubscribe = true; cancelledSubscription = false; email = ''"
              class="no-underline hover:underline cursor-pointer">Unsubscribe</a>
          </li>
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="flex-1 mb-5">
        <h3 class="text-lg font-bold mb-2">Contact Us</h3>
        <div class="text-sm">
          <div class="font-medium">Zetanium Global</div>
          2588 Vicksburg Ln<br>
          Aurora, IL 60503<br><br>
          <span class="font-medium">Phone:</span> 9296301230 <br>
          <span class="font-medium">Email:</span>
          <a href="mailto:zetaniumglobal@gmail.com" class="no-underline hover:underline">zetaniumglobal@gmail.com</a>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="text-center mt-3 pb-16">
      <h3 class="text-lg font-bold mb-2">Follow Us</h3>
      <a href="#" class="mx-2 no-underline hover:underline">Facebook</a> |
      <a href="#" class="mx-2 no-underline hover:underline">Twitter</a> |
      <a href="https://www.linkedin.com/company/zetanium" class="mx-2 no-underline hover:underline" target="_blank">
        LinkedIn
      </a> |
      <a href="#" class="mx-2 no-underline hover:underline">Instagram</a>
    </div>

    <!-- Motto and Copyright -->
    <div class="text-center mt-5 pt-5 border-t border-[#555] pb-4">
      <p class="font-bold">"Organize. Optimize. Synergize."</p>
      <p class="text-sm">© 2025 Zetanium. All Rights Reserved.</p>
    </div>
  </footer>
</template>
