<template>
    <h3 class="inline text-2xl font-semibold"> {{ title }} </h3>
    <div class="mt-5 mb-6 md:mb-14 md:text-xl leading-8 md:leading-10"> 
        <slot /> 
    </div>
    <div class="bg-gray-100 mx-auto w-full md:w-3/4 h-72"></div>
</template>

<script setup>
    defineProps(['title']);
</script>