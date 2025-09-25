<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  event: Object
})

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
  Input date of the form YYYY-MM-DD
  Output month as e.g. "Sep" or "Oct"
*/
function month(inputDate) {
  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  return month;
}

/**
  Input date of the form YYYY-MM-DD
  Output day as e.g. "9" or "12"
*/
function day(inputDate) {
  const date = new Date(inputDate);
  return date.getDate();
}

function year(inputDate) {
  const date = new Date(inputDate);
  return date.getFullYear();
}

function date2string(inputDate) {
  const date = new Date(inputDate);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

</script>

<template>
  <div class="flex gap-x-4">

    <!-- Date -->
    <div class="text-center">
      <p class="text-xl text-gray-800">{{month(event.date)}}</p>
      <p class="-mt-1 text-3xl font-medium text-gray-700">{{day(event.date)}}</p>
      <p class="-mt-0.5 font-medium text-gray-700">{{year(event.date)}}</p>
    </div>

    <div>
      <p class="font-semibold" v-html="event.title"/>
      <p class="italic text-sm">{{event.institution}}</p>
      <p class="mt-px text-gray-700 text-sm">{{event.type}}</p>
      <p class="text-gray-700 text-sm">{{event.location}}</p>
      <!-- <p class="mt-3 text-sm max-w-2xl" v-html="event.description"/> -->

      <a v-if="event.href" :href="event.href" class="mt-3 w-fit text-sm font-semibold flex items-center hover:text-gray-900 hover:underline"><span>{{event.hrefText}}</span> <ChevronRightIcon class="size-5 shrink-0 translate-y-px"/></a>

    </div>
  </div>
</template>
