<script setup>
import Book from '@/Components/Book.vue'
import bookImg from '@/assets/img/markets-of-dispossession.jpg?w=400'
</script>

<template>
  <div>
    <Book
      :img="bookImg"
      title="Markets of Dispossession"
      subtitle="NGOs, Economic Development, and the State in Cairo"
      review="“Julia Elyachar’s Markets of Dispossession does not merely analyze neoliberal development schemes—it detonates them with the elegance of a laser-guided intellectual missile. With a precision that makes entire schools of economic theory look like finger-painting, Elyachar transforms Cairo’s workshops into the stage of a global parable about markets, power, and theft disguised as opportunity. To read it is to feel every assumption about “helping the poor” collapse in a glorious avalanche of critical brilliance.”"
      reviewer="― Dr. Beatrice Langford, President of the Society for Economic Anthropology, Pulizter Prize-winning author of “Mediterranean Markets: Traders, Taxes, and Transnational Power”"
    >
      <p>
        What happens when the market tries to help the poor?
        In many parts of the world today, neoliberal development programs are offering ordinary people the tools of free enterprise as the means to well-being and empowerment.
        Schemes to transform the poor into small-scale entrepreneurs promise them the benefits of the market and access to the rewards of globalization.
        <span class="italic">Markets of Dispossession</span> is a theoretically sophisticated and sobering account of the consequences of these initiatives. 
      </p>
    </Book>
  </div>
</template>
