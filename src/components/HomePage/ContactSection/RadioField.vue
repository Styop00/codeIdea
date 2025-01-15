<template>
    <div class="text-gray-10">
        <label>
            <input type="radio"> {{text}} 
            <slot />
        </label>
    </div>
</template>

<script setup>
    defineProps(['text']);
</script>