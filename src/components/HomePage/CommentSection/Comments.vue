<template>
    <section id="comments" class="pt-10 md:pt-0 bg-white-30 md:bg-white">
        <SectionsTitle sections_title="What our clients say about us" class="mb-0"/>
        <div class="md:grid md:gap-11 md:grid-cols-2 lg:grid-cols-3 bg-white-30 md:pt-11 pb-24 bg-white hidden md:inline bg-">

            <div class="carousel__item">
                <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
                    <template #comment>
                        <p>
                            I don’t need to spoon-feed them.
                            Our partnership is truly a
                            partnership.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
                    </template>
                </Comment>
            </div>

            <div class="carousel__item">
                <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
                    <template #comment>
                        <p>
                            I don’t need to spoon-feed them.
                            Our partnership is truly a
                            partnership.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
                    </template>
                </Comment>
            </div>

            <div class="carousel__item">
                <Comment name="Kevin Hill" position="Sr Director of Tech & Data Strategy at SuperOrdinary">
                    <template #comment>
                        <p>
                            I don’t need to spoon-feed them.
                            Our partnership is truly a
                            partnership.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/cfdc3c7d4d8bd15935a1c67714068cc0.png" class="w-16">
                    </template>
                </Comment>
            </div>

            <div class="carousel__item">
                <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
                    <template #comment>
                        <p>
                            They’ve added flexibility where
                            the system was previously rigid,
                            and they take full responsibility
                            for the project, quickly fixing any
                            issues that arise. Our company
                            wouldn’t be where it is without
                            the work they’ve done.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
                    </template>
                </Comment>
            </div>

            <div class="carousel__item">
                <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
                    <template #comment>
                        <p>
                            They’ve added flexibility where
                            the system was previously rigid,
                            and they take full responsibility
                            for the project, quickly fixing any
                            issues that arise. Our company
                            wouldn’t be where it is without
                            the work they’ve done.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
                    </template>
                </Comment>
            </div>

            <div class="carousel__item">
                <Comment name="Naomi Rubinstein" position="CEO & Founder at Bettercare">
                    <template #comment>
                        <p>
                            They’ve added flexibility where
                            the system was previously rigid,
                            and they take full responsibility
                            for the project, quickly fixing any
                            issues that arise. Our company
                            wouldn’t be where it is without
                            the work they’ve done.
                        </p>
                    </template>

                    <template #img>
                        <img src="@/assets/img/comments/a03ff97881ce633edf808c20a998da0c.png" class="w-16">
                    </template>
                </Comment>
            </div>
        </div>

        <CommentsCarousel class="md:hidden"/>
    </section>
</template>

<script setup>
    import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
    import Comment from "@/components/HomePage/CommentSection/Comment.vue"
    import CommentsCarousel from "@/components/HomePage/CommentSection/CommentsCarousel.vue"
</script>