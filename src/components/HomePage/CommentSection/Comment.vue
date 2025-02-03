<template>
    <div class="bg-white shadow-medium p-8 md:p-10 w-300px md:w-full min-h-460px relative">
        <div>
            <img src="@/assets/img/comments/icon.svg">
        </div>
        <div class="my-6 font-medium">
            <slot name="comment"/>
        </div>
        <div class="absolute bottom-10 left-10 right-10">
            <div class="grid grid-rows-1 grid-flow-col gap-2 items-center">
                <div>
                    <slot name="img" />
                </div>
                <div class="">
                    <p class="font-medium uppercase"> {{name}} </p>
                    <p class="text-xs text-black-10"> {{position}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps(['name', 'position']);
</script>