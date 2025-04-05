<script setup>
const appData = useAppStore()
</script>

<template>
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
      <div class="hidden md:block w-2/12 mb-5">
        <h3 class="text-lg font-bold mb-2">Quick Links</h3>
        <ul class="list-none p-0">
          <li><router-link
              to="#about_us"
              class="no-underline hover:underline"
            >Home</router-link></li>
          <li><a
              href="#"
              class="no-underline hover:underline"
            >Services</a></li>
          <li><a
              href="#"
              class="no-underline hover:underline"
            >Careers</a></li>
          <li><a
              href="#"
              class="no-underline hover:underline"
            >Contact Us</a></li>
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
          <a
            href="mailto:zetaniumglobal@gmail.com"
            class="no-underline hover:underline"
          >zetaniumglobal@gmail.com</a>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="text-center mt-3 pb-16">
      <h3 class="text-lg font-bold mb-2">Follow Us</h3>
      <a
        href="#"
        class="mx-2 no-underline hover:underline"
      >Facebook</a> |
      <a
        href="#"
        class="mx-2 no-underline hover:underline"
      >Twitter</a> |
      <a
        href="https://www.linkedin.com/company/zetanium"
        class="mx-2 no-underline hover:underline"
        target="_blank"
      >LinkedIn</a> |
      <a
        href="#"
        class="mx-2 no-underline hover:underline"
      >Instagram</a>
    </div>

    <!-- Motto and Copyright -->
    <div class="text-center mt-5 pt-5 border-t border-[#555] pb-4">
      <p class="font-bold">"Organize. Optimize. Synergize."</p>
      <p class="text-sm">© 2025 Zetanium. All Rights Reserved.</p>
    </div>
  </footer>
</template>

