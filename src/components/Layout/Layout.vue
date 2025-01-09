<template>
  <div class="w-full p-0 flex flex-col justify-between gap-[3rem]" >
    <div class=" w-full bg-[#ffff] z-5 pt-0 h-[104px] max-h-[104px] menu fixed">
      <Header/>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import Header from "../Header/Header.vue"
import Footer from "../Footer/Footer.vue";
</script>
<style  scoped>
  @media (max-width: 600px) {
    .menu{
      height: 80px;
    }
  }

</style>
