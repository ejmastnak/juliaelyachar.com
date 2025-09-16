<script setup>
import { ref } from 'vue'
import { XMarkIcon, Bars3Icon  } from '@heroicons/vue/24/outline'

const mobileMenuShowing = ref(false)
</script>

<template>
  <nav class="sticky relative top-0 bg-white border-b z-20 py-5 px-6">
    <div class="max-w-5xl mx-auto">

      <div class="flex items-center">
        <RouterLink to="/" class="text-xl font-medium">Julia Elyachar</RouterLink>

        <!-- Desktop -->
        <ul class="hidden md:flex ml-auto flex gap-x-8">
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/">Home</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/about">About</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/publications">Publications</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/teaching">Teaching</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/events">Events</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-600" to="/contact">Contact</RouterLink></li>
        </ul>

        <!-- Mobile (hamburger) -->
        <button type="button" class="md:hidden ml-auto" >
          <Bars3Icon v-show="!mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
          <XMarkIcon v-show="mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
        </button>

      </div>

    </div>

    <Transition>
      <!-- translate-y-5 makes up for py-5 of nav -->
      <div v-show="mobileMenuShowing" class="absolute right-0 translate-y-5 w-fit min-w-[160px] bg-white border-x border-b border-gray-300">
        <ul class="relative flex flex-col px-8 pt-6 pb-8 text-left w-fit mx-auto space-y-4">
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/">Home</RouterLink></li>
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/about">About</RouterLink></li>
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/publications">Publications</RouterLink></li>
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/teaching">Teaching</RouterLink></li>
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/events">Events</RouterLink></li>
          <li @click="mobileMenuShowing = false" class="border-b"><RouterLink activeClass="font-medium" class="hover:text-blue-600 hover:underline" to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
    </Transition>


  </nav>
</template>


<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
