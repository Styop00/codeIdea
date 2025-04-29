<template>
  <div class="shadow-small-10 pr-2 pl-2">
    <div class="bg-gray-950 rounded h-32 overflow-hidden">
      <div class="figure-wrapper" v-if="figureHtml" v-html="figureHtml"></div>
    </div>
    <div class="mb-6">
      <p class="text-sm text-gray-900 mt-3">{{ day }} {{ showMonth }}, {{ year }}</p>
      <h4 class="text-gray-10 font-semibold my-4 leading-7 md:leading-8">
        {{ article.title.rendered }}
      </h4>
      <p class="text-sm mb-3 leading-5 md:leading-6" v-html="article.excerpt.rendered" style="line-height: 60px"/>
      <button class="font-medium underline learn-more" @click="goToArticlePage(article.slug)">Learn more</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['article']);
const emit = defineEmits(['goArticlePage']);

const months = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

let date = ref(props.article.date);
let day = ref(date.value.substring(8, 10));
let month = ref(date.value.substring(5, 7));
let year = ref(date.value.substring(0, 4));

let showMonth = ref(months.value[+month.value - 1]);

const figureHtml = ref("");

onMounted(() => {
  if (props.article.content.rendered) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = props.article.content.rendered;

    let figure = tempDiv.querySelector("figure");
    if (figure) {
      figureHtml.value = figure.outerHTML;
    }
  }
});

const goToArticlePage = (article) => {
  window.location.href = '/' + article;
};
</script>
