<template>
    <input type="text" class="border-b-1px w-full placeholder:text-txt-color mb-9" :placeholder='placeholder'/> 
</template>

<script setup>
    import {ref} from 'vue';
    const props = defineProps(['name']);
    let placeholder = ref(props.name);
</script>