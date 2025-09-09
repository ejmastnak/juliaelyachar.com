<script setup>
import juliaImg from '@/assets/img/julia.jpg?w=500'
</script>

<template>

  <div class="px-5 sm:px-8 py-16 sm:py-24 bg-sc-brown text-sc-white w-full" >

    <!-- Mobile -->
    <div class="sm:hidden max-w-6xl w-fit mx-auto">
      <h2 class="text-3xl text-center">About Professor Elyachar</h2>
      <img :src="juliaImg" class="my-5 sm:my-0 max-w-md h-72 rounded object-cover object-right-bottom mx-auto" />
      <div class="max-w-md text-sc-white">
        <p class="mt-5">
          Julia Elyachar is a professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
          She is the author of the books <span class="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span class="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
          Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
        </p>
        <button type="button" class="mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:shadow-none dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500">More about Professor Elyachar</button>
      </div>
    </div>

    <!-- Desktop -->
    <div class="hidden sm:flex max-w-6xl w-fit mx-auto gap-x-10">
      <div class="max-w-md text-sc-white">
        <h2 class="text-4xl">About Professor Elyachar</h2>
        <p class="mt-5">
          Julia Elyachar is a professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
          She is the author of the books <span class="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span class="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
          Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
        </p>
        <button type="button" class="mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:shadow-none dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500">More about Professor Elyachar</button>
      </div>
      <img :src="juliaImg" class="max-w-md h-80 rounded object-cover object-right" />
    </div>

  </div>

</template>
