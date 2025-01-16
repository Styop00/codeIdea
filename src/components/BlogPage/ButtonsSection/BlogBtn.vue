<template>
    <button class="mt-3 border-2 rounded-10px px-3 text-gray-800 bg-white-70 shadow-ex-small"
    :class="{
        'text-white' : btn_text === 'All', 
        '!bg-gray-800' : btn_text === 'All',
        'mr-5': btn_text !== 'Other',
    }">
        {{ btn_text }}
    </button>
</template>

<script setup>
    defineProps(['btn_text']);
</script>