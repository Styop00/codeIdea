<template>
  <section id="comments" class="pt-10 md:pt-0 px-5 sm:px-0 bg-white-30 md:bg-white">
    <SectionsTitle sectionsTitle="What our clients say about us" class="mb-0"/>
    <div class="md:grid md:grid-cols-2 md:gap-11 xl:grid-cols-3 bg-white-30 md:pt-11 pb-24 hidden">

      <div v-for="feedback in feedbacks">
        <Comment :name="feedback.user.firstname + ' ' + feedback.user.lastname" :position="feedback.user.position">
          <template #comment>
            <p> {{ feedback.feedback }} </p>
          </template>

          <template #img>
            <img :src="feedback.user.picture" class="w-16 rounded-full" alt="#">
          </template>
        </Comment>
      </div>
    </div>
    <CommentsCarousel class="md:hidden" :feedbacks="feedbacks"/>
  </section>
</template>

<script setup>
import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
import Comment from "@/components/HomePage/CommentSection/Comment.vue"
import CommentsCarousel from "@/components/HomePage/CommentSection/CommentsCarousel.vue"
import {$axios} from "@/plugins/axios.js";
import {ref} from "vue";

const feedbacks = ref([]);

async function getFeedbacks() {
  try {
    const response = await $axios.get('/feedbacks');
    feedbacks.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
}

getFeedbacks();
</script>
