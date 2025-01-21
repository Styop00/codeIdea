<template>
    <div class="div_container mt-14 flex flex-col gap-14 ">
        <div class="w-full flex flex-col md:flex-row gap-y-14 justify-between py-6 px-4 shadow-small-10" v-for="item in items">
          <div class="font-bold text-2xl leading-relaxed">{{item.title}}</div>
          <div class="uppercase font-bold leading-4 w-1/2 md:w-fit text-center text-xs tracking-widest py-3 px-3.5 bg-gray-600 rounded-xl cursor-pointer" @click="goToJob(item.id)">view job offer</div>
        </div>
    </div>

</template>
<script setup>
import {useRouter} from "vue-router";

const items=[
  {
    id:1,
    title:"IT Project Manager",
  },
  {
    id:2,
    title:  "Senior IT Business Analyst",

  },
  {
    id:3,
    title:   "Senior Software Engineer in Test ",

  },
  {
    id:4,
    title:   "JavaScript Fullstack Developer",

  }
]
const router =useRouter()
function goToJob(id){
  router.push({name:"JobDesc",params:{id}})
}
</script>
