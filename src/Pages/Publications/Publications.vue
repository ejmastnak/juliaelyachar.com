<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Articles from './Partials/Articles.vue'
import SemicivilizedPreview from './Partials/SemicivilizedPreview.vue'
import MarketsPreview from './Partials/MarketsPreview.vue'

const articles = {
  // Economy
  economy: {
    title: "Political Economy and History of Thought (and Ethnography too) ",
    articles: [
      {
        category: "Political Economy and History of Thought",
        title: "“Public Wealth, Public Enemies, and Theft: Thinking about Wealth with the Earl of Lauderdale in  Cairo and Split,” Current Anthropology, Special Issue, “The Price of Wealth.” Forthcoming, 2024."
      },
      {
        category: "Political Economy and History of Thought",
        title: "“Before (and After) Neo-Liberalism: Tacit Knowledge, Secrets of the Trade, and the Public Sector in Egypt,” Cultural Anthropology, vol. 27, no. 1, pp. 76-96, February 2012."
      },
      {
        category: "Political Economy and History of Thought",
        title: "“Neoliberalism and the Savage Slot: Rationality, Irrationality, and Calculating Value 1920-2020.” In The Neoliberal Present? Political Economies in Flux, William Callison and Zachary Manfredi, editors. Fordham University Press, 2019, pp. 177-195."
      }
    ]
  },

  // Neoliberalism
  neoliberalism: {
    title: "Neoliberalism – Empowerment Finance",
    articles: [
      {
        category: "Neoliberalism — Empowerment Finance",
        title: "“Empowerment Money: The World Bank, Non-Governmental Organizations, and the Value of Culture in Egypt,” Public Culture, vol. 14, no. 3, pp. 493-514, Fall 2002.",
      },
      {
        category: "Neoliberalism — Empowerment Finance",
        title: "“Neoliberalism and the Savage Slot: Rationality, Irrationality, and Calculating Value 1920-2020.” In The Neoliberal Present? Political Economies in Flux, William Callison and Zachary Manfredi, editors. Fordham University Press, 2019, pp. 177-195.",
      },
      {
        category: "Neoliberalism — Empowerment Finance",
        title: "“Rethinking Neoliberalism in the Middle East,” A Companion to the Anthropology of the Middle East, First Edition. Edited by Soraya Altorki. Wiley-Blackwell, 2015, Chapter 20, pp. 411-433.",
      },
    ]
  },

  // Finance
  finance: {
    title: "Banking/Money/Finance/Financialization",
    articles: [
      {
        category: "Banking/Money/Finance",
        title: "“Comprehending and Regulating Financial Crisis,” with Nina Bandelj, Gary Richardson, and James Owen Weatherall, Perspectives on Science, Vol. 24, No. 4, pp. 443-473, July-August 2016.",
      },
      {
        category: "Banking/Money/Finance",
        title: "“Relational Finance: Ottoman Debt, Financialization, and the Problem of the Semi-Civilized.” Journal of Cultural Economy, February 2023, Volume 16, 2023, Issue 3, pp. 323-336.",
      },
      {
        category: "Banking/Money/Finance",
        title: "“Morals and Emotions of Money,” with Nina Bandelj, Tyler Boston, Julie Kim, Michael McBride, Zaibu Tufail, and James Owen Weatherall. In Money Talks: Explaining how Money Really Works. Princeton: Princeton University Press, 2017.",
      }
    ]
  }

}

</script>

<template>
  <PageWrapper>

    <h2 class="text-5xl w-fit border-b pb-5 border-gray-200">Books</h2>

    <div class="mt-10 md:mt-16">
      <SemicivilizedPreview class="pb-16 lg:pb-20 border-b border-gray-200" />
      <MarketsPreview class="mt-16 lg:mt-20" />
    </div>

    <h2 class="mt-24 text-5xl w-fit border-b pb-5 border-gray-200">Selected Articles</h2>

    <p class="mt-3">
      <a href="/julia-elyachar-cv.pdf" class="text-blue-500 font-semibold hover:underline hover:text-blue-600">See my CV</a>
      for a full list of articles, chapters in edited volumes, collections, and other publications.
    </p>

    <div class="my-10">

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['economy'].title"
        :articles="articles['economy'].articles"
      />

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['neoliberalism'].title"
        :articles="articles['neoliberalism'].articles"
      />

      <Articles
        class="border-b border-gray-200 pb-10 mb-10"
        :title="articles['finance'].title"
        :articles="articles['finance'].articles"
      />

    </div>

  </PageWrapper>
</template>
