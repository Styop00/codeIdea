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
    <Slide>
      <div class="carousel__item">
        <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
          <template #comment>
            <p>
              I don’t need to spoon-feed them.
              Our partnership is truly a
              partnership.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
          </template>
        </Comment>
      </div>
    </Slide>

    <Slide>
      <div class="carousel__item">
        <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
          <template #comment>
            <p>
              I don’t need to spoon-feed them.
              Our partnership is truly a
              partnership.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
          </template>
        </Comment>
      </div>
    </Slide>

    <Slide>
      <div class="carousel__item">
        <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
          <template #comment>
            <p>
              I don’t need to spoon-feed them.
              Our partnership is truly a
              partnership.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
          </template>
        </Comment>
      </div>
    </Slide>

    <Slide>
      <div class="carousel__item">
        <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
          <template #comment>
            <p>
              They’ve added flexibility where
              the system was previously rigid,
              and they take full responsibility
              for the project, quickly fixing any
              issues that arise. Our company
              wouldn’t be where it is without
              the work they’ve done.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
          </template>
        </Comment>
      </div>
    </Slide>

    <Slide>
      <div class="carousel__item">
        <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
          <template #comment>
            <p>
              They’ve added flexibility where
              the system was previously rigid,
              and they take full responsibility
              for the project, quickly fixing any
              issues that arise. Our company
              wouldn’t be where it is without
              the work they’ve done.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
          </template>
        </Comment>
      </div>
    </Slide>

    <Slide>
      <div class="carousel__item">
        <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
          <template #comment>
            <p>
              They’ve added flexibility where
              the system was previously rigid,
              and they take full responsibility
              for the project, quickly fixing any
              issues that arise. Our company
              wouldn’t be where it is without
              the work they’ve done.
            </p>
          </template>

          <template #img>
            <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
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

const carouselConfig = {
  itemsToShow: 1.5,
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}
</script>
