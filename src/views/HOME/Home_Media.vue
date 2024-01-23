<script setup>

const streammedia=window.config.streammedia
</script>
<template>
  <div class="flex justify-center overflow-hidden mt-[4rem]">
    <div class="main flex flex-col max-w-[1300px] w-[1300px] justify-around px-11 py-4 relative">
      <div class="text-center ">
        <h1 class="text-4xl text-slate-400 mb-14">{{ $t('Home.Support_Video') }}</h1>
        <div class="flex flex-row gap-12 items-end sm:w-[100%] w-[100vw]  overflow-auto ">
          <div v-for="item in streammedia" class="flex items-center">
            <img class="w-16 sm:w-22 max-w-none" :src="item.img" alt="">
            <p class="sm:text-xl text-white cursor-pointer">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>