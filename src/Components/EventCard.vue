<script setup>
const props = defineProps({
  title: String,
  date: String,
  time: String,
  location: String,
  type: String,
  description: String,
})

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
  Input date of the form YYYY-MM-DD
  Output month as e.g. "Sep" or "Oct"
*/
function month(inputDate) {
  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  return month;
}

/**
  Input date of the form YYYY-MM-DD
  Output day as e.g. "9" or "12"
*/
function day(inputDate) {
  const date = new Date(inputDate);
  return date.getDate();
}

</script>

<template>
  <div class="flex space-x-4">

    <!-- Date -->
    <div class="text-center">
      <p class="text-xl text-gray-800">{{month(date)}}</p>
      <p class="-mt-1 text-3xl font-medium text-gray-700">{{day(date)}}</p>
    </div>

    <div>
      <p class="font-semibold">{{title}}</p>
      <p class="text-gray-700 text-sm">{{type}}</p>
      <p class="text-gray-700 text-sm">{{date}} {{time}}</p>
      <p class="text-gray-700 text-sm">{{location}}</p>

      <p class="mt-2 text-sm">
        {{description}}
      </p>
    </div>
  </div>
</template>
