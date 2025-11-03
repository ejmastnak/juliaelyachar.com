<script setup>
const props = defineProps({
  img: String,
  imgClasses: String,
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
        <RouterLink v-if="to" :to="to">
          <h2 class="text-3xl font-semibold hover:underline">{{title}}</h2>
        </RouterLink :to="router">
        <h2 v-else class="text-3xl font-semibold">{{title}}</h2>

        <p class="mt-1">{{subtitle}}</p>
      </div>

      <div class="mx-auto w-fit my-6 md:my-0 ">
        <RouterLink v-if="to" :to="to">
          <img :src="img" class="max-w-md h-96 rounded object-cover object-right hover:ring-2 hover:ring-sc-brown hover:shadow-lg" :class="imgClasses" />
        </RouterLink>
        <img v-else :src="img" class="max-w-md h-96 rounded object-cover object-right" :class="imgClasses" />
      </div>

      <div class="max-w-2xl">
        <div class="hidden md:block">
          <RouterLink v-if="to" :to="to">
            <h2 class="text-3xl font-semibold hover:underline">{{title}}</h2>
          </RouterLink :to="router">
          <h2 v-else class="text-3xl font-semibold">{{title}}</h2>
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
