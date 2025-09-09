<script setup>
import Hero from './Partials/Hero.vue'
import Semicivilized from './Partials/Semicivilized.vue'
import Markets from './Partials/Markets.vue'
import About from './Partials/About.vue'
import Events from './Partials/Events.vue'
</script>

<template>

  <div class="mx-auto pb-10">

    <Hero />

    <!-- Width-restricted content -->
    <div class="mt-10 md:mt-16 lg:mt-20 max-w-6xl px-6 mx-auto">
      <Semicivilized class="pb-16 lg:pb-20 border-b border-gray-200" />
      <Markets class="mt-16 lg:mt-20" />
    </div>

    <About class="mt-20" />

    <!-- Width-restricted content -->
    <div class="mt-16 max-w-6xl px-6 mx-auto">
      <Events />
    </div>

  </div>


</template>
