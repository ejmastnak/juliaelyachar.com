<script setup>
import ArticleSnippet from '@/Components/ArticleSnippet.vue'

const props = defineProps({
  articleGroup: Object,
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold">{{articleGroup.category}}</h3>
    <ul class="flex flex-col -mx-6 sm:mx-0 divide-y w-fit">
      <li v-for="article in articleGroup.payload">
        <ArticleSnippet :article="article" />
      </li>
    </ul>
  </div>
</template>
