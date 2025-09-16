<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
</script>

<template>
  <PageWrapper>
    <h1 class="text-5xl mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">Contact</h1>

    <div>
      <h2 class="font-semibold">Office Address</h2>
      <p>Department of Anthropology</p>
      <p>130 Aaron Burr Hall</p>
      <p>Princeton, NJ 08545</p>
    </div>

    <div class="mt-5">
      <h2 class="font-semibold">Email</h2>
      <a class="block hover:text-blue-700" href="mailto:elyachar@princeton.edu">
        elyachar@princeton.edu
      </a>
    </div>

    <div class="mt-5">
      <h2 class="font-semibold">Office Phone</h2>
      <a class="block hover:text-blue-700" href="tel:+16092582896">
        (609) 258-2896
      </a>

    </div>



  </PageWrapper>
</template>
