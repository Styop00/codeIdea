<template>
    <div class="div_container md:mb-10 pt-5 md:pt-40 px-5 sm:px-0">
        <ArticleTitle />
        <p class="md:text-xl leading-8 md:leading-10 mt-6 md:mt-12">In today’s fast-paced world, the pursuit of excellence has become a driving force across industries. From startups to established enterprises, businesses are constantly seeking innovative ways to outperform the competition, enhance customer experiences, and streamline operations. Enter Artificial Intelligence (AI)—a transformative force that is not just disrupting traditional practices, but actively redefining what excellence means in the modern age.</p>
        
        <ol class="list-decimal list-inside marker:font-semibold marker:text-2xl">
            <li v-for="paragraph in paragraphs" class="my-16"> 
                <Paragraph :title=paragraph.title>
                    <p v-for="txt in paragraph.text"> 
                        {{ txt }}
                    </p>
                </Paragraph> 
            </li>
        </ol>

        <div>
            <h2 class="text-2xl md:text-46px font-bold">Discover More Insights</h2>
            <div class="md:flex gap-6 hidden md:block">
                <div v-for="i in 3" class="mt-14">
                    <Article></Article>
                </div>
            </div>
            
            <div class="md:hidden">
                <ArticlesCarousel>
                    <Article/>
                </ArticlesCarousel>
            </div>
        </div>        
    </div>
</template>

<script setup>
    import ArticleTitle from "@/components/BlogPage/ArticlePage/ArticleTitle.vue"
    import Paragraph from "@/components/BlogPage/ArticlePage/Paragraph.vue"
    import Article from "@/components/BlogPage/ArticlesSection/Article.vue"
    import ArticlesCarousel from "@/components/BlogPage/ArticlePage/ArticlesCarousel.vue"

    import {ref} from "vue"

    let paragraphs = ref([
        {
            title: 'AI in Decision-Making: Elevating Precision and Speed',
            text: [
                'Traditionally, business decisions relied heavily on human intuition, historical data, and experience. While these methods have served businesses well, they often lack the precision and speed necessary to keep up with the demands of the modern market. AI has changed this paradigm by enabling data-driven decision-making that’s faster, more accurate, and more informed.',
                'By analyzing massive amounts of data in real-time, AI can uncover insights that were previously hidden, allowing businesses to make informed decisions instantly. From predicting market trends to identifying customer preferences, AI’s ability to process vast amounts of information quickly enables businesses to act faster and smarter, giving them a competitive edge in the race for excellence.',
            ],
        },
        {
            title: 'AI in Customer Experience: Personalizing Interactions',
            text: [
                'Excellence in customer experience has always been about creating tailored, engaging interactions that meet the unique needs of each individual. However, achieving this level of personalization on a large scale has historically been a challenge. AI is changing that.',
                'AI-powered tools such as chatbots, recommendation engines, and personalized marketing algorithms can now provide customers with a highly personalized experience based on their behaviors, preferences, and past interactions. These tools not only improve customer satisfaction but also foster brand loyalty by delivering exactly what the customer wants, often before they even realize it.',
            ],
        },
        {
            title: 'AI in Innovation: Fueling Creative Breakthroughs',
            text: [
                'AI is no longer limited to back-office tasks or operational efficiency; it is now playing a pivotal role in driving innovation, especially in creative industries. From designing products to generating content, AI is offering creative professionals new tools to enhance their craft and push the boundaries of what\'s possible.',
                'In industries like fashion, music, art, and even advertising, AI is being used to generate new ideas, predict trends, and create prototypes. In the world of design, AI tools can suggest design elements based on user preferences and historical trends, while in the music industry, AI algorithms can compose original pieces of music.',
            ],
        },
    ]);
</script>