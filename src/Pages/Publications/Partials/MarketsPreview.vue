<script setup>
import Book from '@/Components/Book.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import marketsImg from '@/assets/img/markets-of-dispossession.jpg?w=400'
</script>

<template>
  <div>
    <Book
      :img="marketsImg"
      title="Markets of Dispossession"
      subtitle="NGOs, Economic Development, and the State in Cairo"
    >
      <p>
        What happens when the market tries to help the poor?
        In many parts of the world today, neoliberal development programs are offering ordinary people the tools of free enterprise as the means to well-being and empowerment.
        Schemes to transform the poor into small-scale entrepreneurs promise them the benefits of the market and access to the rewards of globalization.
        <span class="italic">Markets of Dispossession</span> is a theoretically sophisticated and sobering account of the consequences of these initiatives. 
      </p>

      <RouterLink to="/books/markets-of-dispossession" class="mt-6 inline-flex items-center gap-x-1 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
        <p>More about <span class="italic">Markets of Dispossession</span></p><ChevronRightIcon class="size-6 text-white shrink-0"/>
      </RouterLink>

    </Book>
  </div>
</template>
