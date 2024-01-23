<script setup>

import Home_Sign from "@/views/HOME/Home_Sign.vue";

const title=window.config.title



</script>
<template>
  <div class="flex justify-center mb-[30px] relative z-20">
    <div class="content flex max-w-[1300px] w-[1300px]  justify-between p-11 ">
      <div class="left">
        <a href="" class="flex items-center gap-6">
          <div class="icon w-24 h-12">
            <img class=" h-full" src="/img/logo.png" alt="">
          </div>
          <div class="text-white font-bold text-2xl">
            {{title}}
          </div>
        </a>
      </div>
      <div class="right flex gap-14 items-baseline">
        <div class="login hidden sm:block">
         <Home_Sign></Home_Sign>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.login:hover svg {
  transform: rotate(90deg);
  transition: 0.5s all;
}
</style>