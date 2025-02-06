<template>
  <div class="flex flex-col divContainer items-center md:items-start gap-8 md:gap-16">
    <div class="font-bold text-2xl md:text-5xl leading-10 md:pt-16 tracking-wider	">Job Application Form</div>
    <div class="flex flex-col justify-center items-center gap-9 pb-12 ">
      <div class="flex flex-col md:flex-row flex-wrap gap-9 md:gap-16 justify-between w-full md:w-4/5 px-5 md:px-0">
        <Input v-model="formData.fullName" title="Full Name" type="text" placeholder="Maria Anderson"/>
        <Phone v-model="formData.phone" title="Phone"/>
        <Input title="Email" v-model="formData.email" type="email" placeholder="ex: myname@example.com"/>
        <Select v-model="formData.position" class="relative z-12"/>
      </div>
      <Calendar v-model="formData.date" class="relative z-10"/>
      <Textarea v-model="formData.desc"/>
      <UploadCv @clicked="changeFile" :file="formData.cv_applicant" @delete="deleteFile" title="Upload Resume"
                footerText=" "/>
      <input type="file" @change="changePdf" accept="application/pdf" class="hidden" ref="inputRef">
      <UploadCv @clicked="changeFile" :file="formData.additional_files" title="Any other document to upload"
                @delete="deleteFile"
                footerText="You can share certificates, diplomas, etc."/>
      <input type="file" @change="changePdf2" multiple="multiple" class="hidden" ref="inputRef2">
      <Button btnText="Apply" @click="sendValue"/>
    </div>

  </div>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import {reactive, ref, watch} from "vue";
import UploadCv from "./UploadCv.vue";
import Input from "../../components/Ui/Input.vue";
import Button from "../../components/Button.vue";
import Textarea from "../../components/Ui/Textarea.vue";
import Calendar from "../../components/Ui/Calendar.vue";
import Select from "../../components/Ui/Select.vue";
import Phone from "../../components/Ui/Phone.vue";
import moment from "moment";
import {$axios} from "../../plugins/axios";

const route = useRoute()
const router = useRouter()
const inputRef = ref(null)
const inputRef2 = ref(null)

function changePdf() {
  const file = inputRef.value.files[0]
  formData.cv_applicant[0] = file
}

function deleteFile(data, title) {
  if (title === "Upload Resume") {
    formData.cv_applicant = []
  } else {
    formData.additional_files = Array.from(formData.additional_files).filter((item, index) => {
      return index !== data
    })
  }
}

function changePdf2() {
  const file = Array.from(inputRef2.value.files)
  formData.additional_files.push(...file)
}

function changeFile(data) {
  if (data === "Upload Resume") {
    inputRef.value.click()
  } else if (data === "Any other document to upload") {
    inputRef2.value.click()

  } else {
    console.log("ok")
  }
}

const formData = reactive({
  fullName: "",
  phone: "",
  email: "",
  position: "",
  date: "",
  desc: "",
  cv_applicant: [],
  additional_files: []

})

async function sendValue() {
  try {
    const data = new FormData()
    data.append("fullname", formData.fullName)
    data.append("phone_number", formData.phone)
    data.append("email", formData.email)
    data.append("applied_position", formData.position)
    data.append('applied_date', formData.date)
    data.append('about_applicant', formData.desc)
    data.append("cv_applicant", formData.cv_applicant[0])
    if (formData.additional_files.length > 0) {
      formData.additional_files.forEach((file, index) => {
        data.append(`additional_files[${index}]`, file);
      });
    }
    const response = await $axios.post(`jobs/apply/${route.params.id}`, data,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    await router.push("/")
  } catch (error) {
    console.log(error)
  }
}

</script>
<style scoped>


</style>
