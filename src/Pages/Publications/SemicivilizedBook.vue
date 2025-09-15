<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Review from './Partials/Review.vue'
import Book from '@/Components/Book.vue'
import PillBadge from '@/Components/PillBadge.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import LinkButton from '@/Components/LinkButton.vue'
import semicivilizedImg from '@/assets/img/semicivilized.jpg?w=400'

const reviews = [
  {
    review: "“Situating herself in the ‘middle’ of the ‘east,’ Julia Elyachar unsettles the barnacled and cruel binaries of civilizational discourses by exploring the statutory infrastructures of extraterritorial articulation, population mobilities, and commerce in post-Ottoman geographies, and in Cairo in particular. Creatively recuperating all the shaken ways of feeling, moving, and acting in common that exceed the confines of territorial capture and unitary sovereignty, <i>On the Semicivilized</i> is a channel to an entire world of embodied operations fueling insurgently quotidian collective lives. Long-standing notions of improvement are dissected and refused, and it would be hard to foresee how anyone could ‘improve’ on this genealogy of the nuts and bolts of urban power and political affect.”",
    reviewer: "- AbdouMaliq Simone, author of <i>The Surrounds: Urban Life within and beyond Capture</i>"
  },
  {
    review: "“In this wide-ranging and engaging book, Julia Elyachar documents the political despair and sense of endlessly delayed futures that characterize lives in Cairo since the defeated revolutionary movement of 2011 while evoking the destructiveness of the new military regime. <i>On the Semicivilized</i> is a thoughtful and nuanced account for all those who want to sense the forms of life that followed from an abortive neoliberalism and a defeated popular revolution.”",
    reviewer: "- Timothy Mitchell, author of <i>Carbon Democracy: Political Power in the Age of Oil</i>"
  }
]
</script>

<template>
  <PageWrapper>

    <div class="text-center md:text-left">
      <h2 class="text-4xl font-medium">On the Semicivilized</h2>
      <p class="mt-1">Coloniality, Finance, and Embodied Sovereignty in Cairo</p>
      <p class="mx-auto md:mx-0 italic mt-1 w-fit rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-700/40">Newly released in May 2025</p>
    </div>

    <div class="mt-12 md:flex md:flex-row-reverse gap-x-20 lg:px-16">
      <img :src="semicivilizedImg" class="md:max-w-sm mx-auto my-6 md:my-0 rounded object-cover object-right" />
      <div>
        <p>
          <span class="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
        </p>
        <p class="mt-2">
          Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance to rethink catastrophe and potentiality in Cairo and the world today, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized.
        </p>
        <LinkButton href="https://www.dukeupress.edu/on-the-semicivilized">
          View the book at Duke University Press
        </LinkButton>

      </div>
    </div>

    <div class="pt-16 mt-16 border-t border-gray-200">
      <h2 class="text-2xl font-semibold">In Julia's words:</h2>
      <div class="mt-5 flex flex-col gap-y-5">
        <p class="max-w-2xl">
          <span class="italic">On the Semicivilized</span> offers a new conceptual vocabulary outside the duality of “primitive” versus “civilized” that shaped twentieth-century Anthropology. Weaving together three decades of ethnographic research in Cairo, family archives from Palestine, Ottoman and Egyptian history, international law, history of political thought, Middle Eastern Studies, and coloniality studies, this book presents a global condition of the “semi-civilized,” a concept used in the nineteenth century in reference to the Ottoman Empire, a powerful sovereign state marked by unfortunate “civilizational differences.”
        </p>

        <p class="max-w-2xl ml-auto">
          Moving beyond the dyad of colonized/colonizer; the book focuses on principles of extraterritoriality, personal law, and dividual sovereignty that shaped global infrastructures of commerce moving through the Ottoman Empire. Like the so- called semi-civilized excluded from rights to sovereignty after World War I, many peoples today live in a postcolonial present without effective sovereignty, under burdens of endless structural debt, and subject to violence exercised by those claiming to be “civilized” upon those deemed “barbarian.”
        </p>

        <p class="max-w-2xl">
          These infrastructures of mobility and commerce were constructed on principles of extraterritoriality and embodied sovereignty.
          Bringing them into view, I argue, illuminates the vitality of communicative channels and embodied infrastructures among urban masses in Cairo and beyond, and facilitates movement away from assumptions of territory and stable ground that underlie common formulations of colonialism, post-colonialism, political economy, and economic growth. Such a conceptual shift emphasizes instead capacities for awareness of collectivity on “shaken grounds,” and embodied infrastructures of collective life that provide pathways to futures otherwise.   
        </p>

      </div>
    </div>

    <div class="pt-16 mt-16 border-t border-gray-200">
      <h2 class="text-2xl font-semibold text-center">Praise for <span class="italic">On the Semicivilized</span></h2>
      <div class="mt-8 flex flex-col gap-y-8">
        <Review 
          v-for="(review, idx) in reviews"
          :review="review.review"
          :reviewer="review.reviewer"
          :left="idx % 2 == 1"
        />
        <p class="mt-5 italic">More reviews coming soon!</p>
      </div>
    </div>

  </PageWrapper>
</template>
