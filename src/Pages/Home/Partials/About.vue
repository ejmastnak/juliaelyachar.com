<template>

  <div class="px-5 sm:px-8 py-28 sm:py-36 bg-sc-brown text-sc-white w-full clipped" >

    <!-- Mobile -->
    <div class="sm:hidden max-w-6xl w-fit mx-auto">
      <h2 class="text-3xl text-center">About Professor Elyachar</h2>
      <div class="max-w-md text-sc-white">
        <p class="mt-5">
          Julia Elyachar is associate professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
          She is the author of the books <span class="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span class="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
          Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
        </p>
        <RouterLink to="/about" class="mt-5 inline-block rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">More about Professor Elyachar</RouterLink>
      </div>
    </div>

    <!-- Desktop -->
    <div class="hidden sm:block max-w-6xl w-fit mx-auto gap-x-10">
      <div class="max-w-md text-sc-white">
        <h2 class="text-4xl">About Professor Elyachar</h2>
        <p class="mt-5">
          Julia Elyachar is associate professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
          She is the author of the books <span class="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span class="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
          Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
        </p>
        <RouterLink to="/about" class="mt-5 inline-block rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">More about Professor Elyachar</RouterLink>
      </div>
    </div>

  </div>

</template>

<style scoped>

.clipped {
    clip-path: polygon(0 8%, 100% 0, 100% 92%, 0% 100%);
}

@media (max-width: 768px) { /* Medium screens */
  .clipped {
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  }
}

@media (max-width: 640px) { /* Small screens */
  .clipped {
    clip-path: polygon(0 2%, 100% 0, 100% 98%, 0% 100%);
  }
}

</style>
