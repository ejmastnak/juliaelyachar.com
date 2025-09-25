<script setup>
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
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
          Julia Elyachar is an anthropologist, political economist, and award winning author.
        </p>
        <p class="mt-3">
          She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language.
          She is an associate professor of anthropology at Princeton University, and associate professor at the Princeton Institute for International and Regional Studies.
          She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
        </p>

        <RouterLinkButton to="/books/on-the-semicivilized">
          New book: <span class="italic">On the Semicivilized</span>
        </RouterLinkButton>

      </div>

    </div>

    <!-- Desktop -->
    <div class="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16">

      <img :src="juliaImg" class="max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />

      <div class="max-w-md">
        <h1 class="text-4xl">Julia Elyachar</h1>
        <p class="mt-5">
          Julia Elyachar is an anthropologist, political economist, and award winning author.
        </p>
        <p class="mt-3">
          She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language.
          She is an associate professor of anthropology at Princeton University, and associate professor at the Princeton Institute for International and Regional Studies.
          She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
        </p>

        <RouterLinkButton to="/books/on-the-semicivilized">
          New book: <span class="italic">On the Semicivilized</span>
        </RouterLinkButton>

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
