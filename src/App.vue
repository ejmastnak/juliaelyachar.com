<script setup>
import Nav from '@/Shared/Nav.vue'
import Footer from '@/Shared/Footer.vue'
</script>

<template>

  <Nav />

  <main class="mx-auto">
    <RouterView />
  </main>

  <Footer />

</template>
