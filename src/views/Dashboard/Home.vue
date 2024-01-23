<script setup>
import {useUserStore,useDataStore} from "@/store/user.js";
import Home_App_Icon from "@/views/Dashboard/Home_App_Icon.vue";
import Home_Nav from "@/views/Dashboard/Home_Nav.vue";
import {Init} from "@/views/Dashboard/index.js";
import {onMounted, ref} from "vue";
const store=useUserStore()
const store1=useDataStore()
const title=window.config.title

onMounted( ()=>{
   Init()
  
})
const show_dashboard=ref(false)
</script>
<template>
  <div class="w-full bg-[var(--theme-bg)] h-screen">
<!--    手机移动导航-->
    <div class="lg:hidden fixed top-0 w-full z-20">
      <div class="absolute bg-[var(--theme-nav-bg)] w-full  p-2 z-50">
        <div class="flex  justify-between">
          <div class="text-center flex gap-5 ml-2 items-center">
            <img class="w-12" src="/img/logo.png" alt="">
            <p class="text-[var(--theme-title)] text-3xl">{{ title }}</p>
          </div>
          <div class=" z-30  ">
            <Home_App_Icon></Home_App_Icon>
          </div>
        </div>
      </div>
      <div class=" fixed top-0 bottom-0 text-[var(--theme-title)] left-0  z-20 bg-[var(--theme-nav-bg)]" :class="store1.nav?'right-0 block':'hidden'">
        <Home_Nav></Home_Nav>
      </div>

    </div>
    
<!--    电脑-->
    <div class="max-w-[1800px] w-full h-full flex flex-col justify-center m-auto lg:h-screen ">
      <div class=" flex  overflow-hidden lg:h-[850px] h-full">
        <!-- 侧边导航 -->
        <div class="p-5 m-7 bg-[var(--theme-nav-bg)]   w-64 rounded-3xl flex-col justify-around hidden lg:flex lg:relative lg:left-0">
          <Home_Nav></Home_Nav>
        </div>


        <!-- 内容 -->
        <div class=" rounded-3xl flex-grow flex-col w-full lg:p-7 lg:m-7 mt-10  ">


          <div class=" h-full pt-7 px-4 sm:px-0 lg:mt-10">
            <router-view></router-view>
          </div>


        </div>
      </div>
    </div>
    
  </div>
</template>