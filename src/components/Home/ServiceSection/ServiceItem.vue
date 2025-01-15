<template>
    <div class="md:w-3/4 lg:w-3/5 mt-14">
        <slot/>
        <Button btn_text="explore"/>
        <div class="md:hidden w-full h-48 bg-div-background-color mt-8"></div>
    </div>
</template>

<script setup>
    import Button from "@/components/Home/Button.vue"
</script>