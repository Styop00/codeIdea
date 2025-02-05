<style>
#effectsCarousel .carousel__slide {
  text-align: left;
}
</style>

<template>
  <Carousel v-bind="config" id="effectsCarousel">
    <Slide v-for="effect in effects">
      <Effect>
        <EffectButton :btnText=effect.btn1 class="text-white" :class=effect.bgBtn />
        <EffectButton :btnText=effect.btn2 />
        <EffectDesc>
          <p> {{ effect.description }} </p>
        </EffectDesc>

        <template #circle>
          <img :src=effect.circle>
        </template>

        <template #img>
          <img :src=effect.img>
        </template>
      </Effect>
    </Slide>

  </Carousel>
</template>

<script setup>
import Effect from "@/components/HomePage/EffectSection/Effect.vue"
import EffectButton from "@/components/HomePage/EffectSection/EffectButton.vue"
import EffectDesc from "@/components/HomePage/EffectSection/EffectDesc.vue"

import 'vue3-carousel/carousel.css'
import {Carousel, Slide} from 'vue3-carousel'

const config = {
  itemsToShow: 1.5,
  autoplay: 2000,
  gap: 9,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  snapAlign: 'start',
}

import {ref} from "vue"

const effects = ref([
  {
    'btn1': 'bettercare',
    'btn2': '#israel',
    'bgBtn': 'bg-purple-10',
    'description': 'A healthcare startup rescues and scales their product',
    'circle': 'src/assets/img/effecs/circle.svg',
    'img': 'src/assets/img/effecs/42756a28464e992d90e07853a8481ac7.png',
  },
  {
    'btn1': 'gifted',
    'btn2': '#usa',
    'bgBtn': 'bg-pink-10',
    'description': 'E-gifting startup enhances their SaaS platform and expands globally',
    'circle': 'src/assets/img/effecs/gray-circle.svg',
    'img': 'src/assets/img/effecs/6259b4e6305954c01f493b721f928800.png',
  },
  {
    'btn1': 'rooya',
    'btn2': '#uk',
    'bgBtn': 'bg-green-10',
    'description': 'An insurtech startup elevates risk profiling with a dashcam app',
    'circle': 'src/assets/img/effecs/circle.svg',
    'img': 'src/assets/img/effecs/f4d04fa35b532eb6075e49be0cfe35b4.png',
  },
  {
    'btn1': 'liquidity',
    'btn2': '#usa',
    'bgBtn': 'bg-orange-10',
    'description': 'An insurtech startup grows from a great promise to a unicorn',
    'circle': 'src/assets/img/effecs/gray-circle.svg',
    'img': 'src/assets/img/effecs/88094aa5ce1e00383c20af17eabb9db2.png',
  },
  {
    'btn1': 'firsties',
    'btn2': '#usa',
    'bgBtn': 'bg-gray-10',
    'description': 'A self-funded media startup saves $570K annually with our dedicated team service',
    'circle': 'src/assets/img/effecs/gray-circle.svg',
    'img': 'src/assets/img/effecs/5382b2d89ef386e59d78f058f3b76753.png',
  },
  {
    'btn1': 'pictime',
    'btn2': '#israel',
    'bgBtn': 'bg-blue-100',
    'description': 'A media company scales its front- end team with 34% cost savings',
    'circle': 'src/assets/img/effecs/gray-circle.svg',
    'img': 'src/assets/img/effecs/183ee666389135536f7ea9bfb03dc9d8.png',
  },
  {
    'btn1': 'waddington’s',
    'btn2': '#canada',
    'bgBtn': 'bg-purple-20',
    'description': 'Renowned auction house goes mobile',
    'circle': 'src/assets/img/effecs/gray-circle.svg',
    'img': 'src/assets/img/effecs/28661226590b39697120234b385fc124.png',
  },
]);

</script>
