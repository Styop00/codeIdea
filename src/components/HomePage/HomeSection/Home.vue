<template>
    <section id="home" class="md:bg-white-40 relative">
        <div class="mx-auto 2xl:w-1400px xl:w-1200px lg:w-1000px md:w-800px sm:w-600px w-400px
        flex flex-wrap md:flex-nowrap justify-between pt-28 md:py-40">
            <div class="text-3xl md:text-4xl font-bold sm:mt-28 lg:mt-48 tracking-wider">
                <p class="mb-4">Front-end developer</p>
                <p class="mb-4">WordPress developer</p>
                <p class="mb-4">Laravel developer</p>
                <p class="mb-4">Quality analyst</p>
                <p class="mb-4">UI/UX Designer</p>
            </div>

            <div class="bg-gray-850 w-345px md:w-500px h-353px md:h-600px md:ml-20 mt-5 md:mt-0"></div>
        </div>

       <AcceptCookie class="absolute bottom-6"/>
    </section>
</template>

<script setup>
    import AcceptCookie from "@/components/HomePage/HomeSection/AcceptCookie.vue";
</script>
