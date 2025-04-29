<template>
  <div class="shadow-large p-2 md:p-16 bg-white w-full">
    <div class="relative overflow-hidden">
      <div class="w-3/4 md:w-1/2 relative z-1">
        <slot/>
      </div>

      <div class="absolute top-1/2 -translate-y-1/2 w-3/5 right-0">
        <slot name="img"/>
      </div>
    </div>
  </div>
</template>
