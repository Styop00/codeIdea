<template>
  <div class="divContainer px-5 md:px-0 flex flex-col gap-16 ">
    <div class="flex flex-col gap-3">
    <div class="font-semibold	text-2xl md:text-3xl leading-10">Check out the job offer for IT Project Manager</div>
    <div class="list mt-3 font-noemal text-base  md:text-lg leading-8">
      <li v-for="item in items">
        {{item}}
      </li>
    </div>
    </div>
    <div class="flex flex-col gap-3">
      <p class="font-semibold text-2xl	 md:text-3xl  leading-10">Candidate profile</p>
      <p class="w-full md:w-4/5 font-normal text-base md:text-lg  leading-9">We are looking for an individual who has extensive project management experience (minimum of 3 years) and wants to take responsibility for project
         success. Additionally, they have knowledge of a project management framework such as PMI/Prince2. They are able to work effectively in multiple threads simultaneously, in a VUCA environment. They are not afraid of feedback and disagreement, and they are able to work with different
        personality types. It is someone who can balance organizing and planning project work with giving initiative
        and control to the team. It is also someone who is entrepreneurial, i.e., proactively and creatively solves problems, keeping in mind the welfare of the client and own team.</p>

    </div>
    <div class="flex flex-col gap-3">
      <div class="font-semibold	text-2xl md:text-3xl leading-10">At CodeIdea, you’ll:</div>
      <div class="list mt-3 font-noemal text-base md:text-lg leading-8">
        <li v-for="item in items2">
          {{item}}
        </li>
        <button class="py-3 px-16 bg-gray-600 rounded-xl mt-16 font-bold text-xs leading-4 tracking-wides" @click="goToJob(idJob)">APPLY</button>

      </div>
    </div>
    <div class=" ">
      <p class="font-bold text-2xl md:text-5xl leading-loose	tracking-widest	mb-8">Meet the people of CodeIdea</p>
      <div class="w-32 h-1 bg-black md:hidden mb-8"></div>

      <div class="w-full md:w-4/5 font-normal text-base md:text-lg  leading-9"><span class="font-bold">CodeIdea</span> is a fast-growing web and mobile apps development company with great experience in software developing. Using best practices we offer our clients cloud based rich web applications development services. We can create your product from the scratch - staring with User Experience and ending with Quality Assurance. Shipping the high quality product at the right time - this is our formula of success.y.</div>
      <button class="py-3  text-center px-16 bg-gray-600 rounded-xl mt-16 font-bold text-xs leading-4 tracking-widest	 ">Explore</button>
    </div>
    <div class="w-full gap-8 justify-center items-center md:items-start  flex flex-col md:flex-row md:justify-between md:relative md:h-96 ">
      <div class="w-full md:w-2/5 h-64  bg-gray-100 "></div>
      <div class="w-4/5 md:w-1/2 h-64 z-3  bg-gray-900 md:absolute md:inset-y-1/4 md:inset-x-1/4 "></div>
      <div class="w-full md:w-2/5 h-64  bg-gray-100  "></div>
    </div>
  </div>
</template>
<script setup>
import {defineProps, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
const route=useRoute()
const router=useRouter()
const idJob=ref(route.params.id)
function goToJob(id){
  router.push({name:"applyJob",params:{id}})
}
  const items=[
    "IT Project Manager in international projects ",
    "Methodology for project management - PMI/Prince2 and agile frameworks",
    "Project metrics",
    "Responsibility for processes and tasks",
    "Negotiation and change management",
    "English C1",
    "Quick recruitment process"
  ]
  const items2=[
    "Support one or more teams simultaneously to successfully deliver customer solutions, ",
    "Have influence and responsibility for achieving the established project goals and objectives of the organization, ",
    "Monitor team performance, quality delivered to customers, and project budget, scope and schedule,",
    "Manage both stakeholders and communications to them, as well as project risks,",
    "Define and improve delivery processes using knowledge, data (project metrics) and creativity,"
  ]
</script>
<style lang="scss" scoped>
.list{
  li{
    list-style-type: none;
    margin-left: 0rem;
    position: relative;
    padding-left: 35px;

    &::before{
      content: '';
      position: absolute;
      left:0;
      top:7px;
      width:12px;
      height: 12px;
      background-image: url("../../images/check.png");
      background-size: cover;
      background-position:center center;
    }
  }
}
</style>
