<script setup></script>

<template>
  <div class="container mx-auto mt-20 max-w-md rounded-lg border border-gray-300 p-6 shadow-md">
    <div class="flex w-[160px] items-center justify-center lg:w-1/4 lg:justify-start">
      <img src="@/assets/zetanium.svg" width="160px" alt="Zetanium Logo" title="Zetanium Logo" />
    </div>
    <h1>Sign In</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>
