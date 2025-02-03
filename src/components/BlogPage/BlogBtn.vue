<template>
    <button class="mt-3 rounded-10px px-3 text-gray-800 bg-white-70 shadow-ex-small"
    :class="{
        'mr-5': btnText !== 'Other',
    }">
        {{ btnText }}
    </button>
</template>

<script setup>
    defineProps(['btnText']);
</script>