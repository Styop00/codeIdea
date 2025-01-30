<template>
    <button class="mt-3 rounded-10px px-3 text-gray-800 bg-white-70 shadow-ex-small"
    :class="{
        'text-white' : btnText === 'All', 
        '!bg-gray-800' : btnText === 'All',
        'mr-5': btnText !== 'Other',
    }">
        {{ btnText }}
    </button>
</template>

<script setup>
    defineProps(['btnText']);
</script>