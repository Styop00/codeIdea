<template>
    <div class="relative">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Article v-for="i in 15" :article_index=i />
        </div>
    </div>
</template>

<script setup>
    import Article from "@/components/BlogPage/ArticlesSection/Article.vue"
</script>