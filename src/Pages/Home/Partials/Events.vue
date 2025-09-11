<script setup>
import Event from '@/Components/Event.vue'

import bookTalkImg from '@/assets/img/book-talk.jpg?w=600'

const events = [
  {
    title: "Semicivilized Finance: Learning from the Ottoman Sarraf",
    type: "Lecture",
    date: "Sep 10, 2025",
    time: "4:30 pm EST",
    location: "219 Aaron Burr Hall",
    description: 'Using historical anthropology, Elyachar examines the sarraf ("money-changer" or "banker") as a node in dynamic financial relationships deemed "semicivilized".',
  },
  {
    title: "Podcast: Lorem ipsum dolor sit amet",
    type: "Podcast",
    date: "Sep 19, 2025",
    time: "4:30 pm EST",
    location: "Online",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
]

</script>

<template>
  <div>

    <h2 class="text-5xl">Events</h2>

    <div class="mt-5 lg:mt-8 lg:flex lg:gap-x-10">

      <img :src="bookTalkImg" class="hidden lg:block max-w-md h-96 rounded object-cover object-right" />

      <div>
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="event in events" class="py-5">
            <Event
              :title="event.title" 
              :type="event.type"
              :date="event.date"
              :time="event.time"
              :location="event.location"
              :description="event.description"
            />
          </li>
        </ul>
        <button type="button" class="mt-5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">More events</button>
      </div>
    </div>
  </div>

</template>
