<template>
  <div class="w-full md:bg-gradient-to-r from-gray-200 to-gray-300 md:pb-72 pt-5 md:pt-40 px-5 sm:px-0">
        <div class="div_container">
            <BlogTitle />
            <BlogButtons />
            <Articles />
            <Pagination />
        </div>
    </div>
</template>

<script setup>
    import BlogTitle from "@/components/BlogPage/BlogTitle.vue"
    import BlogButtons from "@/components/BlogPage/ButtonsSection/BlogButtons.vue"
    import Articles from "@/components/BlogPage/ArticlesSection/Articles.vue"
    import Pagination from "@/components/BlogPage/PaginationSection/Pagination.vue"

</script>
