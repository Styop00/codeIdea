<template>
  <div class="overflow-hidden relative w-full divContainer mx-auto py-6">
    <div class="flex transition-transform duration-500 ease-in-out" :style="sliderStyle">
      <div
        v-for="(group, gIndex) in userGroups"
        :key="gIndex"
        class="min-w-full grid gap-6"
        :style="{'grid-template-columns': `repeat(${imagesCount}, minmax(0, 1fr))`}"
      >
        <div
          v-for="(item, index) in group"
          :key="index"
          :class="[
            'flex flex-col items-center bg-white shadow rounded-lg overflow-hidden transition-transform duration-300',
            index % 2 === 1 ? 'translate-y-8' : ''
          ]"
        >
          <div class="w-full aspect-square overflow-hidden">
            <div v-html="item.picture" class="w-full h-full object-cover"></div>
          </div>

          <div class="w-full text-center bg-gray-200 p-2">
            <p class="font-semibold text-lg">{{ item.firstname }}</p>
            <p class="text-sm uppercase text-gray-600">{{ item.position }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-1/2 -translate-y-1/2 left-2 z-10">
      <div
        @click="prevSlide"
        class="bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-black hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </div>
    </div>

    <div class="absolute top-1/2 -translate-y-1/2 right-2 z-10">
      <div
        @click="nextSlide"
        class="bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-black hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>

    <div class="flex justify-center mt-10 space-x-2">
        <span
          v-for="(dot, index) in userGroups.length"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full cursor-pointer transition',
            currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
          ]"
        ></span>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {$axios} from '@/plugins/axios.js'

const users = ref([])
const currentSlide = ref(0)

async function getUsers() {
  try {
    const response = await $axios.get('/index.php/wp-json/employees/v1/all/')
    users.value = response.data.map(user => {
      user.picture = user.picture
        .replace(/(width|height)="[^"]*"/g, '')
      return user
    })
  } catch (error) {
    console.error(error)
  }
}

getUsers()

const imagesCount = computed(() => {
  const windowWidth = window.innerWidth

  let count = 4;
  if (windowWidth <= 550) {
    count = 1
  } else if (windowWidth <= 750){
    count = 2
  } else if (windowWidth <= 950) {
    count = 3
  }

  return count
})

const userGroups = computed(() => {
  const chunks = []
  for (let i = 0; i < users.value.length; i += imagesCount.value) {
    chunks.push(users.value.slice(i, i + imagesCount.value))
  }
  return chunks
})

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}))

const imagesGridStyles = computed(() => ({
  'grid-template-columns': `repeat(${imagesCount}, minmax(0, 1fr))`,
}))

function nextSlide() {
  if (currentSlide.value < userGroups.value.length - 1) {
    currentSlide.value++
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function goToSlide(index) {
  currentSlide.value = index
}
</script>

