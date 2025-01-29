<template>
    <button class="mx-3 w-12 h-12 rounded-full"> 
        {{ page_number }} 
    </button>
</template>

<script setup>
    defineProps(['page_number']);
</script>