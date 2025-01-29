<template>
  <div class="w-full md:w-4/5 flex flex-col gap-1 md:w-4/5 px-5 md:px-0">
    <p class="font-medium	leading-6 text-base"> {{title}}</p>
    <div class="w-full bg-white-300  h-40 border-dashed  rounded-lg p-4 border border-gray-1050 outline-none flex items-center justify-center" @click="uploadPdf">
      <div class="flex flex-col items-center justify-center " v-if="!file">
        <img :src="uploadIcon" >
        <p class="font-semibold	leading-10 text-base">Upload a file</p>
        <p class="text-sm font-semibold text-gray-1150 leading-9">Drag and drop files here</p>
      </div>
      <div class="flex flex-col items-center justify-center " v-else>
        <img :src="fileIcon" class="w-28 " >

      </div>
    </div>
    <p class="font-medium	text-sm leading-tight	 text-gray-1150">{{footerText}}</p>

  </div>
</template>
<script setup>
import uploadIcon from "../../images/upload.png"
import {onMounted, ref, toRef, watch} from "vue";
import fileIcon from "../../images/fileImg.jpg"

 const props= defineProps({
    accept:{
      type:String,
    },
    title:{
      type:String,
      required:true
    },
    footerText:{
      type:String,
    },

  file:{
      type:[null,File]
  }
  })

const emits=defineEmits(["clicked"])
function uploadPdf(){
   emits('clicked',props.title)
}



</script>
