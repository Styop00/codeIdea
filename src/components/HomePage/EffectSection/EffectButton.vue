<template>
    <button class="rounded-full border-1px border-color1 tracking-widest px-2 md:px-5 py-2 
                uppercase font-bold text-10px mr-3px">
        {{btn_text}}
    </button>
</template>

<script setup>
    defineProps(['btn_text']);
</script>