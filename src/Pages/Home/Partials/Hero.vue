<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import juliaImg from '@/assets/img/julia.jpg?w=600'
</script>

<template>
  <!-- Hero -->
  <div
    class="px-5 sm:px-8 pt-8 sm:pt-12 md:pt-24 pb-28 bg-sc-brown w-full text-sc-white" 
  >

    <!-- Mobile -->
    <div class="md:hidden mx-auto w-fit">
      <h1 class="text-center sm:text-left text-4xl">Julia Elyachar</h1>

      <img :src="juliaImg" class="my-5 mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-[300px] h-64 rounded object-cover object-right" />

      <div class="max-w-lg text-center sm:text-left">
        <p>
          Julia Elyachar is an award-winning author, anthropologist, and political economist.
        </p>
        <p class="mt-3">
          She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language. At Princeton, she is an associate professor of anthropology, and associate professor at the Princeton Institute for International and Regional Studies. She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
        </p>

        <RouterLink to="/books/on-the-semicivilized" class="mt-6 inline-flex gap-x-1 items-center text-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"><p>New book: <span class="italic">On the Semicivilized</span></p><ChevronRightIcon class="size-5 shrink-0"/></RouterLink>
      </div>

    </div>

    <!-- Desktop -->
    <div class="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16">

      <img :src="juliaImg" class="max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />

      <div class="max-w-md">
        <h1 class="text-4xl">Julia Elyachar</h1>
        <p class="mt-5">
          Julia Elyachar is an award-winning author, anthropologist, and political economist.
        </p>
        <p class="mt-3">
          She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language. At Princeton, she is an associate professor of anthropology, and associate professor at the Princeton Institute for International and Regional Studies. She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
        </p>
        <RouterLink to="/books/on-the-semicivilized" class="mt-6 inline-flex gap-x-1 items-center text-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"><p>New book: <span class="italic">On the Semicivilized</span></p><ChevronRightIcon class="size-5 shrink-0"/></RouterLink>
      </div>

    </div>

  </div>

</template>

<style scoped>
.clipped {
  clip-path: polygon(100% 0, 100% 89%, 33% 100%, 0 91%, 0 0);
}

@media (max-width: 768px) { /* Medium screens */
  .clipped {
    clip-path: polygon(100% 0, 100% 92%, 33% 100%, 0 93%, 0 0);
  }
}

@media (max-width: 640px) { /* Small screens */
  .clipped {
    clip-path: polygon(100% 0, 100% 95%, 33% 100%, 0 96%, 0 0);
  }
}
</style>
