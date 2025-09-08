<template>
  <nav class="sticky relative top-0 bg-white border-b z-20 py-5 px-4">
    <div class="max-w-5xl mx-auto flex items-center">

      <RouterLink to="/" class="text-xl font-medium">Julia Elyachar</RouterLink>

      <ul class="ml-auto flex gap-x-8">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/books">Books</RouterLink></li>
        <li><RouterLink to="/teaching">Teaching</RouterLink></li>
        <li><RouterLink to="/events">Events</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>

    </div>
  </nav>
</template>
