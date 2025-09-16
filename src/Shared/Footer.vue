<template>
  <div>

    <!-- Main footer content -->
    <div
      class="bg-sc-brown text-sc-white pt-12 pb-16 px-8"
    >

      <div class="max-w-5xl mx-auto flex">

        <div>
          <p class="text-3xl">Julia Elyachar</p>
          <div class="mt-5">
            <p>Department of Anthropology</p>
            <!-- <p>Princeton Institute for International and Regional Studies</p> -->
            <p>130 Aaron Burr Hall</p>
            <p>Princeton, NJ 08545</p>
          </div>
          <div class="mt-3 border-t border-gray-400 w-fit">
            <a class="mt-3 block" href="mailto:elyachar@princeton.edu">
              elyachar@princeton.edu
            </a>
          </div>
        </div>

        <ul class="hidden md:flex text-lg ml-auto mt-3 flex justify-around gap-x-8 h-fit">
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-100" to="/about">About</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-100" to="/books">Books</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-100" to="/teaching">Teaching</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-100" to="/events">Events</RouterLink></li>
          <li><RouterLink activeClass="font-medium" class="hover:underline hover:text-blue-100" to="/contact">Contact</RouterLink></li>
        </ul>

      </div>
    </div>

  </div>
</template>
