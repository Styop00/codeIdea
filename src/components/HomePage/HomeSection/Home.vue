<template>
    <section id="home" class="md:bg-white-40 relative px-5 sm:px-0">
        <div class="div_container
        flex flex-wrap md:flex-nowrap justify-between py-20 pb-0 md:pb-52 ld:pb-44">
            <div class="text-3xl md:text-4xl font-bold sm:mt-16 lg:mt-48 tracking-wider">
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
