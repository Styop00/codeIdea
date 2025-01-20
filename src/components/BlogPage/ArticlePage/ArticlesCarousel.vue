<template>
    <Carousel v-bind="config" class="mt-6 !text-left">
        <Slide v-for="i in 3" class="">
            <slot/>
        </Slide>
    </Carousel>
</template>

<script setup>
    import {Carousel, Slide} from "vue3-carousel"

    const config = {
        itemsToShow: 1.07,
        gap: 9,
        wrapAround: true,
        autoplay: 2000,
        pauseAutoplayOnHover: true,
    }
</script>