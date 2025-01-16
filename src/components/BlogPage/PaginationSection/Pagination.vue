<template>
    <div class="text-center mt-8">
        <PaginationButton v-for="i in 4" :page_number='i' />
        <img src="@/assets/img/right_arrow.svg" alt="Right arrow" class="inline h-3 cursor-pointer">
    </div>
</template>

<script setup>
    import PaginationButton from "@/components/BlogPage/PaginationSection/PaginationButton.vue"
</script>