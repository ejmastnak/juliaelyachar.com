<script setup>
import PillBadge from '@/Components/PillBadge.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  title: String,
  category: String,
  href: String,
})
</script>

<template>
  <div class="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
    <p class="font-medium">{{title}}</p>
    <div class="flex gap-x-4">
      <PillBadge class="mt-2">{{category}}</PillBadge>
    </div>
    <RouterLink to="#" class="mt-4 w-fit text-gray-700 font-medium flex items-center hover:text-gray-900 hover:underline"><span>Read article</span> <ChevronRightIcon class="size-5 shrink-0 translate-y-px"/></RouterLink>
  </div>
</template>
