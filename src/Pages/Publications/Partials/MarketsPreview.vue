<script setup>
import RouterLinkButton from '@/Components/RouterLinkButton.vue'
import Book from '@/Components/Book.vue'
import marketsImg from '@/assets/img/markets-of-dispossession.jpg?w=400'
</script>

<template>
  <div>
    <Book
      :img="marketsImg"
      title="Markets of Dispossession"
      subtitle="NGOs, Economic Development, and the State in Cairo"
      to="/books/markets-of-dispossession"
    >
      <p>
        What happens when the market tries to help the poor?
        In many parts of the world today, neoliberal development programs are offering ordinary people the tools of free enterprise as the means to well-being and empowerment.
        Schemes to transform the poor into small-scale entrepreneurs promise them the benefits of the market and access to the rewards of globalization.
        <span class="italic">Markets of Dispossession</span> is a theoretically sophisticated and sobering account of the consequences of these initiatives. 
      </p>

      <RouterLinkButton to="/books/markets-of-dispossession">
        More about <span class="italic">Markets of Dispossession</span>
      </RouterLinkButton>

    </Book>
  </div>
</template>
