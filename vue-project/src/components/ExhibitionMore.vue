<template>
  <a class="cursor-pointer">
    <p class="mb-2 text-xl whitespace-nowrap font-bold tracking-normal text-gray-900 dark:text-white">{{ name }}</p>
    <div class="lg:w-full relative mx-auto bg-whiteF dark:bg-gray-800 dark:border-gray-700">
      <img class="mt-4 md:w-full md:h-40 lg:w-3/4 lg:h-40 rounded-lg mx-auto" :src="image" />
      <div class="p-5 row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-2">
        <span class="mb-2 whitespace-nowrap lg:text-xl text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {{ dateValue }} <br>
          {{ place }}
        </span>
        <span class="hidden lg:right-0 lg:bottom-1 lg:absolute lg:flex whitespace-nowrap items-center justify-center px-3 py-1 mx-3 text-xs font-medium text-center border border-black rounded-lg bg-gray-800 text-white hover:bg-blueB ">{{ category }}</span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { useUserStore } from '@/stores/users'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  dateValue: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  place: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
