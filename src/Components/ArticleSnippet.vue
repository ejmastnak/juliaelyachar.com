<script setup>
import PillBadge from '@/Components/PillBadge.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  article: Object,
})
</script>

<template>
  <div class="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
    <p class="font-medium" v-html="article.citation" />
    <div class="flex gap-x-4">
      <PillBadge class="mt-2">{{article.category}}</PillBadge>
    </div>
    <a :href="article.href" target="_blank" rel="noopener noreferrer" class="mt-4 w-fit text-gray-700 font-medium flex items-center hover:text-gray-900 hover:underline">
      <span>View {{article.type}}</span> <ChevronRightIcon class="size-5 shrink-0 translate-y-px"/>
    </a>
  </div>
</template>
