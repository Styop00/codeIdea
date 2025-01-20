<template>
    <div class="w-full grid md:grid-cols-2 gap-y-11 lg:grid-cols-12 justify-center lg:justify-between md:justify-center lg:gap-y-12 mt-3 lg:gap-x-12  ">
      <div v-for="(item,index) in items" :class="[' lg:col-span-3 md:col-span-1  w-[3/12] ' ,
      (index-4)%7===0 ?' md:col-span-1 lg:col-span-6 lg:translate-x-1/4 translate-x-0 ':' lg:col-span-3 md:col-span-1',(index-6)%7===0?'lg:-translate-x-2/4':'',(index-5)%7===0?'lg:-translate-x-2/4':'',index%2===0?'lg:-translate-y-1/4 ' +
       'md:-translate-y-1/4 translate-y-0 ':'pl-20 lg:pl-0 md:pl-0']">
          <img :src="item" class="max-w-52">
      </div>
    </div>

</template>
<script setup>
import rect1 from "../../images/sergey.png"
import rect2 from "../../images/Rectangle 135 1@2x.png"
const items=[rect1,rect2,rect1,rect2,rect1,rect2,rect1,rect2,rect1,rect2,rect1]
</script>

<style lang="scss" scoped>
  .parent{
    img:nth-child(even){
      transform:translateY(20%);
    }
    img{
      max-width: 214px;
    }
  }
</style>
