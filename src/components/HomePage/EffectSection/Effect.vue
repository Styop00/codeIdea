<template>
    <div class="shadow-shadow2 p-2 md:p-16 bg-white w-full">
        <div class="relative">
            <div class="w-1/2">
                <slot/>
                <div class="relative h-button-height">
                    <slot name="circle"/>
                    <p class="uppercase text-xs font-bold tracking-widest
                    absolute top-1/2 left-18px -translate-y-1/2">
                        Case study
                    </p>
                </div>
            </div>

            <div class="md:h-full absolute top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 w-1/2 md:w-2/3 right-0 md:z-0">
                <slot name="img"/>
            </div>
        </div>
    </div>
</template>