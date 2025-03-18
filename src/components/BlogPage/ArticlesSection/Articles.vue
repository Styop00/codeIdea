<template>
  <div class="mb-14">
    <BlogBtn
      btnText="All"
      @click="getArticles(page, null, -1)"
      :class="{'!text-white !bg-gray-800' : activeIndex === -1}"
    />

    <BlogBtn
      v-for="(category, index) in categories"
      :btnText=category.name
      @click="getArticles(page, category.id, index)"
      :class="{'!text-white !bg-gray-800' : activeIndex === index}"
    />

    <BlogBtn btnText="Other" @click="getArticles(page, 'other', categories.length + 1)"
             :class="{'!text-white !bg-gray-800' : activeIndex === categories.length + 1}"/>
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

  <div class="text-center mt-8">

    <button v-if="leftArrowVisible" @click="getArticles(currentPage-1, category_id, activeIndex), reloadPage()">
      <fa :icon="['fas', 'angle-left']"/>
    </button>

    <PaginationButton v-if="pagesVisible"
                      v-for="index in pagesCount"
                      :pageNumber='index'
                      @click="getArticles(index, category_id, activeIndex), reloadPage()"
                      :class="{
                'bg-black':currentPage===index,
                'text-white':currentPage===index,
            }"
    />

    <button v-if="rightArrowVisible" @click="getArticles(currentPage+1, category_id, activeIndex), reloadPage()">
      <fa :icon="['fas', 'angle-right']"/>
    </button>

  </div>
</template>

<script setup>
import Article from "@/components/BlogPage/ArticlesSection/Article.vue"
import Subscribe from "@/components/BlogPage/ArticlesSection/SubScribe/Subscribe.vue"
import PaginationButton from "@/components/BlogPage/PaginationButton.vue"
import BlogBtn from "@/components/BlogPage/BlogBtn.vue"

import {ref} from "vue"
import {$axios} from "@/plugins/axios.js"

let articles = ref([]);
let pagesCount = ref();
let page = ref(1);
let articlesToShow = ref(10);
let currentPage = ref(1);
let leftArrowVisible = ref(false);
let rightArrowVisible = ref(false);
let pagesVisible = ref(true);
let categories = ref([]);
let activeIndex = ref(-1);
let category_id = ref();

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

async function getArticles(p, x, i) {
  currentPage.value = p;
  leftArrowVisible.value = false;
  rightArrowVisible.value = false;
  pagesVisible.value = true;
  activeIndex.value = i;
  category_id.value = x;

  try {
    let response = await $axios.get('/index.php/wp-json/articles/v1/all/?page=' + currentPage.value);

    // es 2 link-ery avelacru get-articles.php-um
    if (x === 'other') {
      response = await $axios.get('/index.php/wp-json/articles/v1/all/?page=' + currentPage.value + '&other=' + x);
    } else if (x) {
      response = await $axios.get('/index.php/wp-json/articles/v1/all/?page=' + currentPage.value + '&category_id=' + x);
    }

    articles.value = response.data.data;
    pagesCount.value = Math.ceil(response.data.total / articlesToShow.value);

    if (pagesCount.value === 1) {
      pagesVisible.value = false;
    }

    if (currentPage.value === 1) {
      leftArrowVisible.value = false;
    } else {
      leftArrowVisible.value = true;
    }

    if (pagesCount.value >= 2) {
      rightArrowVisible.value = true;
    }

    if (currentPage.value === pagesCount.value) {
      rightArrowVisible.value = false;
    }
  } catch (error) {
    console.log(error);
  }
}

getCategories();
getArticles(page.value, null, -1);
</script>
