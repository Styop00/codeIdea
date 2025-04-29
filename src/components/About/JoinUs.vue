<template>
  <div class="divContainer flex flex-col items-start md:items-start gap-10 md:gap-36 pb-20">
    <div
      class="w-full flex gap-7 justify-center pb-22 relative items-center md:items-start md:gap-32  flex-col md:relative mb-0 md:mb-32">
      <div class="w-full md:w-3/5  ">
        <img :src="teamPhoto" class="w-full" alt="#">
      </div>
      <div class="w-11/12 md:w-2/5 md:absolute top-1/3 right-1/3 z-10">
        <img :src="teamPhoto2" class="w-full" alt="#">
      </div>
      <div class="w-full md:w-2/5">
        <img :src="teamPhoto2" class="w-full " alt="#">
      </div>
    </div>
    <Title title="JOBS" description="Be a part of our team">
      <p class="w-full lg:w-90%">We transform the way IT products are developed, creating a collaborative culture
        where teams and founders shape the success of digital products together.</p>
    </Title>
    <Button btnText="JOBS" class="w-full md:w-[180px] bg-white border-1px border-black hover:bg-black hover:text-white duration-500" @click="goCareersPage" />

  </div>
</template>

<script setup>
import teamPhoto from "../../images/team.jpg"
import teamPhoto2 from "../../images/team2.jpg"
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";

const goCareersPage = () => {
  window.location.href = '/careers';
};

</script>

<style scoped>
@media (min-width: 870px) {
  .divContainer {
    gap: unset;
  }
}
</style>
