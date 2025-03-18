<style>
#effectsCarousel .carousel__slide {
  text-align: left;
}
</style>

<template>
  <Carousel v-bind="config" id="effectsCarousel">
    <Slide v-for="effect in effects">
      <Effect>
        <EffectButton :btnText=effect.btn1 class="text-white bg-black" />
        <EffectButton :btnText=effect.btn2 />
        <EffectDesc>
          <p> {{ effect.description }} </p>
        </EffectDesc>

        <Button btnText="GET IN TOUCH" class="bg-white border-1px border-black
        overflow-hidden relative diagonalAnimation !text-10px !w-100px !mt-0"/>

        <template #img>
          <img :src=effect.img alt="#">
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
import Button from "@/components/Button.vue";

import img1 from "@/assets/img/effects/42756a28464e992d90e07853a8481ac7.png"
import img2 from "@/assets/img/effects/6259b4e6305954c01f493b721f928800.png"
import img3 from "@/assets/img/effects/f4d04fa35b532eb6075e49be0cfe35b4.png"
import img4 from "@/assets/img/effects/88094aa5ce1e00383c20af17eabb9db2.png"
import img5 from "@/assets/img/effects/5382b2d89ef386e59d78f058f3b76753.png"
import img6 from "@/assets/img/effects/183ee666389135536f7ea9bfb03dc9d8.png"
import img7 from "@/assets/img/effects/28661226590b39697120234b385fc124.png"

const effects = ref([
  {
    'btn1': 'bettercare',
    'btn2': '#israel',
    'description': 'A healthcare startup rescues and scales their product',
    'img': img1,
  },
  {
    'btn1': 'gifted',
    'btn2': '#usa',
    'description': 'E-gifting startup enhances their SaaS platform and expands globally',
    'img': img2,
  },
  {
    'btn1': 'rooya',
    'btn2': '#uk',
    'description': 'An insurtech startup elevates risk profiling with a dashcam app',
    'img': img3,
  },
  {
    'btn1': 'liquidity',
    'btn2': '#usa',
    'description': 'An insurtech startup grows from a great promise to a unicorn',
    'img': img4,
  },
  {
    'btn1': 'firsties',
    'btn2': '#usa',
    'description': 'A self-funded media startup saves $570K annually with our dedicated team service',
    'img': img5,
  },
  {
    'btn1': 'pictime',
    'btn2': '#israel',
    'description': 'A media company scales its front- end team with 34% cost savings',
    'img': img6,
  },
  {
    'btn1': 'waddington’s',
    'btn2': '#canada',
    'description': 'Renowned auction house goes mobile',
    'img': img7,
  },
]);

</script>
