<template>
    <div class="px-8 md:px-14 md:pb-72 md:pt-40">
        <BlogTitle />
        <BlogButtons />
        <Articles />
        <Pagination />
    </div>
</template>

<script setup>
    import BlogTitle from "@/components/BlogPage/BlogTitle.vue"
    import BlogButtons from "@/components/BlogPage/ButtonsSection/BlogButtons.vue"
    import Articles from "@/components/BlogPage/ArticlesSection/Articles.vue"
    import Pagination from "@/components/BlogPage/PaginationSection/Pagination.vue"
</script>