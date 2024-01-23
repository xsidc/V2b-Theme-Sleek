<script setup>
import {defineProps} from 'vue'
import {useUserStore} from "@/store/user.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {useRouter} from "vue-router";
import i18n from "../../../public/i18n/i18n.js";
const router=useRouter()
const store=useUserStore()

const pop=defineProps({
  data:Array
})



const go=()=>{
  if (store.Auth_key===undefined){

    Show_Alerts( i18n.global.t('Error.No_Sign'),null,400)
  }else {
    router.push("/dashboard/plan")
  }
}
</script>
<template>

  <main class="max-w-6xl mx-auto pt-10 pb-36 px-8 mt-28">

    <div class="max-w-md mx-auto mb-14 text-center">
      <h1 class="text-4xl font-semibold text-gray-500 mb-6 lg:text-5xl"><span class="text-indigo-600">{{$t('Home.Plan_Title')}}</span></h1>
      <p class="text-xl text-gray-500 font-medium">{{$t('Home.Plan_Title11')}}</p>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-center gap-20">

      <template v-for="item in pop.data">
        <div class=" bg-[#111111]  shadow-gray-800 mt-8 p-8  max-w-96  shadow-xl rounded-3xl ">
          <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg" alt="" class="rounded-3xl w-20 h-20"/>
            <div class="ml-5">
              <span class="block text-gray-300 text-2xl font-semibold">{{item.title}}</span>
              <span><span class="font-medium text-gray-500 text-xl align-top">¥&thinsp;</span><span
                  class="text-3xl text-green-700 font-bold">{{item.money}} </span></span><span class="text-gray-500 font-medium">/ {{$t('Home.Currency')}}</span>
            </div>
          </div>
          <ul class="mb-7 font-medium text-gray-500">
            <template v-for="item1 in item.cent">
              <li class="flex text-lg mb-2">
                <img  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"/>
                <span class="ml-3">{{ item1 }}</span>
              </li>
            </template>

          </ul>
          <a href="javascript:;" @click="go"
             class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
            {{$t('Home.GoPay')}}
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" alt=""/>
          </a>
        </div>
      </template>



    </div>

  </main>


</template>
