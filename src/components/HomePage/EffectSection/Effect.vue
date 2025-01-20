<template>
    <div class="shadow-large p-2 md:p-16 bg-white w-full">
        <div class="relative overflow-hidden">
            <div class="w-3/4 md:w-1/2 relative z-1">
                <slot/>
                <div class="relative">
                    <slot name="circle"/>
                    <p class="uppercase text-[7px] md:text-xs font-bold tracking-widest
                    absolute top-1/2 left-[10px] md:left-18px -translate-y-1/2">
                        Case study
                    </p>
                </div>
            </div>

            <div class="absolute top-1/2 -translate-y-1/2 w-3/5 right-0">
                <slot name="img"/>
            </div>
        </div>
    </div>
</template>