<template>
    <ul>
        <li class="capitalize cursor-pointer md:text-3xl font-bold md:mt-5" v-for="item in items">
            <a href="#"> {{item}} </a>
        </li>
    </ul>
</template>

<script setup>
    import {ref} from "vue"
    const items = ref(['home', 'portfolio', 'services', 'blog', 'jobs', 'about us', 'contacts']);
</script>