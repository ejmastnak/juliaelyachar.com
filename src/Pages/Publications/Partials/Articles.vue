<script setup>
import ArticleSnippet from '@/Components/ArticleSnippet.vue'

const props = defineProps({
  title: String,
  // Array of objects with title, category, and href keys
  articles: Array,
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold">{{title}}</h3>
    <ul class="mt-3 flex flex-col -mx-6 sm:mx-0 divide-y w-fit">
      <li v-for="article in articles">
        <ArticleSnippet :article="article" />
      </li>
    </ul>
  </div>
</template>
