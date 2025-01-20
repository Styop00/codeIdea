<template>
    <section id="effects" class="px-5 sm:px-0">
        <SectionsTitle sections_title="That's the CodeIdea’s effect" class="mb-10"/>
        <div class="hidden md:block w-full"> 
            
            <div v-for="effect in effects" class="sticky" :class=effect.top>
                <Transition 
                    appear
                    @enter=effect.enter
                >
                    <Effect>
                        <EffectButton :btn_text = effect.btn1 class="text-white" :class=effect.bg_btn />
                        <EffectButton :btn_text = effect.btn2 />
                        <EffectDesc>
                            <p> {{ effect.description }} </p>
                        </EffectDesc>

                        <template #circle>
                            <img :src=effect.circle >
                        </template>

                        <template #img>
                            <img :src=effect.img class="h-80">                        
                        </template>
                    </Effect>
                </Transition>
            </div>
            
        </div>

        <EffectCarousel class="md:hidden"/>
    </section>
</template>

<script setup>
    import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
    import Effect from "@/components/HomePage/EffectSection/Effect.vue"
    import EffectButton from "@/components/HomePage/EffectSection/EffectButton.vue"
    import EffectDesc from "@/components/HomePage/EffectSection/EffectDesc.vue"
    import EffectCarousel from "@/components/HomePage/EffectSection/EffectsCarousel.vue"

    import {ref} from "vue"

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);


    const effects = ref([
        {
            'top': 'top-32',
            'enter': animation_to(1),
            'btn1': 'bettercare',
            'btn2': '#israel',
            'bg_btn': 'bg-purple-10',
            'description': 'A healthcare startup rescues and scales their product',
            'circle': 'src/assets/img/effecs/circle.svg',
            'img': 'src/assets/img/effecs/42756a28464e992d90e07853a8481ac7.png',
        },
        {
            'top': 'top-40',
            'enter': animation_to(2),
            'btn1': 'gifted',
            'btn2': '#usa',
            'bg_btn': 'bg-pink-10',
            'description': 'E-gifting startup enhances their SaaS platform and expands globally',
            'circle': 'src/assets/img/effecs/gray-circle.svg',
            'img': 'src/assets/img/effecs/6259b4e6305954c01f493b721f928800.png',
        },
        {
            'top': 'top-48',
            'enter': animation_to(-2),
            'btn1': 'rooya',
            'btn2': '#uk',
            'bg_btn': 'bg-green-10',
            'description': 'An insurtech startup elevates risk profiling with a dashcam app',
            'circle': 'src/assets/img/effecs/circle.svg',
            'img': 'src/assets/img/effecs/f4d04fa35b532eb6075e49be0cfe35b4.png',
        },
        {
            'top': 'top-56',
            'enter': animation_to(-2),
            'btn1': 'liquidity',
            'btn2': '#usa',
            'bg_btn': 'bg-orange-10',
            'description': 'An insurtech startup grows from a great promise to a unicorn',
            'circle': 'src/assets/img/effecs/gray-circle.svg',
            'img': 'src/assets/img/effecs/88094aa5ce1e00383c20af17eabb9db2.png',
        },
        {
            'top': 'top-64',
            'enter': animation_to(2),
            'btn1': 'firsties',
            'btn2': '#usa',
            'bg_btn': 'bg-gray-10',
            'description': 'A self-funded media startup saves $570K annually with our dedicated team service',
            'circle': 'src/assets/img/effecs/gray-circle.svg',
            'img': 'src/assets/img/effecs/5382b2d89ef386e59d78f058f3b76753.png',
        },
        {
            'top': 'top-72',
            'enter': animation_to(-2),
            'btn1': 'pictime',
            'btn2': '#israel',
            'bg_btn': 'bg-blue-100',
            'description': 'A media company scales its front- end team with 34% cost savings',
            'circle': 'src/assets/img/effecs/gray-circle.svg',
            'img': 'src/assets/img/effecs/183ee666389135536f7ea9bfb03dc9d8.png',
        },
        {
            'top': 'top-80',
            'enter': animation_to(-1),
            'btn1': 'waddington’s',
            'btn2': '#canada',
            'bg_btn': 'bg-purple-20',
            'description': 'Renowned auction house goes mobile',
            'circle': 'src/assets/img/effecs/gray-circle.svg',
            'img': 'src/assets/img/effecs/28661226590b39697120234b385fc124.png',
        },
    ]);

    function animation_to(deg) {
        const enter = (el) => {
            gsap.to(el, {
                duration: 3,
                rotate: deg + 'deg',
                ease: 'back.out(8)',
                scrollTrigger: {
                    trigger: el,
                }
            })
        }
        return enter;
    }
    
</script>