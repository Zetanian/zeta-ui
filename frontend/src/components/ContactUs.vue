<script setup>
import { useDebounce } from '@vueuse/core'

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
  if (!fileUploadRef.value?.file) {
    alert('Please upload a PDF file.')
    return
  }

  const reader = new FileReader()
  reader.onloadend = async function () {
    const formData = new URLSearchParams()
    const base64 = reader.result.split(',')[1]

    formData.append('name', fullName.value)
    formData.append('email', email.value)
    formData.append('role', desiredRole.value)
    formData.append('filename', fileUploadRef.value.file.name)
    formData.append('contentType', fileUploadRef.value.file.type)
    formData.append('resumeFile', base64)

    try {
      await withLoading(async () => {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbyAnS1LTl-jNXb-M6UplN7JKGA04TD7fdT5vKQ7KvHQTEpzoX5ctXuFRKdW62zXq-tA/exec',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
          }
        )

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

  reader.readAsDataURL(fileUploadRef.value.file)
}
</script>

<template>
  <!--  -->
  <div id="contact_us" class="py-24 md:flex-nowrap">
    <div class="pb-4 text-center text-4xl font-medium md:text-left">Contact Us</div>

    <div class="flex flex-wrap gap-6">
      <div class="mb-8">
        Interested in working together? Fill out basic info and upload your resume, we will be in
        touch shortly. We can't wait to hear from you!
      </div>
    </div>

    <div class="md:w-1/2">
      <div class="flex gap-4">
        <div class="w-1/2">
          <label>First Name</label>
          <input
            v-model="firstName"
            class="h-10 w-full rounded-lg border border-zinc-700 bg-transparent px-2"
          />
        </div>

        <div class="w-1/2">
          <label>Last Name</label>
          <input
            v-model="lastName"
            class="h-10 w-full rounded-lg border border-zinc-700 bg-transparent px-2"
          />
        </div>
      </div>

      <div class="my-4">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          :class="[
            'h-10 w-full rounded-lg border bg-transparent px-2',
            email && !isEmailValid ? 'border-red-300' : 'border-zinc-700',
          ]"
        />
        <p v-if="email && !isEmailValid" class="mt-1 text-sm text-red-300">
          Please enter a valid email address.
        </p>
      </div>

      <div class="my-4">
        <label>Desired Role</label>
        <input
          v-model="desiredRole"
          type="text"
          class="h-10 w-full rounded-lg border border-zinc-700 bg-transparent px-2"
        />
      </div>

      <div class="my-4">
        <label>Resume</label>
        <FileUpload ref="fileUploadRef" />
      </div>

      <div class="my-4 flex h-6 items-center">
        <input v-model="isTCAgreed" type="checkbox" class="mr-2 h-4 w-4" />
        <label
          >Agree to
          <span class="cursor-pointer underline" @click="showTC = true"
            >Terms & Conditions</span
          ></label
        >
        <VModal v-model:visible="showTC">
          <TermAndConditions />
          <button
            class="float-right mr-2 w-[112px] cursor-pointer rounded-sm bg-purple-700 py-1 text-white"
            @click="showTC = false"
          >
            Close
          </button>
        </VModal>
      </div>

      <div class="my-4 flex h-6 items-center">
        <input v-model="isPrivacyPolicyAgreed" type="checkbox" class="mr-2 h-4 w-4" />
        <label
          >Agree to
          <span class="cursor-pointer underline" @click="showPrivacy = true"
            >Privacy Policy</span
          ></label
        >
        <VModal v-model:visible="showPrivacy">
          <PrivacyPolicy />
          <button
            class="float-right mr-2 w-[112px] cursor-pointer rounded-sm bg-purple-700 py-1 text-white"
            @click="showPrivacy = false"
          >
            Close
          </button>
        </VModal>
      </div>

      <button
        class="w-[180px] rounded-lg bg-purple-700 py-2 text-white transition duration-200 hover:bg-purple-800"
        :disabled="!isFormValid"
        :class="{
          'cursor-pointer bg-purple-700': isFormValid,
          'cursor-not-allowed !bg-gray-400': !isFormValid,
        }"
        :title="!isFormValid ? 'Fill in all details and select resume to upload' : ''"
        @click="submitForm"
      >
        Upload & Subscribe
      </button>
    </div>
  </div>

  <!-- Loading Overlay -->
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-75"
  >
    <div class="flex flex-col items-center text-center text-white opacity-100">
      <Icon icon="line-md:loading-twotone-loop" width="48" height="48" class="mb-4" />
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
