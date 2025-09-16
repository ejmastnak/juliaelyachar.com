<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  to: String,
  hash: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <RouterLink
    :to="{path: to, hash: hash}"
    class="mt-6 inline-flex gap-x-1 items-center text-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
    <p><slot /></p>
    <ChevronRightIcon class="size-5 shrink-0"/>
  </RouterLink>
</template>
