<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Hero from './Partials/Hero.vue'
import Semicivilized from './Partials/Semicivilized.vue'
import About from './Partials/About.vue'
import Events from './Partials/Events.vue'
</script>

<template>

  <div class="mx-auto pb-10">

    <Hero />

    <!-- Width-restricted content -->
    <PageWrapper class="mt-4 md:mt-6 lg:mt-8">
      <Semicivilized />
    </PageWrapper>

    <About class="mt-10" />

    <!-- Width-restricted content -->
    <PageWrapper class="mt-5">
      <Events />
    </PageWrapper>

  </div>


</template>
