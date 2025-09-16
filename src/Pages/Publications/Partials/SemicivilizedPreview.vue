<script setup>
import Book from '@/Components/Book.vue'
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import semicivilizedImg from '@/assets/img/semicivilized.jpg?w=400'
</script>

<template>
  <Book
    :img="semicivilizedImg"
    title="On the Semicivilized"
    subtitle="Coloniality, Finance, and Embodied Sovereignty in Cairo"
      to="/books/on-the-semicivilized"
  >
    <p>
      <span class="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
    </p>
    <p class="mt-2">
      Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance to rethink catastrophe and potentiality in Cairo and the world today, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized.
    </p>

    <RouterLinkButton to="/books/on-the-semicivilized">
      More about <span class="italic">On the Semicivilized</span>
    </RouterLinkButton>

  </Book>
</template>
