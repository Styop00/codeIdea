<template>
    <section id="awards" class="pb-28 pt-14 sm:pt-0">
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
    import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
    import AwardsItem from "@/components/HomePage/AwardsSection/AwardsItem.vue"
</script>