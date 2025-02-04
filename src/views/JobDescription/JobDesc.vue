<template>
  <div class="w-full flex flex-col gap-16">
    <div class="divContainer  flex flex-col  items-start px-5 md:px-0 ">
      <div class="font-bold text-base leading-4 tracking-wider uppercase">Jobs</div>
      <div class="mb-6 font-bold md:text-5xl mt-8 text-2xl leading-9  md:leading-loose tracking-wide">It Project manager</div>
      <div class="w-32 h-1 bg-black"></div>

      <p class="font-normal text-base md:text-lg leading-9  mt-6">We transform the way IT products are developed, creating a collaborative culture
        <br> where br teams and founders shape the success of digital products together.</p>
      <button class="py-3 px-16 bg-gray-600 rounded-xl mt-16 font-bold text-xs leading-4 tracking-widest  " @click="goToJob(idJob)">APPLY</button>
    </div>
    <AboutJob />
  </div>
</template>
<script setup>
import AboutJob from "./AboutJob.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router"
const route=useRoute()
const router=useRouter()
const idJob=ref(route.params.id)
function goToJob(id){
  router.push({name:"applyJob",params:{id}})
}
</script>
