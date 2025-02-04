<template>
  <div class="w-full md:w-4/5 flex flex-col gap-1 md:w-4/5 p-5 md:px-0">
    <p class="font-medium	leading-6 text-base"> {{ title }}</p>
    <div
      class="w-full bg-white-300  h-40 border-dashed  rounded-lg p-14 border border-gray-1050 outline-none flex items-center justify-center"
      @click="uploadPdf">
      <div class="flex flex-col items-center justify-center " v-if="!hid">
        <img :src="uploadIcon">
        <p class="font-semibold	leading-10 text-base">Upload a file</p>
        <p class="text-sm font-semibold text-gray-1150 leading-9">Drag and drop files here</p>
      </div>
      <div class="flex flex-col items-center  justify-center " v-for="(item,index) in file" v-else>
        <div class="flex flex-col mx-2 justify-center items-center rounded-lg p-3  relative  z-1">
          <img :src="ifImage(item)" class=" h-24 rounded-lg ">
          <div
            class=" w-full  h-full absolute left-0 top-0  z-999 rounded-lg flex justify-center items-center  group  ">
            <img :src="garIcon" class="w-9 h-auto cursor-pointer hidden group-hover:flex"
                 @click="itemValue($event,index)" alt="#">
          </div>
        </div>
      </div>
    </div>
    <p class="font-medium	text-sm leading-tight	 text-gray-1150">{{ footerText }}</p>

  </div>
</template>
<script setup>
import uploadIcon from "../../images/upload.png"
import {computed, onMounted, ref, toRef, watch} from "vue";
import fileIcon from "../../images/fileImg.jpg"
import pdfIcon from "../../images/pdfIcon.jpg"
import garIcon from "../../images/gar.png"

const props = defineProps({
  accept: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  footerText: {
    type: String,
  },

  file: {
    type: [Array, File]
  }
})
const emits = defineEmits(["clicked", 'delete'])

const hid = computed(() => {
  if (props.file.length > 0) {
    return true
  } else return false
})

function itemValue(event, id) {
  event.stopPropagation();
  emits("delete", id, props.title)
}

function ifImage(item) {
  if (props.title === "Upload Resume") {
    return pdfIcon
  } else if (item.type.startsWith('image/')) {
    return URL.createObjectURL(item)
  }
  return fileIcon
}


function uploadPdf() {
  emits('clicked', props.title)
}

</script>
