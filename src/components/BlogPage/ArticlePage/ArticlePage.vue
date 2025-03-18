<template>
  <div class="divContainer md:mb-10 pt-5 md:pt-40 px-5 sm:px-0">
    <div class="md:w-5/6">
      <Title title="BLOGarticle" :description="article.title"></Title>
    </div>

    <div v-html="article.body" class="md:text-xl leading-8 md:leading-10 mt-6 md:mt-12"></div>

<!--    <div>-->
<!--      <h2 class="text-2xl md:text-46px font-bold mt-20 md:mt-28">Discover More Insights</h2>-->
<!--      <div class="md:flex gap-6 hidden">-->
<!--        <div v-for="article in latestArticles" class="mt-14">-->
<!--          <Article :article="article"/>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="md:hidden">-->
<!--        <ArticlesCarousel v-for="article in latestArticles">-->
<!--          <Article :article="article"/>-->
<!--        </ArticlesCarousel>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue"
import Article from "@/components/BlogPage/ArticlesSection/Article.vue"
import ArticlesCarousel from "@/components/BlogPage/ArticlePage/ArticlesCarousel.vue"

import {ref, watch} from "vue"
import {useRoute} from "vue-router"

import {$axios} from "@/plugins/axios.js"
import {onMounted} from "vue";

const route = useRoute();
let article = ref([]);
let latestArticles = ref([]);

watch(() => route.params.id, () => {
  getArticle();
  // getLatestArticles();
})

async function getArticle() {
  try {
    const response = await $axios.get('/index.php/wp-json/article/v1/all/' + route.params.id);
    article.value = response.data[0];
  } catch (error) {
    console.log(error);
  }
}

// async function getLatestArticles() {
//   try {
//     const response = await $axios.get('/random/' + route.params.id);
//     latestArticles.value = response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
//
// getLatestArticles();
getArticle();
</script>
