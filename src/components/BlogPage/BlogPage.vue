<template>
  <div class="div_container md:pb-72 pt-5 md:pt-40 px-5 sm:px-0">
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