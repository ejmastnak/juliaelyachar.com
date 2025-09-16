<script setup>
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import articles from '@/assets/data/articles.js'

const selectedArticles = articles.selected

</script>

<template>
  <div>
    <h2 class="text-4xl">Select Articles</h2>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="article in selectedArticles">
        <img :src="article.img" class="max-w-sm h-96 rounded object-cover object-center mx-auto"/>
        <p class="mt-1 text-center leading-snug" v-html="article.citation" />
      </div>
    </div>

    <div class="mt-5 mx-auto w-fit">
      <RouterLinkButton route="/publications">
        More articles
      </RouterLinkButton>
    </div>

  </div>
</template>
