<template>
    <button class="mx-3 w-12 h-12 rounded-full"> 
        {{ pageNumber }} 
    </button>
</template>

<script setup>
    defineProps(['pageNumber']);
</script>