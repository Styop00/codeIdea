<template>
  <div class="div_container md:pb-72 pt-5 md:pt-40 px-5 sm:px-0">
        <!-- <router-view></router-view> -->
        <!-- <div v-if="blog_page"> -->
        <div>
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

    // import {ref} from "vue"

    // let blog_page = ref(false);

</script>