<script setup>
const pop=defineProps({
  data:Object,
  move_node:Function
})
</script>
<template>
  <div class="absolute z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
    <div class="w-screen h-screen flex fixed top-0 justify-center items-center ">
      <div class=" max-h-[60vh] overflow-y-scroll sm:max-h-[60vh] isolate overflow-hidden bg-[var(--theme-model-bg)] rounded-2xl">
        <div class="px-6 py-10 sm:w-auto w-[90vw] sm:px-6 sm:py-10 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-[var(--theme-title)] sm:text-4xl">{{ data.title }}</h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--theme-text)]" v-html="data.content"></p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <p @click="pop.move_node()" class="cursor-pointer bg-[var(--theme-button-imp)] rounded-md  px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">我知道了 →</p>
<!--              <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>-->
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div class="absolute -z-10 w-full h-full" @click="pop.move_node()"></div>
    </div>
  </div>

</template>
