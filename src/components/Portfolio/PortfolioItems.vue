<template>
  <div class=" lg:px-14 px-0  md:px-64  w-full flex flex-col lg:flex-row relative gap-x-4 gap-y-0 lg:gap-y-64 flex-wrap justify-between  lg:-translate-y-[10%]  " >
    <div  v-for="(item,index) in items" class=" lg:w-[40%] w-full  relative">
      <div :style="{ backgroundColor: item.color }" :class="[' flex justify-start lg:justify-center  items-center h-screen-700',
      index % 2===0?'transform -translate-y-0':'transform lg:-translate-y-[80%]']">
          <div :class="['lg:w-[55%] w-[75%] ml-7 lg:ml-0 absolute bottom-0 bottom-[4%]',
          index % 2===0?'lg:text-right text-left  lg:-translate-x-[53%]':'text-left  lg:translate-x-[50%]']">
            <p class="font-bold text-4xl leading-loose tracking-widest">{{item.title}}</p>
            <p class="font-normal text-base leading-7 tracking-wider	">{{item.about}}</p>
          </div>
      </div>

    </div>



  </div>




</template>
<script setup>
  const items=[
    {
      color:"#FF8BB2",
      title:"Veseli Carameli",
      about:"Corporate website development for Veseli\n" +
        "karameli, caramel sweets crafting company"
    },
    {
      color:"#A062CB",
      title:"Waddington's",
      about: "Cross-platform mobile app for Canadian\n" +
        "auction and appraisal company"
    },
    {
      color:"#C9C0FF",
      title:"W86",
      about: "Website development for real estate\n" +
        "development company project in Krems,\n" + "Austria",

    },
    {
      color:"#3BA8FF",
      title:"Template\n" +
        "Monster",
      about: "Website development for real estate\n" +
        "development company project in Krems,\n" + "Austria",

    },
  ]
</script>
<style scoped></style>
