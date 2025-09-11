<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Article from '@/Components/Article.vue'
import SemicivilizedPreview from './Partials/SemicivilizedPreview.vue'
import MarketsPreview from './Partials/MarketsPreview.vue'
</script>

<template>
  <PageWrapper class="py-20">

    <h2 class="text-5xl w-fit border-b pb-5 border-gray-200">Books</h2>

    <div class="mt-10 md:mt-16 lg:mt-20">
      <SemicivilizedPreview class="pb-16 lg:pb-20 border-b border-gray-200" />
      <MarketsPreview class="mt-16 lg:mt-20" />
    </div>

    <h2 class="mt-24 text-5xl w-fit border-b pb-5 border-gray-200">Selected Articles</h2>

    <a href="/julia-elyachar-cv.pdf" class="my-8 inline-flex items-center gap-x-1 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
      See <span class="font-semibold hover:text-orange-950 hover:underline">my CV</span> for a full list of articles, chapters in edited volumes, collections, and other publications.
    </a>


    <div>

      <div class="border-b border-gray-200 pb-10 mb-10">
        <h3 class="text-xl">Political Economy and History of Thought (and Ethnography too) </h3>
        <ul class="mt-5 flex flex-col -mx-6 sm:mx-auto">
          <li><Article category="Political Economy and History of Thought"title="“Public Wealth, Public Enemies, and Theft: Thinking about Wealth with the Earl of Lauderdale in  Cairo and Split,” Current Anthropology, Special Issue, “The Price of Wealth.” Forthcoming, 2024." /></li>
          <li><Article category="Political Economy and History of Thought"title="“Before (and After) Neo-Liberalism: Tacit Knowledge, Secrets of the Trade, and the Public Sector in Egypt,” Cultural Anthropology, vol. 27, no. 1, pp. 76-96, February 2012." /></li>
          <li><Article category="Political Economy and History of Thought"title="“Neoliberalism and the Savage Slot: Rationality, Irrationality, and Calculating Value 1920-2020.” In The Neoliberal Present? Political Economies in Flux, William Callison and Zachary Manfredi, editors. Fordham University Press, 2019, pp. 177-195." /></li>
        </ul>
      </div>

      <div class="border-b border-gray-200 pb-10 mb-10">
        <h3 class="text-xl">Neoliberalism – Empowerment Finance </h3>
        <ul class="mt-5 flex flex-col -mx-6 sm:mx-auto">
          <li><Article category="Neoliberalism — Empowerment Finance" title="“Empowerment Money: The World Bank, Non-Governmental Organizations, and the Value of Culture in Egypt,” Public Culture, vol. 14, no. 3, pp. 493-514, Fall 2002." /></li>
          <li><Article category="Neoliberalism — Empowerment Finance" title="“Neoliberalism and the Savage Slot: Rationality, Irrationality, and Calculating Value 1920-2020.” In The Neoliberal Present? Political Economies in Flux, William Callison and Zachary Manfredi, editors. Fordham University Press, 2019, pp. 177-195." /></li>
          <li><Article category="Neoliberalism — Empowerment Finance" title="“Rethinking Neoliberalism in the Middle East,” A Companion to the Anthropology of the Middle East, First Edition. Edited by Soraya Altorki. Wiley-Blackwell, 2015, Chapter 20, pp. 411-433." /></li>
        </ul>
      </div>

      <div class="border-b border-gray-200 pb-10 mb-10">
        <h3 class="text-xl">Banking/Money/Finance/Financialization</h3>
        <ul class="mt-5 flex flex-col -mx-6 sm:mx-auto">
          <li><Article category="Banking/Money/Finance" title="“Comprehending and Regulating Financial Crisis,” with Nina Bandelj, Gary Richardson, and James Owen Weatherall, Perspectives on Science, Vol. 24, No. 4, pp. 443-473, July-August 2016." /></li>
          <li><Article category="Banking/Money/Finance" title="“Relational Finance: Ottoman Debt, Financialization, and the Problem of the Semi-Civilized.” Journal of Cultural Economy, February 2023, Volume 16, 2023, Issue 3, pp. 323-336." /></li>
          <li><Article category="Banking/Money/Finance" title="“Morals and Emotions of Money,” with Nina Bandelj, Tyler Boston, Julie Kim, Michael McBride, Zaibu Tufail, and James Owen Weatherall. In Money Talks: Explaining how Money Really Works. Princeton: Princeton University Press, 2017." /></li>
        </ul>
      </div>

    </div>

  </PageWrapper>
</template>
