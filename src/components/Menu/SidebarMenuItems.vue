<template>
  <ul>
    <MenuItem item="home" @click="router.push({name: 'home'}); close_sidebar()"/>
    <MenuItem item="portfolio" @click="router.push({name: 'portfolio'}); close_sidebar()"/>
    <MenuItem item="services" @click="router.push({name: 'services'}); close_sidebar()"/>
    <MenuItem item="blog" @click="router.push({name: 'blog'}); close_sidebar()"/>
    <MenuItem item="careers" @click="router.push({name: 'careers'}); close_sidebar()"/>
    <MenuItem item="about us" @click="router.push({name: 'about'}); close_sidebar()"/>
    <MenuItem item="contacts" @click="router.push({name: 'contact'}); close_sidebar()"/>
  </ul>
</template>

<script setup>
import MenuItem from "@/components/Menu/MenuItem.vue"

import {ref} from "vue"
import {useRouter} from "vue-router"
import {useDataStore} from "@/store/dataStore.js";

defineProps(['show_content']);

const router = useRouter();
const dataStore = useDataStore();

function close_sidebar() {
  dataStore.visible = !dataStore.visible;
  dataStore.visible_content = !dataStore.visible_content;
}
</script>
