<template>
  <div class="bg-black w-full parent py-10 mt-14 px-14 flex flex-col justify-between  ">
    <div>
      <FooterItems/>
    </div>
    <div class="flex gap-7 mt-52 mt-0 logos  items-center">
      <div class="flex items-center justify-center py-3 px-4  rounded-full border-2 border-white/25">
        <img :src="fb" class="max-w-2">
      </div>
      <div class="p-3  rounded-full border-2 border-white/25">
        <img :src="ld" class="max-w-3 flex items-center justify-center">
      </div>
      <div class="p-3.5  rounded-full border-2 border-white/25">
        <img :src="tw" class="max-w-3 h-3">

      </div>
    </div>

    <div class="flex  year gap-7 mt-28">
      <span class="text-[#28282800]">
        ©{{new Date().getFullYear()}}. All Rights Reserved.
      </span>
      <span>
        Privacy Policy
      </span>
      <span>
        Terms of  service
      </span>
    </div>
  </div>
</template>
<script setup>



import FooterItems from "./Services/FooterItems.vue";
import fb from "../../images/fb.png"
import ld from "../../images/ld.png"
import tw from "../../images/Twitter.png"
</script>
<style scoped>
span{
  font-size: 14px;
  color: #B3B3B3;
  font-weight: 400;
  line-height: 14px;
}
@media (max-width: 600px) {
  .year{
    flex-direction: column-reverse;
    gap:10px
  }
  .logos{
    gap:2px;
    margin-top: 4rem;
  }


}
@media (max-width: 350px){
  .parent{
    padding-inline: 10px;
  }

}
</style>
