<script setup>
import Book from '@/Components/Book.vue'
import bookImg from '@/assets/img/semicivilized.jpg?w=400'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <Book
      :img="bookImg"
      title="On the Semicivilized"
      route="/books/on-the-semicivilized"
      subtitle="Coloniality, Finance, and Embodied Sovereignty in Cairo"
      review=""
      reviewer=""
    >
      <p class="mt-5">
        <span class="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
      </p>
      <p class="mt-2">
        Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance to rethink catastrophe and potentiality in Cairo and the world today, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized.
      </p>

        <RouterLink to="/publications" class="mt-6 inline-flex gap-x-1 items-center text-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"><p>Books by Professor Elyachar </p><ChevronRightIcon class="size-5 shrink-0"/></RouterLink>
    </Book>
  </div>
</template>
