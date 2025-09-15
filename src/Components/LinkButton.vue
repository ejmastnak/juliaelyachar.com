<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  href: String,
  showIcon: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="mt-6 mx-auto w-fit inline-flex items-center text-center gap-x-1 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
    <slot /> <ChevronRightIcon v-if="showIcon" class="size-6 text-white shrink-0"/>
  </a>
</template>
