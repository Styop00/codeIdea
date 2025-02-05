<template>
  <div class="divContainer mt-14 flex flex-col gap-14 px-5 md:px-0">
    <div class="w-full flex flex-col md:flex-row gap-y-14 justify-between py-6 px-4 shadow-small-15"
         v-for="item in items">
      <div class="font-bold text-2xl leading-relaxed">{{ item.title }}</div>
      <Button @click="goToJob(item.id)" btn-text="view job offer" class="bg-white shadow-small-20 mt-0"/>
    </div>
  </div>

</template>
<script setup>
import {useRouter} from "vue-router";
import Button from "@/components/Button.vue";

const items = [
  {
    id: 1,
    title: "IT Project Manager",
  },
  {
    id: 2,
    title: "Senior IT Business Analyst",

  },
  {
    id: 3,
    title: "Senior Software Engineer in Test ",

  },
  {
    id: 4,
    title: "JavaScript Fullstack Developer",

  }
]
const router = useRouter()

function goToJob(id) {
  router.push({name: "JobDesc", params: {id}})
}
</script>
