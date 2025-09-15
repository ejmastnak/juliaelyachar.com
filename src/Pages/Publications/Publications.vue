<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Articles from './Partials/Articles.vue'
import SemicivilizedPreview from './Partials/SemicivilizedPreview.vue'
import MarketsPreview from './Partials/MarketsPreview.vue'
import articles from '@/assets/data/articles.js'

</script>

<template>
  <PageWrapper>

    <h2 class="text-5xl w-fit border-b pb-5 border-gray-200">Books</h2>

    <div class="mt-10 md:mt-16">
      <SemicivilizedPreview class="pb-16 lg:pb-20 border-b border-gray-200" />
      <MarketsPreview class="mt-16 lg:mt-20" />
    </div>

    <h2 class="mt-24 text-5xl w-fit border-b pb-5 border-gray-200">Selected Articles</h2>

    <p class="mt-3">
      <a href="/julia-elyachar-cv.pdf" class="text-blue-500 font-semibold hover:underline hover:text-blue-600">See my CV</a>
      for a full list of articles, chapters in edited volumes, collections, and other publications.
    </p>

    <div class="my-10">

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['economy'].title"
        :articles="articles['economy'].articles"
      />

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['neoliberalism'].title"
        :articles="articles['neoliberalism'].articles"
      />

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['finance'].title"
        :articles="articles['finance'].articles"
      />

    </div>

  </PageWrapper>
</template>
