<script setup>
const appData = useAppStore()

const showTC = ref(false)
const showPrivacy = ref(false)

const termsAndConditions = [
  {
    title: "Introduction",
    description: "Welcome to Zetanium Global. By accessing and using our website, services, and related digital platforms, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our services."
  },
  {
    title: "Use of Website",
    description: "You agree to use our website only for lawful purposes. You must not use it in any way that breaches any applicable laws or regulations or causes harm to the company or any third party."
  },
  {
    title: "Intellectual Property",
    description: "All content on this website, including text, graphics, logos, and software, is the property of Zetanium Global or its content suppliers and is protected by applicable intellectual property laws. You may not copy, reproduce, or redistribute any part of the website without our prior written consent."
  },
  {
    title: "User Submissions",
    description: "If you submit any information or content to us through our website, you grant Zetanium Global the right to use, reproduce, and distribute such content in connection with our business operations. You agree not to post or transmit any content that is unlawful, offensive, or infringes on the rights of others."
  },
  {
    title: "Limitation of Liability",
    description: "Zetanium Global will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use our website or services. All information provided is for general information purposes only and should not be relied upon without professional advice."
  },
  {
    title: "External Links",
    description: "Our website may contain links to third-party websites. These links are provided for your convenience only. Zetanium Global has no control over the content or practices of these sites and assumes no responsibility for them."
  },
  {
    title: "Privacy",
    description: "Your use of our website is also governed by our <a href='/privacy-policy'>Privacy Policy</a>. By using our services, you consent to the collection and use of information as described in that policy."
  },
  {
    title: "Modifications",
    description: "Zetanium Global reserves the right to update or modify these terms at any time without prior notice. Your continued use of the website constitutes acceptance of those changes."
  },
  {
    title: "Governing Law",
    description: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu."
  },
  {
    title: "Contact Us",
    description: "For questions about these terms, please contact us at <a href='mailto:info@zetaniumglobal.com'>admin@zetaniumglobal.com</a>"
  },
]

const privacyPolicy = [
  {
    title: "Introduction",
    description: "At Zetanium Global, we are committed to safeguarding the privacy of our website visitors, clients, and partners. This privacy policy outlines the types of personal and non-personal information we collect, how it is used, and the measures we take to protect your data. We value transparency, trust, and integrity in all our operations."
  },
  {
    title: "Collection of Personal Information",
    description: "Zetanium Global collects personally identifiable information on a voluntary basis. This may include, but is not limited to, your name, company name, email address, telephone number, postal address, and inquiries related to Zetanium Global services. You may provide this information when you request details about our services, sign up for newsletters or updates, participate in surveys, events, or promotions, or contact us for support or business inquiries."
  },
  {
    title: "Use of Personal Information",
    description: "We use the collected personal information to enhance service offerings, respond to inquiries or provide requested information, and notify users about service updates or changes. All personal data is stored securely and is retained only as long as necessary to fulfill its intended purpose. Any changes to how we collect or use personal information will be reflected in an updated version of this privacy policy."
  },
  {
    title: "Non-Personal Information",
    description: "We may also collect non-personally identifiable information, including browser type and operating system, general demographic information, and user interaction patterns on our website. This data helps us analyze usage trends, optimize site performance, and improve the user experience. It is used exclusively for internal purposes and is not shared with external entities."
  },
  {
    title: "Updating or Deleting Your Information",
    description: "To request updates, corrections, or deletion of your personal information, please contact us at <a href='mailto:info@zetaniumglobal.com'>admin@zetaniumglobal.com</a>. We are committed to maintaining accurate and secure records."
  },
  {
    title: "Policy Changes",
    description: "Zetanium Global reserves the right to modify this privacy policy at any time. Any changes will be published on our website, along with the effective date of the update. We encourage you to review the policy periodically."
  },
  {
    title: "Mobile Data and Third-Party Sharing",
    description: "We do not share mobile information with third parties or affiliates for marketing or promotional purposes. All categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
  },
]

</script>

<template>
  <VModal v-model:visible="showTC">
    <h1 class="font-medium mb-4 text-2xl text-[#004080]">Terms and Conditions</h1>
    <div v-for="item in termsAndConditions" class="my-4 ">
      <h2 class="font-medium text-xl mb-2 text-[#004080]">{{ item.title }}</h2>
      <p v-html="item.description"></p>
    </div>
    <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
      @click="showTC = false">Close</button>
  </VModal>

  <VModal v-model:visible="showPrivacy">
    <h1 class="font-medium mb-4 text-2xl text-[#004080]">Privacy Policy</h1>
    <div v-for="item in privacyPolicy" class="my-4 ">
      <h2 class="font-medium text-xl mb-2 text-[#004080]">{{ item.title }}</h2>
      <p v-html="item.description"></p>
    </div>
    <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
      @click="showPrivacy = false">Close</button>
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
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="flex-1 mb-5">
        <h3 class="text-lg font-bold mb-2">Contact Us</h3>
        <div class="text-sm">
          <div class="font-medium">Zetanium Global</div>
          2588 Vicksburg Ln<br>
          Aurora, IL 60503<br><br>
          <span class="font-medium">Phone:</span> 9296301231<br>
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
