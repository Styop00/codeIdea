<template>
    <li class="capitalize cursor-pointer md:text-3xl font-bold md:mt-5">
        {{item}}
    </li>
</template>

<script setup>
    const props = defineProps(['item']);
</script>