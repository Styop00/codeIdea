<style>
    #effects_carousel .carousel__slide {
        text-align: left;
    }

    #effects_carousel .carousel__slide--active {
        margin: 0 10px;
    }
</style>

<template>
    <Carousel v-bind="config" id="effects_carousel">       
        <Slide> 
            <Effect class="carousel__item" >
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
                    <img src="@/assets/img/effecs/42756a28464e992d90e07853a8481ac7.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>        
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/6259b4e6305954c01f493b721f928800.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>        
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/f4d04fa35b532eb6075e49be0cfe35b4.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>        
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/88094aa5ce1e00383c20af17eabb9db2.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>        
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/5382b2d89ef386e59d78f058f3b76753.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>       
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/183ee666389135536f7ea9bfb03dc9d8.png">
                </template>
            </Effect>
        </Slide>
        

        <Slide>       
            <Effect class="carousel__item">
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
                    <img src="@/assets/img/effecs/28661226590b39697120234b385fc124.png">
                </template>
            </Effect>
        </Slide>
        
    </Carousel>   
</template>

<script setup>
    import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
    import Effect from "@/components/HomePage/EffectSection/Effect.vue"
    import EffectButton from "@/components/HomePage/EffectSection/EffectButton.vue"
    import EffectDesc from "@/components/HomePage/EffectSection/EffectDesc.vue"

    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide } from 'vue3-carousel'
    
    const config = {
        itemsToShow: 1,
        autoplay: 2000,
        wrapAround: true,
        pauseAutoplayOnHover: true,
    }
    
</script>