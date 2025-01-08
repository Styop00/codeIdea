<template>
    <ul>
        <li class="capitalize cursor-pointer text-[32px] font-bold leading-[60px]" v-for="item in items">
            <a href="#"> {{item}} </a>
        </li>
    </ul>
</template>

<script setup>
    import {ref} from "vue"
    const items = ref(['home', 'portfolio', 'services', 'blog', 'jobs', 'about us', 'contacts']);
</script>