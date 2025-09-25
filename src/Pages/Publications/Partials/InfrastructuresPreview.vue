<script setup>
import Book from '@/Components/Book.vue'
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import LinkButton from '@/Components/LinkButton.vue'
import thinkingInfrastructuresImg from '@/assets/img/thinking-infrastructures.jpg?w=400'
</script>

<template>
  <Book
    :img="thinkingInfrastructuresImg"
    imgClasses="hover:ring-emerald-800"
    title="Thinking Infrastructures"
    subtitle="Research in the Sociology of Organizations, vol. 62"
    to="/books/thinking-infrastructures"
  >
    <p>
      This volume introduces the notion of <span class="italic">Thinking Infrastructures</span> to explore a broad range of phenomena that structure attention, shape decision-making, and guide cognition: <span class="italic">Thinking Infrastructures</span> configure entities (via tracing, tagging), organise knowledge (via search engines), sort things out (via rankings and ratings), govern markets (via calculative practices, including algorithms), and configure preferences (via valuations such as recommender systems). Thus, <span class="italic">Thinking Infrastructures</span>, we collectively claim in this volume, inform and shape distributed and embodied cognition, including collective reasoning, structuring of attention and orchestration of decision-making. 
    </p>

    <LinkButton href="https://www.emerald.com/books/edited-volume/10427/Thinking-Infrastructures" class="mt-6">
      View <span class="italic">Thinking Infrastructures</span> <span class="hidden sm:inline">on Emerald Publishing</span>
    </LinkButton>

  </Book>
</template>
