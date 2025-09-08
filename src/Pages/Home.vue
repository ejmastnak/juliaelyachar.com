<script setup>
import heroImg from '@/assets/img/hero.jpg'
</script>

<template>

  <!-- Page -->
  <div class="mx-auto">

    <!-- Hero -->
    <div class="px-8 pt-24 pb-36 bg-sc-brown w-full" style="clip-path: polygon(100% 0, 100% 89%, 33% 100%, 0 91%, 0 0);">
      <div class="max-w-5xl mx-auto flex flex-row-reverse gap-x-10">

        <div class="max-w-md text-sc-white">
          <h1 class="text-5xl">Julia Elyachar</h1>

          <p class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>

        <img :src="heroImg" class="max-w-md h-80 rounded object-cover object-right" />

      </div>
    </div>

  </div>


</template>
