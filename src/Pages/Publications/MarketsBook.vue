<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import Book from '@/Components/Book.vue'
import Review from './Partials/Review.vue'
import LinkButton from '@/Components/LinkButton.vue'
import marketsImg from '@/assets/img/markets-of-dispossession.jpg?w=400'

const reviews = [
  {
    review: "“<i>Markets of Dispossession</i> is an engaging book from the first page. It embodies keen academic analysis with a humanistic touch.”",
    reviewer: "- Heidi Morrison, <i>Digest of Middle East Studies</i>"
  },
  {
    review: "“<i>Markets of Dispossession</i> is an example of serious scholarship with an attention to historical details, ethnographical imagination, and social scientific richness... Elyachar’s work will serve as an essential source for economists, political scientists, anthropologists, and sociologists who want to understand poverty, development, neo-liberalism, and markets. <i>Markets of Dispossession</i> should be bought by all serious libraries, can be used in teaching, and should be consulted by all scholars in social sciences. It is going to be a classic in economic anthropology.”",
    reviewer: "- Koray Çalişkan, <i>Arab Studies Journal</i>"
  },
  {
    review: "“<i>Markets of Dispossession</i> is an important contribution to the study of development, informal economy, and neoliberalism in Egypt. Elyachar’s treatment of these intricate subjects is intellectually stimulating and compelling.”",
    reviewer: "- Mohamed Waked, <i>Anthropological Notebooks</i>"
  },
  {
    review: "“[A] hard-hitting, iconoclastic, and deeply engaged work of scholarship.”",
    reviewer: "- Jeremy Rayner, <i>European Journal of Sociology</i>"
  },
  {
    review: "“[A] masterful description and sophisticated interpretation of the transformation of the social, cultural, and political economy of urban Egypt since the early 1990s... Elyachar has written a book that is essential reading for anyone concerned with development, Egypt and the Arab World, and the dangers of ideologically motivated interference by foreign social scientists and other experts in local economies and societies.”",
    reviewer: "- Donald (Abdallah) Cole, <i>American Ethnologist</i>"
  },
  {
    review: "“[Elyachar’s] research furthers our understanding of social capital and microcredit as well as the theorization of markets, capitalism, value and informality... This book is an example of the scholarship needed for a deeper understanding of a market-crossed world.”",
    reviewer: "- Alice Wilson, <i>Cambridge Anthropology</i>"
  },
  {
    review: "“Contributing to new directions in Foucaudian governmentality studies, <i>Markets of Dispossession</i> moves beyond descriptions of governmental rationalities, like microenterprise and social capital, to the subjects and practices that they seek to install... I thoroughly enjoyed reading <i>Markets of Dispossession</i> and found it immensely thought provoking.”",
    reviewer: "- Gerda Roelvink, <i>Social Identities</i>"
  },
  {
    review: "“Drawing on a broad range of theoretical perspectives, Elyachar puts forward a refreshing view of development in general and micro-credit projects in particular... Oral histories, multi-sited ethnography and the discussion of religious symbols within an economic context make her descriptions colorful and tangible.”",
    reviewer: "- Gökçe Günel, <i>New Perspectives on Turkey</i>"
  },
  {
    review: "“Elyachar has produced a work rich in fine ethnographic detail and driven by important theoretical insights into the workings of market, the anthropology of value, the play of power in society, and the social consequences of development strategies. This is a brilliant study on many levels... This work is a tour-de-force of critical analysis and ethnographic exposition. It sets new standards for the study of programmatic economic development, the ethnography of craft and small-scale production, and the cultural consequences and human costs of structural adjustment.”",
    reviewer: "- Roy Dilley, <i>Social Anthropology</i>"
  },
  {
    review: "“Julia Elyachar’s ethnography...offers a refreshingly critical and historically situated account of microloans and the neopopulist ideologies that have swept the international development industry...<i>Markets of Dispossession</i> should interest anthropologists, historians, sociologists, and geographers concerned with post-socialism, development, urban studies, and the Middle East.”",
    reviewer: "- Marina Welker, <i>Comparative Studies in Society and History</i>"
  },
  {
    review: "“Julia Elyachar’s superb book arrives at the right moment, revealing how seeds of today’s insecurities were sewn by contradictory market liberalization projects as they reshaped urban spaces and male social identities... Elyachar has written a landmark analysis of how the so-called ‘free market’ trains the men of the popular classes to perform the most destructive forms of entrepreneurial subjectivity, previously associated only with a small island of rich barons.”",
    reviewer: "- Paul Amar, <i>International Journal of Middle East Studies</i>"
  },
  {
    review: "“The ethnographic approach includes a substantial narrative component, with reoccurring characters like wealthy Ibrahim and generous (‘gada’) Samir sketched engagingly. This has the effect of allowing the reader to piece together in immediate and accessible packages the various concepts that Elyachar is problematizing, making for a highly readable account. Familiarity with anthropological language and concepts is not necessary to access the key findings of this work, making it useful for a non-specialist as well as an academic audience.”",
    reviewer: "- Joseph O’Mahoney, <i>Work, Employment and Society</i>"
  },
  {
    review: "\"Having witnessed the developments that affect the life and work of workshop owners and micro-entrepreneurs, Julia Elyachar presents a deep, insightful, and authentic account of the small entrepreneurs' work relationships in El Herafeyein City and the factors affecting them.\"",
    reviewer: "- Alia El-Mahdi, <i>Middle East Journal</i>"
  },
  {
    review: "“<i>Markets of Dispossession</i> is a brilliant study of contemporary forms of market ideology and practice. Exploring central questions about value and social resources, debt and dispossession, culture and power, it offers an original and outstanding contribution to the anthropological analysis of the economic.”",
    reviewer: "- Timothy Mitchell, author of <i>Rule of Experts: Egypt, Techno-Politics, Modernity</i>"
  },
  {
    review: "“Ethnographically rich and analytically powerful, <i>Markets of Dispossession</i> fundamentally reshapes the debate over the informal economy, microenterprise, and economic development and points to the complex and many-layered world-conjuring work of that which we have come to call neoliberalism. Based on evocative accounts of craftsmen’s workshops in Cairo, Julia Elyachar shows how the market expansion promoted by the World Bank, NGOs, and others poses critical challenges to both everyday lives and contemporary social analysis.”",
    reviewer: "- Bill Maurer, author of <i>Mutual Life, Limited: Islamic Banking, Alternative Currencies, Lateral Reason</i>"
  }
]

</script>

<template>
  <PageWrapper>

    <div class="text-center md:text-left">
      <h2 class="text-4xl font-medium">Markets of Dispossession</h2>
      <p class="mt-1">NGOs, Economic Development, and the State in Cairo</p>
      <p class="mx-auto md:mx-0 mt-1 w-fit rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-700/40">Winner of the Sharon Stephens First Book Prize</p>
    </div>

    <div class="mt-12 md:flex md:flex-row-reverse gap-x-20 lg:px-16">
      <img :src="marketsImg" class="md:max-w-sm mx-auto my-6 md:my-0 rounded object-cover object-right" />
      <div>
        <p>What happens when the market tries to help the poor? In many parts of the world today, neoliberal development programs are offering ordinary people the tools of free enterprise as the means to well-being and empowerment. Schemes to transform the poor into small-scale entrepreneurs promise them the benefits of the market and access to the rewards of globalization. <span class="italic">Markets of Dispossession</span> is a theoretically sophisticated and sobering account of the consequences of these initiatives.</p>
        <LinkButton href="https://www.dukeupress.edu/markets-of-dispossession">
          View the book at Duke University Press
        </LinkButton>
      </div>
    </div>

    <div class="pt-16 mt-16 border-t border-gray-200">
      <h2 class="text-2xl font-semibold">In Julia's words:</h2>
      <div class="mt-5 flex flex-col gap-y-5">
        <p class="max-w-2xl">
          In <span class="italic">Markets of Dispossession</span> I show that popular notions of the invisible hand and the free market are more “folk theory” than an accurate portrayal of how markets work and can be sustained. I make my argument by drawing on 2 years of fieldwork I conducted with bankers, borrowers, bureaucrats, workshop owners (and their wives and sisters), child workers, and NGO officials, and by engaging with longstanding debates in moral philosophy and political economy about the market, ethics, debt, and economic subjectivities.
        </p>

        <p class="max-w-2xl ml-auto">
          In Egypt, I propose, “empowering debt” to solve problems of the poor came at the expense of long-termer sources of economic value. This kind of development policy became possible in the late 20th century after social scientists discovered that cultural practices (such as hanging out in coffeehouses, hanging out, visiting, and socializing) once condemned as a “waste of time” were in fact a source of “social capital” and economic value.
        </p>

        <p class="max-w-2xl">
          But turning culture and sociality into new sources of profit, I argued, was a new and insidious form of dispossession. Promoting short-term gain and the endless expansion of the neoliberal free market would, in local terms, provoke the attacks of the evil eye. Neoliberal free market expansion would eventually implode—as it did in Egypt in 2011.  
        </p>

      </div>
    </div>

    <div class="pt-16 mt-16 border-t border-gray-200">
      <h2 class="text-2xl font-semibold text-center">Praise for <span class="italic">Markets of Dispossession</span></h2>

      <div class="mt-8 flex flex-col gap-y-8">
        <Review 
          v-for="(review, idx) in reviews"
          :review="review.review"
          :reviewer="review.reviewer"
          :left="idx % 2 == 1"
        />
      </div>

    </div>


  </PageWrapper>
</template>
