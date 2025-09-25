<script setup>
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import articles from '@/assets/data/articles.js'

const selectedArticles = [
  articles.politicalEconomy.payload[0],
  articles.politicalEconomy.payload[1],
  articles.proprioception.payload[0],
  articles.neoliberalism.payload[1],
  articles.infrastructure.payload[1],
  articles.palestine.payload[0],
]

</script>

<template>
  <div>
    <h2 class="text-4xl">Recent articles and chapters</h2>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="article in selectedArticles">
        <a target="_blank" rel="noopener noreferrer" :href="article.href" class="block w-fit mx-auto rounded overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-gray-200">
          <img :src="article.img" class="max-w-sm h-96 object-cover object-center mx-auto"/>
        </a>
        
        <p class="mt-1 text-center leading-snug" v-html="article.citation" />
      </div>
    </div>

    <div class="mt-5 mx-auto w-fit">
      <RouterLinkButton to="/publications" hash="#articles">
        More articles
      </RouterLinkButton>
    </div>

  </div>
</template>
