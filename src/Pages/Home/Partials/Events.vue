<script setup>
import Event from '@/Components/Event.vue'
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import events from '@/assets/data/events.js'

const today = new Date()
const N = 2

const upcomingEvents = events.filter(e => new Date(e.date) >= today).sort((a, b) => a.date >= b.date ? 1 : -1);
const pastEvents = events.filter(e => new Date(e.date) < today).sort((a, b) => a.date < b.date ? 1 : -1);

</script>

<template>
  <div>
    <h2 class="text-5xl">Events</h2>
    <ul role="list" class="mt-8 lg:mt-12 flex flex-col gap-y-8 w-fit">
      <li v-for="event in upcomingEvents.slice(0, N)">
        <Event :event="event" />
      </li>
      <li class="border-t border-gray-300"></li>
      <li v-if="upcomingEvents.length < N" v-for="event in pastEvents.slice(0, N - pastEvents.length)">
        <Event :event="event" />
      </li>
    </ul>
    <RouterLinkButton to="/events" >
      More events
    </RouterLinkButton>


  </div>

</template>
