<template>
    <button class="text-xs text-center uppercase tracking-widest font-bold 
    w-178px h-40px bg-gray-600 rounded-10px mt-5">
        {{btn_text}}
    </button>
</template>

<script setup>
    defineProps(['btn_text']);
</script>