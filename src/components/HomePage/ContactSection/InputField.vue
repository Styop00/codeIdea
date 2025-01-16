<template>
    <input type="text" class="border-b-1px w-full text-gray-10 mb-9" :placeholder='placeholder'/> 
</template>

<script setup>
    import {ref} from 'vue';
    const props = defineProps(['name']);
    let placeholder = ref(props.name);
</script>