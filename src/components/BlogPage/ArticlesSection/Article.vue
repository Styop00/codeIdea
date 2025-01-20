<template>
    <div class="shadow-small-10 p-2" :class="{'lg:hidden':article_index===2}">
        <div class="bg-gray-950 rounded h-32"></div>
        <div class="mb-6">
            <p class="text-sm text-gray-900 mt-3">31 December, 2024</p>
            <h4 class="text-gray-10 font-semibold my-4 leading-7 md:leading-8">Breaking the Mold: How AI is Redefining Excellence</h4>
            <p class="text-sm mb-3 leading-5 md:leading-6">Learn how AI sets a new standard for agency excellence by automating tasks, enhancing creativity, and driving...</p>
            <button @click="router.push({
                name: 'article', 
                params: {id: article_index},
            })" class="font-medium underline">Learn more</button>
        </div>
    </div>

    <Subscribe :class="{
        'hidden': article_index!=15,
        'md:hidden': article_index===15,
        'md:block' : article_index===1,
        'lg:hidden' : article_index===1,
        'lg:block': article_index===3
    }" />
</template>

<script setup>
    import Subscribe from "@/components/BlogPage/ArticlesSection/SubScribe/Subscribe.vue"
    import {useRouter} from "vue-router"

    const prop = defineProps(['article_index']);
    const emit = defineEmits(['goArticlePage']);

    const router = useRouter();
</script>