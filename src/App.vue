<script setup>
import {useUserStore} from "@/store/user.js";

const store = useUserStore()
</script>
<template>
  <div :class="store.Theme?'theme_dark bg-[var(--theme-bg)]':'theme_white'">
    <div class="w-full h-full ">
      <router-view></router-view>
    </div>
    <div id="Login"></div>
    <div id="Alert" class="absolute z-[100]"></div>
    <div id="Model" class="z-20"></div>
    <div id="Loading" class="absolute z-[80]"></div>
    <div id="IsPay"></div>
  </div>
  
</template>
