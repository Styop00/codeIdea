<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between mb-10 md:mb-24 gap-12 mt-7 services-section lx">
    <div class="w-full md:w-2/3">
      <Title title="services" :description="serviceTitle">
        <p>{{ text }}</p>
      </Title>

      <Button btnText="explore" class="bg-white border-1px border-black
        overflow-hidden relative diagonalAnimation"/>
    </div>

    <div :class="{'md:order-first' : i%2===0}" class="w-full md:w-1/3 relative">
      <img :src=image
           alt="Service image"
           class="xl:w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mx-auto"
      >

      <img
        src="@/assets/img/services/circle.svg"
        alt="circle"
        class="absolute rotate-180 w-[15%] circle"
        :class="{
          'top-[5%] left-[7%] md:top-[21%] md:left-[8%] xl:top-[-13%] xl:left-[8%] animate-rotateCircle-1 md:animate-rotateCircle-1-md xl:animate-rotateCircle-1-xl' : i===0,
          'top-[50%] left-[2%] md:top-[13%] md:left-[3%] xl:top-[-34%] xl:left-[8%] animate-rotateCircle-2' : i===1,
          'xl:-top-[50%] md:-top-[10%] md:left-[9%] left-[8%] animate-rotateCircle-3' : i===2,
          '-top-[10%] left-[45%] md:-top-[90%] md:left-[45%] animate-rotateCircle-4 md:animate-rotateCircle-4-md' : i===3,
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

.services-section {
  margin-bottom: 350px;
}

@keyframes rotateCircle2 {
  100% {
    top: 40%;
    left: 90%;
  }
}

@keyframes rotateCircle3 {
  100% {
    top: 120%;
    left: 9%;
  }
}

@keyframes rotateCircle4-md {
  100% {
    top: 150%;
    left: -12%;
  }
}

@keyframes rotateCircle1-xl {
  100% {
    top: 36%;
    left: 81%;
  }
}

@media screen and (max-width: 1535px) {
  .animate-rotateCircle-1 {
    top: -1px;
    left: 10px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 41%;
      left: 84%;
    }
  }

  .animate-rotateCircle-2 {
    top: -60px;
    left: 10px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 41%;
      left: 90%;
    }
  }

  .animate-rotateCircle-3 {
    top: -50px;
    left: 33px;
  }

  @keyframes rotateCircle3 {
    100% {
      top: 100%;
      left: 9%;
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
  .services-section {
    margin-bottom: 100px;
  }

  .animate-rotateCircle-1 {
    top: 65px;
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

  .animate-rotateCircle-3 {
    top: -30px;
    left: 33px;
  }

  @keyframes rotateCircle3 {
    100% {
      top: 90%;
      left: 9%;
    }
  }

  .animate-rotateCircle-4 {
    top: -33%;
    left: 45%;
  }

  @keyframes rotateCircle4-md {
    100% {
      top: 100%;
      left: -3%;
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
      left: 90%;
    }
  }

  .animate-rotateCircle-4 {
    top: -33%;
    left: 45%;
  }

  @keyframes rotateCircle4-md {
    100% {
      top: 104%;
      left: -9%;
    }
  }
}

@media screen and (max-width: 870px) {
  .circle {
    width: unset;
  }

  .animate-rotateCircle-1 {
    top: 25px;
    left: 145px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 41.5%;
      left: 85%;
    }
  }

  @keyframes rotateCircle1 {
    100% {
      top: 44%;
      left: 71%;
    }
  }

  .animate-rotateCircle-2 {
    top: 5px;
    left: 145px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45%;
      left: 72%;
    }
  }

  .animate-rotateCircle-3 {
    top: -15px;
    left: 160px;
  }

  @keyframes rotateCircle3 {
    100% {
      top: 85%;
      left: 27%;
    }
  }

  .animate-rotateCircle-4 {
    top: -50px;
    left: 290px;
  }

  @keyframes rotateCircle4 {
    100% {
      top: 80%;
      left: 26%;
    }
  }
}

@media screen and (max-width: 650px) {
  .circle {
    width: unset;
  }

  .animate-rotateCircle-1 {
    top: 30px;
    left: 100px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 45%;
      left: 78%;
    }
  }

  @keyframes rotateCircle1 {
    100% {
      top: 44%;
      left: 77%;
    }
  }

  .animate-rotateCircle-2 {
    top: -10px;
    left: 50px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45%;
      left: 79%;
    }
  }

  .animate-rotateCircle-3 {
    top: -15px;
    left: 90px;
  }

  @keyframes rotateCircle3 {
    100% {
      top: 85%;
      left: 20%;
    }
  }

  .animate-rotateCircle-4 {
    top: -5px;
    left: 200px;
  }

  @keyframes rotateCircle4 {
    100% {
      top: 80%;
      left: 18%;
    }
  }
}

@media screen and (max-width: 450px) {
  .circle {
    width: unset;
  }

  .animate-rotateCircle-1 {
    top: 30px;
    left: 60px;
  }

  @keyframes rotateCircle1-xl {
    100% {
      top: 43%;
      left: 82%;
    }
  }

  @keyframes rotateCircle1 {
    100% {
      top: 44%;
      left: 87%;
    }
  }

  .animate-rotateCircle-2 {
    top: 10px;
    left: 30px;
  }

  @keyframes rotateCircle2 {
    100% {
      top: 45%;
      left: 90%;
    }
  }

  .animate-rotateCircle-3 {
    top: 12px;
    left: 35px;
  }

  @keyframes rotateCircle3 {
    100% {
      top: 85%;
      left: 9%;
    }
  }

  .animate-rotateCircle-4 {
    top: -4px;
    left: 140px;
  }

  @keyframes rotateCircle4 {
    100% {
      top: 85%;
      left: 5%;
    }
  }
}

</style>
