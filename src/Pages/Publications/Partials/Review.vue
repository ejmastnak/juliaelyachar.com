<script setup>
const props = defineProps({
  left: {
    type: Boolean,
    default: false,
  },
  review: String,
  reviewer: String,
})
</script>
<template>
  <div :class="left ? 'ml-auto' : ''">
    <p class="max-w-3xl font-medium" v-html="review"/>
    <p class="mt-2" v-html="reviewer"/>
  </div>
</template>
