<template>
  <div class="mx-auto 2xl:w-1400px xl:w-1200px lg:w-1000px md:w-800px sm:w-600px w-400px
  md:pb-72 md:pt-40">
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