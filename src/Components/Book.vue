<script setup>
const props = defineProps({
  img: String,
  title: String,
  subtitle: String,
  to: String,
  review: String,
  reviewer: String,
})
</script>

<template>
  <div>
    <div class="md:flex md:gap-16 lg:gap-x-20">

      <!-- Mobile -->
      <div class="text-center md:hidden">
        <RouterLink :to="to">
          <h2 class="text-3xl font-semibold hover:underline">{{title}}</h2>
        </RouterLink :to="router">
        <p class="mt-1">{{subtitle}}</p>
      </div>

      <div class="mx-auto w-fit my-6 md:my-0 ">
        <RouterLink :to="to">
          <img :src="img" class="max-w-md h-96 rounded object-cover object-right hover:ring-2 hover:ring-sc-brown hover:shadow-lg" />
        </RouterLink>
      </div>

      <div class="max-w-2xl">
        <div class="hidden md:block">
          <RouterLink :to="to">
            <h2 class="text-3xl font-semibold hover:underline">{{title}}</h2>
          </RouterLink :to="router">
          <p class="mt-1">{{subtitle}}</p>
        </div>
        <div class="mt-5">
          <slot />
        </div>

        <div v-if="review && reviewer" class="md:hidden lg:block mt-5 lg:mt-8 mx-auto max-w-xl">
          <p class="mt-5 text-center text-gray-800 font-semibold">
            {{review}}
          </p>
          <p class="mt-3 ml-8 max-w-xl">
            {{reviewer}}
          </p>
        </div>
      </div>

    </div>

    <!-- Medium -->
    <div v-if="review && reviewer" class="hidden md:block lg:hidden mt-10 max-w-xl mx-auto">
      <p class="mt-5 text-center text-gray-800 font-semibold">
        {{review}}
      </p>
      <p class="mt-3 ml-8 max-w-xl">
        {{reviewer}}
      </p>
    </div>

  </div>



</template>
