<script setup>
const appData = useAppStore()
</script>

<template>
  <!--  -->
  <div
    class="px-16 py-24 flex gap-6"
    id="contact_us"
  >
    <div class="w-1/2 px-8 ">
      <div class="font-medium text-4xl pb-4">Contact Us</div>
      <div class="mb-8">
        Interested in working together? Fill out some info and we will be in touch shortly. We can’t wait to hear from
        you!
      </div>
    </div>

    <div class="w-1/2 ">
      <div class="flex  gap-4">
        <div class="w-1/2">
          <div classs="">First Name</div>
          <div class="border-[1px] inline-block  h-10 border-zinc-700 rounded-lg w-full">
            <input class="bg-transparent px-2  h-full focus:outline-hidden w-full" />
          </div>
        </div>

        <div class="w-1/2">
          <div classs="">Last Name</div>
          <div class="border-[1px]  inline-block  h-10 border-zinc-700 rounded-lg   w-full">
            <input class="bg-transparent px-2 h-full focus:outline-hidden w-full" />
          </div>
        </div>
      </div>

      <div class="my-4">
        <div classs="">Email</div>
        <div class="border-[1px] inline-block  h-10 border-zinc-700 rounded-lg w-full">
          <input class="bg-transparent px-2  h-full focus:outline-hidden w-full" />
        </div>
      </div>

      <div class="my-4">
        <div classs="">Message</div>
        <div class="border-[1px] inline-block  min-h-22 border-zinc-700 rounded-lg w-full">
          <textarea class="bg-transparent px-2 py-2  h-full focus:outline-hidden w-full resize-none" />
        </div>
      </div>

      <button class="bg-purple-700 text-white w-[108px] py-2 rounded-lg">Send</button>
    </div>

  </div>
</template>

<style scoped>
.contactus {
  background-color: rgb(236, 228, 218);
}
</style>