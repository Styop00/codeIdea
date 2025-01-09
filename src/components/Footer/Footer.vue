<template>
  <div class="bg-[#000000] w-full parent py-[40px] mt-[15rem] px-[60px] flex flex-col justify-between  ">
    <div>
      <FooterItems/>
    </div>
    <div class="flex gap-[28px] mt-[197.3px] mt-[0] logos  items-center">
      <div class="flex items-center justify-center py-[12px] px-[16px]  rounded-[50%] border-[1px] border-[#FFFFFF]/25">
        <img :src="fb" class="max-w-[7px]">
      </div>
      <div class="p-[13px]  rounded-[50%] border-[1px] border-[#FFFFFF]/25">
        <img :src="ld" class="max-w-[14px] flex items-center justify-center">
      </div>
      <div class="p-[14px]  rounded-[50%] border-[1px] border-[#FFFFFF]/25">
        <img :src="tw" class="max-w-[13px] h-[13px]">

      </div>
    </div>

    <div class="flex  year gap-[28px] mt-[102px]">
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
