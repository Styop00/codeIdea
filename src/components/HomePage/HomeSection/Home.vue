<template>
    <section id="home" class="md:bg-white-40 relative">
        <div class="flex flex-wrap md:flex-nowrap justify-between pt-28 md:py-40 px-10">
            <div class="text-2xl md:text-32px lg:text-46px font-bold sm:mt-28 lg:mt-48 tracking-wider leading-10">
                <p>Front-end developer</p>
                <p>WordPress developer</p>
                <p>Laravel developer</p>
                <p>Quality analyst</p>
                <p>UI/UX Designer</p>
            </div>

            <div class="bg-gray-850 w-345px md:w-500px h-353px md:h-600px md:ml-20 mt-5 md:mt-0"></div>
        </div>

        <AcceptCookie class="absolute bottom-6"/>
    </section>
</template>

<script setup>
    import AcceptCookie from "@/components/HomePage/HomeSection/AcceptCookie.vue";
</script>