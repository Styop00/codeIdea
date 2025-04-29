<template>
  <div class="divContainer mt-14 flex flex-col gap-14 px-5 md:px-0">
    <div v-if="jobs.length">
      <div
        class="w-full flex flex-col md:flex-row items-center gap-y-14 justify-between py-6 px-4 shadow-small-15"
        v-for="job in jobs"
        :key="job.id"
        style="margin-bottom: 57px"
      >
        <div class="flex items-center font-bold text-2xl leading-relaxed">
          {{ job.title.rendered }}
        </div>
        <Button @click="goToJob(job.slug)" btn-text="View Job Offer" class="bg-white shadow-small-20 mt-0"/>
      </div>
    </div>
    <p v-else class="text-center">No job listings found.</p>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Button from "@/components/Button.vue";
import {$axios} from "@/plugins/axios.js";

const jobs = ref([]);

async function fetchJobs() {
  try {
    const response = await $axios.get('/index.php/wp-json/wp/v2/job-listings');
    jobs.value = await response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

function goToJob(job) {
  window.location.href = '/' + job;
}

onMounted(fetchJobs);
</script>
