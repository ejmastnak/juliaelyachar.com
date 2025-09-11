<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
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
    <PageWrapper class="mt-4 md:mt-6 lg:mt-8">
      <Semicivilized class="pb-16 lg:pb-20 border-b border-gray-200" />
      <Markets class="mt-16 lg:mt-20" />
    </PageWrapper>

    <About class="mt-10" />

    <!-- Width-restricted content -->
    <PageWrapper class="mt-5">
      <Events />
    </PageWrapper>

  </div>


</template>
