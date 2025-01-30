<template>
    <div class="mb-14">
        <BlogBtn :btnText=button v-for="button in buttons"/>
    </div>
</template>

<script setup>
    import BlogBtn from "@/components/BlogPage/ButtonsSection/BlogBtn.vue"

    import { ref } from "vue";

    const buttons = ref(['All', 'Business', 'E-commerce', 'Guides', 'Inside look', 
    'Lifehacks', 'News', 'SaaS', 'Technology', 'Other']);
</script>