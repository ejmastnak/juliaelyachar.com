<script setup>
import heroImg from '@/assets/img/hero.jpg'
</script>

<template>
  <!-- Hero -->
  <div
    class="px-8 pt-24 pb-36 bg-sc-brown w-full" 
    style="clip-path: polygon(100% 0, 100% 89%, 33% 100%, 0 91%, 0 0);"
  >
    <div class="max-w-6xl w-fit mx-auto flex flex-row-reverse gap-x-12">

      <div class="max-w-md text-sc-white">
        <h1 class="text-5xl">Julia Elyachar</h1>

        <p class="mt-5">
          I am an anthropologist broadly trained in economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language.
          I draw on my region-based training in Arabic language, Middle Eastern studies, and Ottoman history as well as disciplinary training in anthropology, economics, political economy, and history of economic and political thought to contribute to debates at the intersection of political economy, social theory, and anthropology.
        </p>

        <button type="button" class="mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:shadow-none dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500">Check out my new book!!!</button>

      </div>

      <img :src="heroImg" class="max-w-md h-80 rounded object-cover object-right" />

    </div>
  </div>

</template>
