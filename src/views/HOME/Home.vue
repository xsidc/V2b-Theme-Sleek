<script setup>
import { ref, watch } from 'vue'
import heder from './Home_heder.vue'
import Home_Sign from "@/views/HOME/Home_Sign.vue";
import Home_Media from "@/views/HOME/Home_Media.vue";
import Home_Country from "@/views/HOME/Home_Country.vue";
import Home_Pric from "@/views/HOME/Home_Pric.vue";
import {useRoute} from "vue-router";
const ShowNum = ref(0)
const DownList = ref()


watch(ShowNum,value => {
  DownList.value = window.config.down[value]
}, {
  immediate: true
})

const title=window.config.title

const down=window.config.down
const taocan=window.config.taocan

const title1=window.config.title1
const title2=window.config.title2.split(",")
</script>
<template>

  
  <!-- 主题 -->
  <div class="bg-black w-full h-full">
    <!-- 头部 -->
    <heder></heder>
    
    <div class="flex justify-center p-5">
      <div class="main flex max-w-[1300px] w-[1300px]  justify-between lg:p-11">
        <section class="first  flex-1">
          <div class="title flex flex-col gap-10">
            <div class="ti sm:whitespace-nowrap">
              <p class="text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent">{{title}}</p>
            </div>
            <div class=" flex flex-row gap-4">
              <p v-for="item in title2"
                 class="px-6 rounded-3xl p-3 text-slate-300 bg-[#2b2d33]  text-xl">{{ item }}</p>
            </div>
            <div class="flex gap-5">

              <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18.7295 0.190584C19.4166 0.536049 19.7415 1.26696 19.5088 1.94359L16.3954 10.9963L23.1423 10.2956C23.8402 10.2232 24.5137 10.5524 24.8261 11.1188C25.1385 11.6852 25.0227 12.3671 24.5366 12.8236L6.73903 29.5378C6.19231 30.0513 5.32012 30.1486 4.65058 29.7709C3.98105 29.3933 3.69822 28.6443 3.97335 27.9777L7.65892 19.0473L1.87483 19.7025C1.18832 19.7803 0.51981 19.4682 0.19503 18.9184C-0.129751 18.3685 -0.0432474 17.6952 0.412393 17.2265L16.6624 0.512308C17.1806 -0.0207393 18.0425 -0.154882 18.7295 0.190584ZM5.80716 16.2334L9.97042 15.7618C10.5486 15.6963 11.1228 15.9073 11.4847 16.3183C11.8467 16.7293 11.9438 17.2806 11.7409 17.7723L9.89973 22.2337L18.9302 13.7529L14.2386 14.2401C13.6791 14.2982 13.1248 14.0981 12.7651 13.708C12.4054 13.3179 12.2889 12.7907 12.4555 12.3065L14.0048 7.80157L5.80716 16.2334Z"
                      fill="#BCC9DB" />
              </svg>
              <p class="text-lg text-slate-400 ">{{ title1 }}</p>
            </div>


            <!-- app-login -->
            <div class="flex sm:hidden">
              <Home_Sign></Home_Sign>
            </div>

            <!-- 下载 -->

            <div class="bg-slate-900 overflow-x-scroll rounded-2xl  max-w-[90vw] overflow-hidden whitespace-nowrap sm:w-[200%]  items-baseline p-3">
              <p v-for="(item, index) in down"
                 class="px-6 inline-block text-white font-extrabold cursor-pointer py-4  rounded-2xl hover:bg-slate-800"
                 @click="ShowNum = index"
                 :class="[index === ShowNum ? 'border-4 border-green-400' : 'border-4 border-slate-900']">
                {{ item.name }}
              </p>
            </div>
          </div>
        </section>
        <div class="relative w-full flex-1 sm:block hidden">
          <img class=" absolute z-10 w-full top-[-26%]" src="/img/hero-Illustration-1.png" alt="">
          <span class="fg rounded-full"></span>
        </div>
      </div>
    </div>

    <!-- 下载下拉 -->
    <div class="flex justify-center  relative z-20">
      <div class="  main  max-w-[1300px] w-[1300px]  justify-between sm:px-11 sm:flex  relative">
        <div class="mt-3 flex flex-row flex-wrap z-10 gap-7 px-3">
          <template v-for="item in DownList.down">
            <a :href="item.href" class="p-4 flex flex-row items-center gap-3 rounded-2xl hover:bg-[#2df399] hover:scale-105 transition-all duration-300 text-black bg-[#39c17d]">{{
                item.title }}

              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.34149 10.2526C4.92586 9.88889 4.88374 9.25713 5.24742 8.84149C5.61111 8.42586 6.24287 8.38374 6.6585 8.74742L9 10.7962L9 0.999999C9 0.447714 9.44772 -9.2251e-07 10 -8.74228e-07C10.5523 -8.25945e-07 11 0.447714 11 0.999999L11 10.7962L13.3415 8.74742C13.7571 8.38374 14.3889 8.42586 14.7526 8.84149C15.1163 9.25713 15.0741 9.88889 14.6585 10.2526L10.6585 13.7526C10.2815 14.0825 9.71852 14.0825 9.34149 13.7526L5.34149 10.2526ZM18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13L20 16C20 17.1046 19.1046 18 18 18L2 18C0.89543 18 -1.49533e-06 17.1046 -1.39876e-06 16L-1.1365e-06 13C-1.08821e-06 12.4477 0.447715 12 0.999999 12C1.55228 12 2 12.4477 2 13L2 16L18 16L18 13Z"
                      fill="#1C1D22" />
              </svg>
            </a>
          </template>
        </div>

      </div>
    </div>

    <!-- 流媒体支持 -->
     <Home_Media></Home_Media>

    <!-- 国家 -->
    <home_-country></home_-country>

    <!-- 价格 -->
    <Home_Pric :data="taocan"></Home_Pric>
  </div>

</template>


<style scoped>

.fg {
  box-shadow: 1px 2px 115px 124px #7714e478;
  position: absolute;
  right: 30%;
  overflow: hidden;
}
.keyong svg{
  width: 100%;
  height: 100%;
}

</style>