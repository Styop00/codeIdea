<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between mb-10 md:mb-24 gap-12 mt-7 min-h-screen">
    <div class="w-full md:w-2/3 flex flex-col justify-center">
      <Title title="services" :description="serviceTitle">
        <p>{{ text }}</p>
      </Title>

      <Button btnText="explore" class="bg-white border-1px border-black
        overflow-hidden relative diagonalAnimation"/>
    </div>

    <div :class="{'md:order-first' : i%2===0}" class="w-full md:w-1/3 relative">
      <img :src=image
           alt="Service image"
           class="w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >

      <img
        src="@/assets/img/services/circle.svg"
        alt="circle"
        class="absolute rotate-180 w-[15%]"
        :class="{
          'top-[5%] left-[7%] md:top-[21%] md:left-[8%] xl:top-[35%] xl:left-[15%] animate-rotateCircle-1 md:animate-rotateCircle-1-md xl:animate-rotateCircle-1-xl' : i===0,
          'top-[50%] left-[2%] md:top-[13%] md:left-[3%] xl:top-[25%] xl:left-[1%] animate-rotateCircle-2' : i===1,
          'top-[20%] left-[8%] animate-rotateCircle-3' : i===2,
          'top-[-20%] left-[5%] md:-top-[-13%] md:left-[47%] animate-rotateCircle-4 md:animate-rotateCircle-4-md' : i===3,
        }"
      >
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue"
import Title from "@/components/Title.vue";
import {ref} from "vue"

const props = defineProps(['serviceTitle', 'serviceText', 'image', 'i'])
const text = ref(props.serviceText);
</script>

<style>
@keyframes rotateCircle2 {
  100% {
    top: 47%;
    left: 90%;
  }
}

@keyframes rotateCircle3 {
  100% {
    top: 70%;
    left: 8%;
  }
}

@keyframes rotateCircle4-md {
  100% {
    top: 74%;
    left: -10%;
  }
}

@keyframes rotateCircle1-xl {
  100% {
    top: 46.5%;
    left: 80%;
  }
}

@media screen and (max-width: 1535px) {
  .animate-rotateCircle-1 {
    top: 245px;
    left: 30px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 47.5%;
      left: 90%;
    }
  }

  .animate-rotateCircle-2 {
    top: -30px;
    left: 10px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 41%;
      left: 87%;
    }
  }

  @keyframes rotateCircle3 {
    100% {
      top: 90%;
      left: 8%;
    }
  }

  .animate-rotateCircle-4 {
    top: -70%;
    left: 45%;
  }

  @keyframes rotateCircle4-md {
    100% {
      top: 130%;
      left: -11%;
    }
  }
}

@media screen and (max-width: 1300px) {
  .animate-rotateCircle-1 {
    top: 60px;
    left: 20px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 41.5%;
      left: 77%;
    }
  }

  .animate-rotateCircle-2 {
    top: 20px;
    left: 11px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45.5%;
      left: 94%;
    }
  }

  .animate-rotateCircle-4 {
    top: -50%;
    left: 45%;
  }

  @keyframes rotateCircle4-md {
    100% {
      top: 117%;
      left: -13%;
    }
  }
}

@media screen and (max-width: 1080px) {
  .animate-rotateCircle-1 {
    top: 90px;
    left: 20px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 41.5%;
      left: 77%;
    }
  }

  .animate-rotateCircle-2 {
    top: 45px;
    left: 11px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45.5%;
      left: 94%;
    }
  }

  .animate-rotateCircle-4 {
    top: -50%;
    left: 47%;
  }

  @keyframes rotateCircle4-md {
    100% {
      top: 110%;
      left: -15%;
    }
  }
}

@media screen and (max-width: 870px) {
  .animate-rotateCircle-1 {
    top: 7px;
    left: 20px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 41.5%;
      left: 85%;
    }
  }

  .animate-rotateCircle-2 {
    top: 8px;
    left: 11px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45.5%;
      left: 94%;
    }
  }

  .animate-rotateCircle-4 {
    top: -2%;
    left: 44%;
  }

  @keyframes rotateCircle4 {
    100% {
      top: 90%;
      left: -13%;
    }
  }
}
</style>
