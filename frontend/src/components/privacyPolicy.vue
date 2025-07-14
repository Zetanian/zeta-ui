<script setup>
const privacyPolicy = [
  {
    title: 'Introduction',
    description:
      'At Zetanium Global, we are committed to safeguarding the privacy of our website visitors, clients, and partners. This privacy policy outlines the types of personal and non-personal information we collect, how it is used, and the measures we take to protect your data. We value transparency, trust, and integrity in all our operations.',
  },
  {
    title: 'Collection of Personal Information',
    description:
      'Zetanium Global collects personally identifiable information on a voluntary basis. This may include, but is not limited to, your name, company name, email address, telephone number, postal address, and inquiries related to Zetanium Global services. You may provide this information when you request details about our services, sign up for newsletters or updates, participate in surveys, events, or promotions, or contact us for support or business inquiries.',
  },
  {
    title: 'Use of Personal Information',
    description:
      'We use the collected personal information to enhance service offerings, respond to inquiries or provide requested information, and notify users about service updates or changes. All personal data is stored securely and is retained only as long as necessary to fulfill its intended purpose. Any changes to how we collect or use personal information will be reflected in an updated version of this privacy policy.',
  },
  {
    title: 'Non-Personal Information',
    description:
      'We may also collect non-personally identifiable information, including browser type and operating system, general demographic information, and user interaction patterns on our website. This data helps us analyze usage trends, optimize site performance, and improve the user experience. It is used exclusively for internal purposes and is not shared with external entities.',
  },
  {
    title: 'Updating or Deleting Your Information',
    description:
      "To request updates, corrections, or deletion of your personal information, please contact us at <a href='mailto:info@zetaniumglobal.com'>admin@zetaniumglobal.com</a>. We are committed to maintaining accurate and secure records.",
  },
  {
    title: 'Policy Changes',
    description:
      'Zetanium Global reserves the right to modify this privacy policy at any time. Any changes will be published on our website, along with the effective date of the update. We encourage you to review the policy periodically.',
  },
  {
    title: 'Mobile Data and Third-Party Sharing',
    description:
      'We do not share mobile information with third parties or affiliates for marketing or promotional purposes. All categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.',
  },
]
</script>

<template>
  <h2 class="mb-4 text-2xl font-medium text-[#004080]">Privacy Policy</h2>
  <div v-for="(item, idx) in privacyPolicy" :key="idx" class="my-4">
    <h2 class="mb-2 text-xl font-medium text-[#004080]">
      {{ item.title }}
    </h2>
    <p v-html="item.description" />
  </div>
</template>
