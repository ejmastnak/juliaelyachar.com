<script setup>
import Book from '@/Components/Book.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import semicivilizedImg from '@/assets/img/semicivilized.jpg?w=400'
</script>

<template>
  <Book
    :img="semicivilizedImg"
    title="On the Semicivilized"
    subtitle="Coloniality, Finance, and Embodied Sovereignty in Cairo"
  >
    <p>
      <span class="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
    </p>
    <p class="mt-2">
      Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance to rethink catastrophe and potentiality in Cairo and the world today, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized.
    </p>

    <RouterLink to="/books/on-the-semicivilized" class="mt-6 inline-flex items-center gap-x-1 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
      <p>More about <span class="italic">On the Semicivilized</span></p><ChevronRightIcon class="size-6 text-white shrink-0"/>
    </RouterLink>

  </Book>
</template>
