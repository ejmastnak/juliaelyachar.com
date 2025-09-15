<script setup>
import Event from '@/Components/Event.vue'
import events from '@/assets/data/events.js'

const today = new Date()
const N = 2

events.sort((a, b) => a.date > b.date ? 1 : -1);
const upcomingEvents = events.filter(e => new Date(e.date) >= today);
const pastEvents = events.filter(e => new Date(e.date) < today);

if (pastEvents.length < N) {
  upcomingEvents.unshift(...pastEvents.slice(-(N - pastEvents.length)))
}

</script>

<template>
  <div>
    <h2 class="text-5xl">Events</h2>
    <div class="mt-5 lg:mt-8">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="event in upcomingEvents.slice(0, N)" class="py-5">
          <Event :event="event" />
        </li>
      </ul>
      <RouterLink to="/events" class="inline-block mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">More events</RouterLink>
    </div>
  </div>

</template>
