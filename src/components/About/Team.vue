<template>
    <div class="divContainer  px-5 grid md:grid-cols-2 gap-y-11 lg:grid-cols-12 justify-center lg:justify-between md:justify-center lg:gap-y-24 mt-3 lg:gap-x-12  ">
      <div v-for="(item,index) in items" :class="[' lg:col-span-3 md:col-span-1  w-[3/12]  ' ,
      (index-4)%7===0 ?' md:col-span-1 lg:col-span-6 lg:translate-x-1/4 translate-x-0 ':' lg:col-span-3 md:col-span-1',(index-6)%7===0?'lg:-translate-x-2/4':'',(index-5)%7===0?'lg:-translate-x-2/4':'',index%2===0?'lg:-translate-y-1/4 ' +
       'md:-translate-y-1/4 translate-y-0 ':'']">
        <div class="max-w-52 relative">
          <img :src="item.avatar" class="full  ">
          <div class="w-3/5 py-2 h- pl-2.5  pr-10 bg-gray-600 flex flex-col absolute right-0 z-10 top-[80%] position" >
            <p class="font-bold text-lg leading-5 tracking-wide	">{{item.name}}</p>
            <p class="uppercase font-normal text-sm tracking-wide	leading-5">{{item.position}}</p>
          </div>

        </div>
      </div>
    </div>

</template>
<script setup>
import rect1 from "../../images/sergey.png"
import rect2 from "../../images/Rectangle 135 1@2x.png"
const items=[
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
  {
    avatar:rect1,
    position:"CEO",
    name:"Sergey"
  },
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
  {
    avatar:rect1,
    position:"CEO",
    name:"Sergey"
  },
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
  {
    avatar:rect1,
    position:"CEO",
    name:"Sergey"
  },
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
  {
    avatar:rect1,
    position:"CEO",
    name:"Sergey"
  },
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
  {
    avatar:rect1,
    position:"CEO",
    name:"Sergey"
  },
  {
    avatar:rect2,
    position:"CEO",
    name:"Gevorg"
  },
]
</script>
<style lang="scss" scoped>
.position{
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-top: 10px solid #C4C4C4;
  }
}
</style>


