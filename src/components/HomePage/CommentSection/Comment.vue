<style>
.feedbackCard:hover .feedbackImg > div {
  visibility: hidden;
}

.feedbackCard:hover .feedbackIcon > img {
  filter: invert(100%);
}
</style>

<template>
  <div class="bg-white shadow-medium p-8 md:p-10 w-300px md:w-full min-h-460px relative feedbackCard cursor-pointer">
    <div class="feedbackIcon">
      <img src="@/assets/img/comments/apostrophe.svg" alt="#">
    </div>
    <div class="my-6 font-medium">
      <slot name="comment"/>
    </div>
    <div class="absolute bottom-10 left-10 right-10">
      <div class="grid grid-rows-1 grid-flow-col gap-2 items-center">
        <div class="relative overflow-hidden w-16 rounded-full feedbackImg">
          <div v-html="picture" class="zoomed-img"></div>
          <div class="visible w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.2)]"></div>
        </div>
        <div class="">
          <p class="font-medium uppercase"> {{ name }} </p>
          <p class="text-xs text-black-10"> {{ position }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['name', 'position', 'picture']);
</script>

<style scoped>
.feedbackImg {
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}

.feedbackImg .zoomed-img {
  width: 120%;
  height: 120%;
  object-fit: cover;
  transform: translate(-10%, -10%);
  border-radius: 9999px;
  display: block;
}
</style>
