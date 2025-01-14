<template>
  <div class="py-28 px-14 w-full bg-white flex flex-col gap-16 justify-center items-center">
    <div class="flex w-full items items-center">
      <div class="lg:w-3/6 md:w-0 w-0"></div>
      <div class="flex w-full justify-between  items-center">
        <div class="font-bold lg:text-5xl md:text-2xl text-xl md:text-3xl md:text-center  lg:text-center" >Technologies we work in</div>
        <!-- <div  :class="active?'rotate-180':'rotate-0'" class="p-2 rounded-full w-10 h-10  cursor-pointer flex items-center  justify-center  bg-white shadow-md shadow-gray-150 " @click="active=!active">
           <img :src="arrow" >
         </div> -->
      </div>
    </div>
    <div :class="active?'flex flex-wrap':'hidden'" class=" lg:gap-16 gap-7  md:gap-14">
      <p v-for="logo in logos">
        <img :src="logo" class=" transition-ease duration-300 grayscale	 hover:grayscale-0 " v-if="logo!==iosLogo" >
        <img :src="logo" class=" transition-ease duration-500 invert	 hover:invert-0" v-else>
      </p>

    </div>
  </div>
</template>
<script setup>
import jsLogo from "../../images/js.png"
import reactLogo from "../../images/react.png"
import angularLogo from "../../images/angular.png"
import iconicLogo from "../../images/iconic.png"
import vueLogo from "../../images/vue.png"
import nuxtLogo from "../../images/nuxt.png"
import htmlLogo from "../../images/html.png"
import cssLogo from "../../images/css.png"
import reduxLogo from "../../images/redux.png"
import laravelLogo from "../../images/laravel.png"
import nodeLogo from "../../images/node.png"
import javaLogo from "../../images/java.png"
import pyLogo from "../../images/py.png"
import djLogo from "../../images/dj.png"
import iosLogo from "../../images/ios.png"
import androidLogo from "../../images/android.png"
import postgrLogo from "../../images/postgre.png"
import sqlitLogo from "../../images/sqlite.png"
import mongoLogo from "../../images/mongo.png"
import redisLogo from "../../images/redis.png"
import colLogo from "../../images/col.png"
import awsLogo from "../../images/aws.png"
import googleLogo from "../../images/google.png"
import herokuLogo from "../../images/heroku.png"
import firebasLogo from "../../images/firebase.png"
import dockerLogo from "../../images/docker.png"
import kuberLogo from "../../images/kuber.png"
import arrow from '../../images/arrow.png'
import {ref} from "vue";


const logos = [
  jsLogo, reactLogo, angularLogo, iconicLogo, vueLogo, nuxtLogo, htmlLogo, cssLogo, reduxLogo, laravelLogo,
  nodeLogo, javaLogo, pyLogo, djLogo, iosLogo, androidLogo, postgrLogo, sqlitLogo, mongoLogo, redisLogo,
  colLogo, awsLogo, googleLogo, herokuLogo, firebasLogo, dockerLogo, kuberLogo
]
const active=ref(true)


</script>
