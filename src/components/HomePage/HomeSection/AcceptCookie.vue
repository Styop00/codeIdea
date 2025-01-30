<template>
    <div class="hidden md:block w-full bg-white grid grid-rows-1 grid-flow-col gap-4 px-16 pt-2 pb-4">
        <div>
            <p class="font-medium mt-4">We use cookies to improve user experience, analyze site usage, and assist in marketing efforts. For 
            details, see our <a href="#" class="underline-offset-1">privacy policy</a> and adjust your preferences.</p>
        </div>
        <div>
            <Button btnText="Accept Cookies"/>
            <Button btnText="Decline" class="bg-white border-1px border-gray-600 ml-6"/>
        </div>
    </div>
</template>

<script setup>
    import Button from "@/components/Button.vue";
</script>