<script setup>
import { useDebounce } from '@vueuse/core'

const appData = useAppStore()
const isLoading = ref(false)
const withLoading = async (callback) => {
  isLoading.value = true
  try {
    await callback()
  } finally {
    isLoading.value = false
  }
}

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const desiredRole = ref('')
const fileUploadRef = ref(null)
const isTCAgreed = ref(false)
const isPrivacyPolicyAgreed = ref(false)

// modal controllers
const showTC = ref(false)
const showPrivacy = ref(false)

const debouncedEmail = useDebounce(email, 300)
const isEmailValid = computed(() => {
  // Basic regex to validate an email address.
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  return emailRegex.test(debouncedEmail.value)
})

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

const isFormValid = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    isEmailValid.value &&
    desiredRole.value &&
    fileUploadRef.value?.file &&
    isTCAgreed.value &&
    isPrivacyPolicyAgreed.value
  )
})


// Handle form submission
const submitForm = async () => {
  if (! fileUploadRef.value?.file) {
    alert('Please upload a PDF file.')
    return
  }
  
  const reader = new FileReader();
  reader.onloadend = async function () {

    const formData = new URLSearchParams();
    const base64 = reader.result.split(',')[1];

    formData.append('name', fullName.value)
    formData.append('email', email.value)
    formData.append('role', desiredRole.value)
    formData.append("filename", fileUploadRef.value.file.name);
    formData.append("contentType", fileUploadRef.value.file.type);
    formData.append('resumeFile', base64);

    try {
      await withLoading(async () => {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyAnS1LTl-jNXb-M6UplN7JKGA04TD7fdT5vKQ7KvHQTEpzoX5ctXuFRKdW62zXq-tA/exec', {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData,
        })

        if (response.ok) {
          alert('Resume submitted successfully!')
        } else {
          alert('Resume submission failed. Please try again.')
        }
      })
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  reader.readAsDataURL(fileUploadRef.value.file);

}

</script>

<template>


  <!--  -->
  <div
    class="px-4 md:px-16 py-24 flex flex-wrap md:flex-nowrap gap-6"
    id="contact_us"
  >
    <div class="md:w-1/2">
      <div class="font-medium text-center md:text-left text-4xl pb-4">Contact Us</div>
      <div class="mb-8">
        Interested in working together? Fill out basic info and upload your resume, we will be in touch shortly. We
        can't wait to hear from
        you!
      </div>
    </div>

    <div class="md:w-1/2">
      <div class="flex gap-4">
        <div class="w-1/2">
          <label>First Name</label>
          <input
            v-model="firstName"
            class="border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"
          />
        </div>

        <div class="w-1/2">
          <label>Last Name</label>
          <input
            v-model="lastName"
            class="border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"
          />
        </div>
      </div>

      <div class="my-4">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          :class="[
            'rounded-lg h-10 px-2 w-full bg-transparent border',
            email && !isEmailValid ? 'border-red-500' : 'border-zinc-700'
          ]"
        />
        <p
          v-if="email && !isEmailValid"
          class="text-red-500 text-sm mt-1"
        >
          Please enter a valid email address.
        </p>
      </div>

      <div class="my-4">
        <label>Desired Role</label>
        <input
          v-model="desiredRole"
          type="text"
          class="border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"
        />
      </div>

      <div class="my-4">
        <label>Resume</label>
        <FileUpload ref="fileUploadRef" />
      </div>

      
      <div class="my-4 h-6 flex items-center">
        <input
          type="checkbox"
          class="mr-2 w-4 h-4"
          v-model="isTCAgreed"
        />
        <label>Agree to <span class="cursor-pointer underline" @click="showTC = true">Terms & Conditions</span></label>
        <VModal v-model:visible="showTC">
          <TermAndConditions></TermAndConditions>
          <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
            @click="showTC = false">Close</button>
        </VModal>
      </div>

      <div class="my-4 h-6 flex items-center">
        <input
          type="checkbox"
          class="mr-2 w-4 h-4"
          v-model="isPrivacyPolicyAgreed"
        />
        <label>Agree to <span class="cursor-pointer underline" @click="showPrivacy = true">Privacy Policy</span></label>
        <VModal v-model:visible="showPrivacy">
          <PrivacyPolicy></PrivacyPolicy>
          <button class="bg-purple-700 float-right text-white mr-2 w-[112px] py-1 rounded-sm cursor-pointer"
            @click="showPrivacy = false">Close</button>
        </VModal>
      </div>

      <button
        @click="submitForm"
        class="bg-purple-700 text-white w-[180px] py-2 rounded-lg hover:bg-purple-800 transition duration-200"
        :disabled="!isFormValid"
        :class="{
          'bg-purple-700 cursor-pointer': isFormValid,
          '!bg-gray-400 cursor-not-allowed': !isFormValid
        }"
        :title="!isFormValid ? 'Fill in all details and select resume to upload' : ''"
      >
        Upload & Subscribe
      </button>
    </div>

  </div>

  <!-- Loading Overlay -->
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-black opacity-75 flex items-center justify-center z-50"
  >
    <div class="text-center opacity-100 text-white flex flex-col items-center">
      <Icon
        icon="line-md:loading-twotone-loop"
        width="48"
        height="48"
        class="mb-4"
      />
      <p class="text-center">Uploading...</p>
    </div>
  </div>

</template>

<style scoped>
.contactus {
  background-color: rgb(236, 228, 218);
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>