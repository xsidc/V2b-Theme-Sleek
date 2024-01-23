<script setup>
const country=window.config.country
</script>

<template>
  <div class="flex justify-center mt-32 p-2" >
    <div class="main  max-w-[1300px] w-[1300px]  justify-between  ">
      <h1 class="text-4xl mb-12 text-center text-slate-400">{{$t('Home.Support_Country')}}</h1>
      <div class=" sm:grid-cols-4 grid-cols-2 grid gap-4">
        <div v-for="item in country"  class="headline p-4 rounded-3xl m-2 flex flex-wrap gap-4 bg-slate-800 relative items-center">
          <span class="keyong w-6 h-6" v-html="item.img"></span>
          <div class="flex flex-col flex-1">
            <p class=" text-slate-300 text-xl">{{item.title}}</p>
            <p class=" text-slate-400">{{item.title1}}</p>
          </div>
          <span v-if="item.hasOwnProperty('lable') " class=" absolute bg-[#4cd0a1] rounded-xl right-[0%] p-1 top-0  inline-table">{{ item.lable }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
span>>>svg{
  width: 100%;
  height: 100%;
}
</style>