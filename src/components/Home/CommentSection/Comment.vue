<template>
    <div class="bg-white shadow-shadow1 p-8 md:p-10 w-300px md:w-full min-h-460px relative">
        <div>
            <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6853 16.857C16.4336 17.619 17.7972 18.7619 18.7762 20.2859C19.7552 21.8098 20.2448 23.6107 20.2448 25.6888C20.2448 28.6674 19.3007 31.0745 17.4126 32.9101C15.5245 34.7457 13.1119 35.6635 10.1748 35.6635C7.23775 35.6635 4.8077 34.7284 2.88462 32.8581C0.961529 30.9879 0 28.5981 0 25.6888C0 24.3034 0.174823 22.9181 0.524476 21.5327C0.874128 20.1473 1.64335 18.0693 2.83217 15.2985L8.91608 0.336426H19.3007L14.6853 16.857ZM39.4406 16.857C41.1888 17.619 42.5524 18.7619 43.5315 20.2859C44.5105 21.8098 45 23.6107 45 25.6888C45 28.6674 44.056 31.0745 42.1678 32.9101C40.2797 34.7457 37.8671 35.6635 34.9301 35.6635C31.993 35.6635 29.5629 34.7284 27.6399 32.8581C25.7168 30.9879 24.7552 28.5981 24.7552 25.6888C24.7552 24.3034 24.9301 22.9181 25.2797 21.5327C25.6294 20.1473 26.3986 18.0693 27.5874 15.2985L33.6713 0.336426H44.0559L39.4406 16.857Z" fill="#C4C4C4"/>
            </svg>
        </div>
        <div class="my-6 font-medium">
            <slot name="comment"/>
        </div>
        <div class="absolute bottom-10 left-10 right-10 items-center">
            <div class="float-left h-20 mr-4"> 
                <slot name="img"/>
            </div>
            <div class="">
                <p class="font-medium uppercase"> {{name}} </p>
                <p class="text-xs text-position-text-color"> {{position}} </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps(['name', 'position']);
</script>