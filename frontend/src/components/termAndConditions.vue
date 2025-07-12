<script setup>

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

</script>

<template>
  <h2 class="font-medium mb-4 text-2xl text-[#004080]">Terms and Conditions</h2>
  <div v-for="item in termsAndConditions" class="my-4 ">
    <h2 class="font-medium text-xl mb-2 text-[#004080]">{{ item.title }}</h2>
    <p v-html="item.description"></p>
  </div>
</template>