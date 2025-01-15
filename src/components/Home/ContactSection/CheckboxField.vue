<template>
    <div class="text-txt-color">
        <label>
            <input type="checkbox" class="rounded-full"> {{text}} 
            <slot />
        </label>
    </div>
</template>

<script setup>
    defineProps(['text']);
</script>