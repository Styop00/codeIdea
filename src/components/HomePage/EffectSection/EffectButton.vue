<template>
    <button class="rounded-full border-1px border-gray-400 tracking-widest px-2 md:px-5 py-1 md:py-2 
                uppercase font-bold text-[7px] md:text-10px mr-px md:mr-3px">
        {{btn_text}}
    </button>
</template>

<script setup>
    defineProps(['btn_text']);
</script>