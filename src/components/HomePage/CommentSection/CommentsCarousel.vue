<style>
#comments_carousel .carousel__slide--sliding {
  transition: transform 300ms;
}

#comments_carousel .carousel.is-dragging .carousel__slide {
  transition: transform 300ms;
}

#comments_carousel .carousel__slide {
  transform: scale(0.6);
  text-align: left;
}

#comments_carousel .carousel__slide--active {
  transform: scale(0.7);
  z-index: 1;
  margin: 0 5px;
}
</style>


<template>
  <Carousel v-bind="carouselConfig" id='comments_carousel'>
    <Slide v-for="feedback in feedbacks">
      <div class="carousel__item">
        <Comment :name="feedback.firstname + ' ' + feedback.lastname" :position="feedback.position">
          <template #comment>
            <p> {{ feedback.feedback }} </p>
          </template>

          <template #img>
            <img :src="feedback.picture" class="w-16 rounded-full" alt="#">
          </template>
        </Comment>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import Comment from "@/components/HomePage/CommentSection/Comment.vue"

import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

defineProps(['feedbacks']);

const carouselConfig = {
  itemsToShow: 1.5,
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}
</script>
