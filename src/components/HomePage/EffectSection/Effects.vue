<template>
    <section id="effects" class="px-10 sm:px-24">
        <SectionsTitle sections_title="That's the CodeIdea’s effect" class="mb-10"/>
        <div class="relative min-h-1000px hidden md:inline-block w-full"> 
            <Transition 
                appear
                @before-enter="beforeEnter1"
                @enter="enter1"
            >
                <Effect class="rotate-1" >
                    <EffectButton btn_text = "bettercare" class="bg-purple-10 text-white"/>
                    <EffectButton btn_text = "#israel" />
                    <EffectDesc>
                        <p>
                            A healthcare <br>
                            startup rescues <br>
                            and scales their <br>
                            product
                        </p>
                    </EffectDesc>

                    <template #circle>
                        <img src="@/assets/img/effecs/circle.svg">
                    </template>

                    <template #img>
                        <img src="@/assets/img/effecs/42756a28464e992d90e07853a8481ac7.png" class="h-80">                        
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter2"
                @enter="enter2"
            >
                <Effect class="-rotate-2">
                    <EffectButton btn_text = "gifted" class="bg-pink-10 text-white"/>
                    <EffectButton btn_text = "#usa" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                    </template>
                    <template #img>
                        <img src="@/assets/img/effecs/6259b4e6305954c01f493b721f928800.png" class="h-80">
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter3"
                @enter="enter3"
            >
                <Effect class="-rotate-2">
                    <EffectButton btn_text = "rooya" class="bg-green-10 text-white"/>
                    <EffectButton btn_text = "#uk" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <img src="@/assets/img/effecs/circle.svg">
                    </template>
                    
                    <template #img>
                        <img src="@/assets/img/effecs/f4d04fa35b532eb6075e49be0cfe35b4.png" class="h-80">
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter4"
                @enter="enter4"
            >
                <Effect class="rotate-2">
                    <EffectButton btn_text = "liquidity" class="bg-orange-10 text-white"/>
                    <EffectButton btn_text = "#usa" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                    </template>
                    
                    <template #img>
                        <img src="@/assets/img/effecs/88094aa5ce1e00383c20af17eabb9db2.png" class="h-80">
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter5"
                @enter="enter5"
            >
                <Effect class="-rotate-2">
                    <EffectButton btn_text = "firsties" class="bg-blue-10 text-white"/>
                    <EffectButton btn_text = "#usa" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                    </template>

                    <template #img>
                        <img src="@/assets/img/effecs/5382b2d89ef386e59d78f058f3b76753.png" class="h-80">
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter6"
                @enter="enter6"
            >
                <Effect class="rotate-2">
                    <EffectButton btn_text = "pictime" class="bg-blue-100 text-white"/>
                    <EffectButton btn_text = "#israel" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                    </template>

                    <template #img>
                        <img src="@/assets/img/effecs/183ee666389135536f7ea9bfb03dc9d8.png" class="h-80">
                    </template>
                </Effect>
            </Transition>

            <Transition 
                appear
                @before-enter="beforeEnter7"
                @enter="enter7"
            >
                <Effect class="-rotate-1">
                    <EffectButton btn_text = "waddington’s" class="bg-purple-20 text-white"/>
                    <EffectButton btn_text = "#canada" />
                    <EffectDesc>
                        <p>
                            E-gifting startup <br>
                            enhances their SaaS <br>
                            platform and <br>
                            expands globally
                        </p>
                    </EffectDesc>
                    <template #circle>
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                    </template>

                    <template #img>
                        <img src="@/assets/img/effecs/28661226590b39697120234b385fc124.png" class="h-80">
                    </template>
                </Effect>
            </Transition>
        
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

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    function animation_from (elementTop){
        const beforeEnter = (el) => {
            el.style.position = "absolute";
            el.style.top = elementTop;
            el.style.opacity = 0;
        }
        return beforeEnter;
    }

    function animation_to(elementTop) {
        const enter = (el) => {
            gsap.to(el, {
                top:elementTop,
                duration:1,
                opacity:1,
                scrollTrigger: {
                    trigger: el,
                }
            })
        }
        return enter;
    }

    const beforeEnter1 = animation_from('200px');
    const enter1 = animation_to(0);

    const beforeEnter2 = animation_from('500px');
    const enter2 = animation_to('50px');

    const beforeEnter3 = animation_from('800px');
    const enter3 = animation_to('100px');

    const beforeEnter4 = animation_from('1100px');
    const enter4 = animation_to('150px');

    const beforeEnter5 = animation_from('1300px');
    const enter5 = animation_to('200px');

    const beforeEnter6 = animation_from('1500px');
    const enter6 = animation_to('250px');

    const beforeEnter7 = animation_from('1700px');
    const enter7 = animation_to('300px');
    
</script>