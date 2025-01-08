<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'

import {ref} from "vue";
let visible = ref(false);
let visible_content = ref(true);

function open_menu() {
  visible_content.value = !visible_content.value;
  visible.value = !visible.value;
}
</script>

<template>
  <button @click="open_menu" class="absolute right-5 top-12 border-2" v-if="visible_content">Open</button>
  
  <Transition>
    <Sidebar v-if="visible">
      <button @click="open_menu">
        <fa :icon="['fas', 'xmark']" class="text-xl cursor-pointer" />
      </button>
    </Sidebar>
  </Transition>


  <header v-if="visible_content">
    aaaa
  </header>
  

  <!-- <RouterView /> -->
</template>

<style scoped>

.v-enter-active {
  transition: opacity 0.5s;
}

.v-leave-active {
  transition: 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
