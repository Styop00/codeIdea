<template>
    <section id="awards" class="px-6 sm:px-24 pb-28 pt-14 sm:pt-0">
        <SectionsTitle sections_title="Awards & recognitions" />
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2">
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
            <AwardsItem />
        </div>
    </section>
</template>

<script setup>
    import SectionsTitle from "@/components/Home/SectionsTitle.vue"
    import AwardsItem from "@/components/Home/AwardsSection/AwardsItem.vue"
</script>