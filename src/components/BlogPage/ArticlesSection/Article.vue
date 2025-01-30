<template>
    
    <div class="shadow-small-10 p-2">
        <div class="bg-gray-950 rounded h-32"></div>
        <div class="mb-6">
            <p class="text-sm text-gray-900 mt-3"> {{ day }} {{ show_month }}, {{ year }} </p>
            <h4 class="text-gray-10 font-semibold my-4 leading-7 md:leading-8">{{ article.title }}</h4>
            <p class="text-sm mb-3 leading-5 md:leading-6"> {{ article.description }} </p>
            <button @click="router.push({
                name: 'article', 
                params: { 
                    id: article.id,
                },
            }), reload_page()" class="font-medium underline">Learn more</button>
        </div>
    </div>

    
</template>

<script setup>
    import {useRouter} from "vue-router"
    import {ref} from "vue"

    const props = defineProps(['article']);
    const emit = defineEmits(['goArticlePage']);

    const months = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

    let date = ref(props.article.created_at);
    let day = ref(date.value.substring(8, 10));
    let month = ref(date.value.substring(5, 7));
    let year = ref(date.value.substring(0, 4));

    let show_month = ref(months.value[+month.value - 1]);

    const router = useRouter();    

    function reload_page() {
        window.scrollTo(0,0);
    }
</script>