<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import LinkButton from '@/Components/LinkButton.vue'
import juliaImg from '@/assets/img/julia.jpg?w=600'
</script>

<template>
  <PageWrapper>
    <h1 class="text-5xl mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">About</h1>

    <div class="sm:flex sm:flex-row-reverse gap-x-8 md:gap-x-12 max-w-3xl">

      <img :src="juliaImg" class="hidden sm:block max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />

      <div>
        <p>
          Julia Elyachar is an award-winning author, anthropologist, and political economist.  She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language. At Princeton, she is an associate professor of anthropology, and associate professor at the Princeton Institute for International and Regional Studies. She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies.
        </p>

        <LinkButton href="/julia-elyachar-cv.pdf" :showIcon="false">
          2025 CV
        </LinkButton>

      </div>

    </div>

    <div class="mt-8 md:mt-12 flex flex-col gap-y-4 max-w-2xl">
      <p>
        Elyachar received her Ph.D. from Harvard University in Anthropology and Middle Eastern Studies. Her M.A. (Harvard University) is in Anthropology, and her B.A. (Barnard College, Columbia University) is in Economics. She was trained in advanced Arabic language at Middlebury College and the Center for Arabic Studies Abroad at the American University of Cairo, in Hebrew at Hebrew University, Jerusalem, in French at Aix Marseille University in Aix-en-Provence, France and in Slovenian at the University of Ljubljana, Slovenia. Before moving to Princeton University, she was Associate Professor of Anthropology and Economics and Director of the Center for Global Peace and Conflict Studies at UC Irvine. She has also taught and held research positions in Near Eastern Studies and at the International Center for Advanced Studies at New York University and at the Research Center of the Slovene Academy of Sciences and Arts in Ljubljana, Slovenia. 
      </p>

      <p>
        Like her writing, Elyachar’s teaching brings together issues of the day with their long histories in new and distinct fashion. Elyachar’s classes on Debt and what she called “Empires of Debt” have attracted attention around the world. A tweet in which she posted her syllabus about “Empires of Debt” quickly reached over 200,000 views. This class drew on anthropology, history, and finance to understand the role of debt in the making of empires, the creation of dependency, the forging of interdependency, and the shaping of economic life in 2023. More and more, young people want to see how economic issues of our own times are entangled with legacies of enslavement and internal colonialism; they want analytic tools to rethink the world. Addressing this need is a key mission for Elyachar in her teaching and writing. 
      </p>

      <p>
        Elyachar has given lectures in the United Kingdom, Egypt, Israel, Slovenia, Croatia, France, and Canada. Her work has been featured in venues ranging from the industry journal Banker’s Magazine, the ezine Jadaliyya with a reach of half a million unique visitors a month, multiple podcasts from Europe and the Middle East as well as the United States, and the independent Jewish Forward, founded in 1897, with a million unique visitors each month. Her writing is praised and drawn on by novelists as well as social scientists. 
      </p>

      <p>
        Elyachar’s work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly. As an economic and historical anthropologist working in the Middle East, she engages with a long and rich history of markets, finance, and global infrastructures of commerce and mobility in the region. Her primary research site is Egypt, where she studied and conducted ethnographic research for four and a half years in the 1990s, and continues to conduct research for shorter periods to this day. Her research is also informed by her work at the Federal Reserve Bank of New York, where she was a research analyst after college, and by her ongoing experience living and working in Slovenia (former Yugoslavia). Elyachar also draws heavily in her writing and thinking on her family legacy and archive from Palestine. She is the great-grand daughter of the founder of an early 20th century stone-crushing “Factory” in Jerusalem, Palestine.  Likewise, she is from a line of Ottoman “sarrafs” or money brokers in Palestine, who mediated flows of commerce across Empire in cooperation with Ottoman officials and factors of many trading nations, and the descendent of Chief Rabbis of Palestine.
      </p>
    </div>

  </PageWrapper>
</template>
