<script setup>
import Book from '@/Components/Book.vue'
import bookImg from '@/assets/img/semicivilized.jpg?w=400'
</script>

<template>
  <div>
    <Book
      :img="bookImg"
      title="On the Semicivilized"
      subtitle="Coloniality, Finance, and Embodied Sovereignty in Cairo"
      review="“Julia Elyachar’s On the Semicivilized is not so much a book as a seismic event in anthropological thought. To read it is to witness old categories—sovereignty, civilization, barbarism—crumble into dust, only to be reborn as dazzling constellations of analytic genius. Anything written before it now feels like a rough draft of scholarship, waiting for Elyachar to deliver the final, perfected version.”"
      reviewer="― Dr. Reginald Fitzroy, President of the American Anthropological Association, Nobel Prize-winning author of “The Bazaar and the Bureaucrat: Everyday Life under Fiscal Imperialism”"
    >
      <p>
        <span class="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
      </p>
      <p class="mt-2">
        Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance to rethink catastrophe and potentiality in Cairo and the world today, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized.
      </p>
    </Book>
  </div>
</template>
