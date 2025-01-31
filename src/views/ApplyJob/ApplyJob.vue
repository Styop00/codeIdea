<template>
  <div class="flex flex-col divContainer items-center md:items-start gap-16">
    <div class="font-bold text-2xl md:text-5xl leading-10 pt-5 md:pt-16 tracking-wider	">Job Application Form</div>
    <div class="flex flex-col justify-center items-center  gap-9 pb-12 ">
        <div class="flex flex-col md:flex-row flex-wrap gap-9 md:gap-16 justify-between w-full md:w-4/5 px-5 md:px-0" >
          <Input v-model="formData.fullName"  title="Full Name" type="text" placeholder="Maria Anderson" />
          <Phone v-model="formData.phone" title="Phone"/>
          <Input title="Email" v-model="formData.email" type="email" placeholder="ex: myname@example.com"/>
          <Select v-model="formData.position" class="relative z-12"/>
        </div>
        <Calendar v-model="formData.date" class="relative z-10"/>
        <Textarea v-model="formData.desc"/>
      <UploadCv @clicked="changeFile" :file="formData.file1" @delete="deleteFile" title="Upload Resume" footerText=" "/>
      <input type="file" @change="changePdf" accept="application/pdf"  class="hidden" ref="inputRef" >

      <UploadCv @clicked="changeFile" :file="formData.file2" title="Any other document to upload" @delete="deleteFile" footerText="You can share certificates, diplomas, etc."/>
      <input type="file" @change="changePdf2" multiple="true" class="hidden" ref="inputRef2" >

      <Button btnText="Apply" @click="sendValue"/>
    </div>

  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import {reactive, ref, watch} from "vue";
import UploadCv from "./UploadCv.vue";
import Input from "../../components/Ui/Input.vue";
import Button from "../../components/Button.vue";
import Textarea from "../../components/Ui/Textarea.vue";
import Calendar from "../../components/Ui/Calendar.vue";
import Select from "../../components/Ui/Select.vue";
import Phone from "../../components/Ui/Phone.vue";
import moment from "moment";
const route=useRoute()
const inputRef=ref(null)
const inputRef2=ref(null)
function changePdf(){
 const file= inputRef.value.files[0]
  formData.file1[0]=file
}
function deleteFile(data,title){
  if(title==="Upload Resume"){
    formData.file1=[]
  }
  else {
    formData.file2=Array.from(formData.file2).filter((item,index)=>{
      return index!==data
    })
  }
}
function changePdf2(){
  const file=Array.from(inputRef2.value.files)
  formData.file2.push(...file)
}
function changeFile(data){
  if(data==="Upload Resume"){
    inputRef.value.click()
  }
  else if (data==="Any other document to upload"){
    inputRef2.value.click()

  }
  else {
    console.log("ok")
  }
}
const formData=reactive({
  fullName:"",
  phone:"",
  email:"",
  position:"",
  date: "",
  desc:"",
  file1:[],
  file2:[]

})

function sendValue(){
  console.log(formData.file1)
  console.log('file2' ,formData.file2)
}

</script>
<style scoped>



</style>
