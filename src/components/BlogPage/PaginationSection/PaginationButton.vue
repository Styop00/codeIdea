<template>
    <button class="mr-5 w-12 h-12 rounded-full" :class="{
        'bg-black':page_number===2,
        'text-white':page_number===2,
    }"> 
        {{ page_number }} 
    </button>
</template>

<script setup>
    defineProps(['page_number']);
</script>