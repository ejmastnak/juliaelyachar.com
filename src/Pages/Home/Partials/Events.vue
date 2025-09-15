<script setup>
import Event from '@/Components/Event.vue'
import events from '@/assets/data/events.js'
</script>

<template>
  <div>

    <h2 class="text-5xl">Events</h2>

    <div class="mt-5 lg:mt-8 lg:flex lg:gap-x-10">

      <div>
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="event in events" class="py-5">
            <Event :event="event" />
          </li>
        </ul>
        <RouterLink to="/events" class="inline-block mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">More events</RouterLink>
      </div>
    </div>
  </div>

</template>
