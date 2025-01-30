<template>
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
                }" />
            </template>
            
        </div>
    </div>

    <div class="text-center mt-8">

        <button v-if="left_arrow_visible" @click="get_articles(currentPage-1)">
            <fa :icon="['fas', 'angle-left']" />
        </button>

        <PaginationButton 
            v-for="index in pages_count" 
            :page_number='index' 
            @click="get_articles(index), reload_page()" 
            :class="{
                'bg-black':currentPage===index,
                'text-white':currentPage===index,
            }"
        />

        <button v-if="right_arrow_visible" @click="get_articles(currentPage+1)">
            <fa :icon="['fas', 'angle-right']" />
        </button>
        
    </div>
</template>

<script setup>
    import Article from "@/components/BlogPage/ArticlesSection/Article.vue"
    import Subscribe from "@/components/BlogPage/ArticlesSection/SubScribe/Subscribe.vue"
    import PaginationButton from "@/components/BlogPage/PaginationButton.vue"

    import {ref} from "vue"
    import {$axios} from "@/plugins/axios.js" 

    let articles = ref([]);
    let pages_count = ref();
    let page = ref(1);
    let articlesToShow = ref(10);
    let currentPage = ref(1);
    let left_arrow_visible = ref(false);
    let right_arrow_visible = ref(false);
    let pages_visible = ref(true);

    function reload_page() {
        window.scrollTo(0,0);
    }

    async function get_articles(p) {
        currentPage.value = p;

        try {
            const response = await $axios.get('/articles?page=' + p);

            articles.value = response.data.data;
            pages_count.value = Math.ceil(response.data.total / articlesToShow.value);

            if (pages_count.value === 1) {
                pages_visible.value = false;
            }

            if (currentPage.value === 1) {
                left_arrow_visible.value = false;
            } else {
                left_arrow_visible.value = true;
            }

            if (pages_count.value >= 2) {
                right_arrow_visible.value = true;
            } 

            if (currentPage.value === pages_count.value) {
                right_arrow_visible.value = false;
            }
        } catch(error) {
            console.log(error);
        }
    }
    get_articles(page.value);
</script>   