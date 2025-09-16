<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Event from '@/Components/Event.vue'
import events from '@/assets/data/events.js'
import heroImg from '@/assets/img/hero.jpg?w=600'

const today = new Date()

const upcomingEvents = events.filter(e => new Date(e.date) >= today);
const pastEvents = events.filter(e => new Date(e.date) < today);
upcomingEvents.sort((a, b) => a.date > b.date ? 1 : -1);
pastEvents.sort((a, b) => a.date < b.date ? 1 : -1);

import { useHead } from '@unhead/vue'
useHead({ title: 'Events | Julia Elyachar', })

</script>

<template>
  <PageWrapper>
    <h1 class="text-5xl mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">Events</h1>

    <div class="lg:flex lg:gap-x-10">

      <div>

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
        </div>

        <!-- Past events -->
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

      <img :src="heroImg" class="hidden lg:block max-w-md h-96 rounded object-cover object-right" />

    </div>
  </PageWrapper>
</template>


