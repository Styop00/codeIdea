<template>
  <Home/>
  <div>
    <Services class="divContainer"/>
    <Effects class="divContainer"/>
    <Awards/>
    <Comments class="divContainer"/>
    <Questions class="divContainer"/>
    <ContactUs class="divContainer"/>
  </div>
</template>

<script setup>
import Home from "@/components/HomePage/HomeSection/Home.vue"
import Services from "@/components/HomePage/ServiceSection/Services.vue"
import Effects from "@/components/HomePage/EffectSection/Effects.vue"
import Awards from "@/components/HomePage/AwardsSection/Awards.vue"
import Comments from "@/components/HomePage/CommentSection/Comments.vue"
import Questions from "@/components/HomePage/QuestionSection/Questions.vue"
import ContactUs from "@/components/Contacts/ContactUs.vue"
</script>
