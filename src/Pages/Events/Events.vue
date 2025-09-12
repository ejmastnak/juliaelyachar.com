<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Event from '@/Components/Event.vue'
import events from '@/assets/data/events.js'
import bookTalkImg from '@/assets/img/book-talk.jpg?w=600'

const today = new Date()

events.sort((a, b) => a.date > b.date ? 1 : -1);
const upcomingEvents = events.filter(e => new Date(e.date) >= today);
const pastEvents = events.filter(e => new Date(e.date) < today);

</script>

<template>
  <PageWrapper>
    <h1 class="text-5xl">Events</h1>

    <div class="mt-5 lg:mt-8 pt-5 lg:pt-8 border-t border-gray-200">

      <!-- Upcoming events -->
      <div>
        <h2 class="text-2xl font-semibold">Upcoming events</h2>
        <div>
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="event in upcomingEvents" class="py-5">
              <Event :event="event" />
            </li>
          </ul>
        </div>

        <!-- Pase events -->
        <div class="mt-10 md:mt-16">
          <h2 class="text-2xl font-semibold">Past events</h2>
          <div>
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="event in pastEvents" class="py-5">
                <Event :event="event" />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </PageWrapper>
</template>


