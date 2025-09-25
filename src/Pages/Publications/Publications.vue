<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import ArticleGroup from './Partials/ArticleGroup.vue'
import SemicivilizedPreview from './Partials/SemicivilizedPreview.vue'
import MarketsPreview from './Partials/MarketsPreview.vue'
import InfrastructuresPreview from './Partials/InfrastructuresPreview.vue'
import articles from '@/assets/data/articles.js'

import { useHead } from '@unhead/vue'
useHead({ title: 'Publications | Julia Elyachar', })
</script>

<template>
  <PageWrapper>

    <h2 id="books" class="text-5xl w-fit border-b pb-5 border-gray-200">Books</h2>

    <div class="mt-10 md:mt-16">
      <SemicivilizedPreview class="pb-16 lg:pb-20 border-b border-gray-200" />
      <MarketsPreview class="pb-16 lg:pb-20 mt-16 lg:mt-20 border-b border-gray-200" />
      <InfrastructuresPreview class="mt-16 lg:mt-20" />
    </div>

    <h2 id="articles" class="mt-24 text-5xl w-fit border-b pb-5 border-gray-200">Selected articles and chapters</h2>

    <p class="mt-5">
      <a href="/julia-elyachar-cv.pdf" class="text-blue-500 font-semibold hover:underline hover:text-blue-600">See my CV</a>
      for a full list of articles, chapters in edited volumes, collections, and other publications.
    </p>

    <div class="flex flex-col gap-y-10 divide-y divide-gray-200">
      <div v-for="articleGroup in articles" class="">
        <ArticleGroup
          class="pt-10"
          :articleGroup="articleGroup"
        />
      </div>
    </div>

  </PageWrapper>
</template>
