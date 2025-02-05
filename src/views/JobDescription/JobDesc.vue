<template>
  <div class="divContainer pt-10 md:pt-28 px-5 md:px-0">
    <Title title="JOBS" description="IT Project manager">
      <p class="w-full lg:w-90%">We transform the way IT products are developed, creating a collaborative culture where
        teams and founders shape the success of digital products together.</p>
    </Title>

    <Button btnText="APPLY" @click="goToJob(idJob)" class="bg-white shadow-small-20"/>

    <AboutJob/>
  </div>
</template>
<script setup>
import AboutJob from "./AboutJob.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router"
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

const route = useRoute()
const router = useRouter()
const idJob = ref(route.params.id)

function goToJob(id) {
  router.push({name: "applyJob", params: {id}})
}
</script>
