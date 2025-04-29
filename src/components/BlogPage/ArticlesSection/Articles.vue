<template>
  <div class="mb-14">
    <BlogBtn
      btnText="All"
      @click="getArticles(1, null, -1)"
      :class="{'!text-white !bg-gray-800' : activeIndex === -1}"
    />

    <BlogBtn
      v-for="(category, index) in categories"
      :key="category.term_id"
      :btnText="category.name"
      @click="getArticles(1, category.term_id, index)"
      :class="{'!text-white !bg-gray-800' : activeIndex === index}"
    />
  </div>

  <div class="relative">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-for="(article, i) in articles">
        <Article :article="article"/>
        <Subscribe :class="{
                    'hidden': i != articles.length - 1,
                    'md:hidden': i===articles.length-1,
                    'md:block' : i===0,
                    'lg:hidden' : i===0,
                    'lg:block': i===(articles.length > 3 ? 1 : articles.length -1)
                }"/>
      </template>
    </div>
  </div>

  <div class="text-center mt-8 mb-8">
    <button v-if="currentPage > 1" @click="getArticles(currentPage - 1, category_id, activeIndex), reloadPage()">
      <fa :icon="['fas', 'angle-left']"/>
    </button>

    <PaginationButton
      v-for="index in pagesCount"
      :key="index"
      :pageNumber="index"
      @click="getArticles(index, category_id, activeIndex), reloadPage()"
      :class="{'bg-black text-white': currentPage === index}"
    />

    <button v-if="currentPage < pagesCount"
            @click="getArticles(currentPage + 1, category_id, activeIndex), reloadPage()">
      <fa :icon="['fas', 'angle-right']"/>
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Article from '@/components/BlogPage/ArticlesSection/Article.vue';
import Subscribe from '@/components/BlogPage/ArticlesSection/SubScribe/Subscribe.vue';
import PaginationButton from '@/components/BlogPage/PaginationButton.vue';
import BlogBtn from '@/components/BlogPage/BlogBtn.vue';
import {$axios} from '@/plugins/axios.js';

const articles = ref([]);
const pagesCount = ref(1);
const currentPage = ref(1);
const articlesToShow = ref(10);
const leftArrowVisible = ref(false);
const rightArrowVisible = ref(false);
const pagesVisible = ref(true);
const categories = ref([]);
const activeIndex = ref(-1);
const category_id = ref(null);

function reloadPage() {
  window.scrollTo(0, 0);
}

async function getCategories() {
  try {
    const response = await $axios.get('/index.php/wp-json/categories/v1/all/');
    categories.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getArticles(pageNumber, categoryId, index) {
  currentPage.value = pageNumber;
  activeIndex.value = index;
  category_id.value = categoryId;

  try {
    let response = await $axios.get('/index.php/wp-json/wp/v2/posts/?page=' + currentPage.value);
    // es 2 link-ery avelacru get-articles.php-um
    if (categoryId) {
      response = await $axios.get('/index.php/wp-json/wp/v2/posts/?page=' + currentPage.value + '&category_id=' + categoryId);
    }

    articles.value = response.data;
    pagesCount.value = Number(response.headers['x-wp-totalpages']);

    leftArrowVisible.value = pageNumber > 1;
    rightArrowVisible.value = pageNumber < pagesCount.value;

    pagesVisible.value = pagesCount.value > 1;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getCategories();
  getArticles(currentPage.value, null, -1);
});
</script>
