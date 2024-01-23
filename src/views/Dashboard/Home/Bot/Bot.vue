
<script setup>
import {onMounted, ref} from "vue";
import {getBotInfo} from "@/api/v1/data.js";
import i18n from "../../../../../public/i18n/i18n.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {useDataStore} from "@/store/user.js";
const store=useDataStore()

const pop=defineProps({
  move_node:Function
})
const show=ref(true)
const esc=()=>{
  show.value=false
  pop.move_node()
}

const bot=ref('')
const url=window.config.hosturl
onMounted(async ()=>{
  try {
   let res= await getBotInfo()
    bot.value=res.data.data.username
  }catch (err){
    Show_Alerts(i18n.global.t('Error.Open'),null,400)
    show.value=false
    pop.move_node()
  }
})

</script>
<template>
  <div class="fixed top-0 bottom-0 left-0 right-0">
    <div class="flex  w-full h-full justify-center items-center">
      <div class=" bg-[var(--theme-com)] shadow-lg shadow-[var(--theme-shadow-bg)]  
      w-96 animate__animated  show rounded-xl  relative z-30 p-5"
           :class="show?'animate__fadeIn':'animate__fadeOut'"
      >
        <h1 class="text-[var(--theme-title)] text-xl">{{i18n.global.t('Dashboard.Bot')}} </h1>
        <div class="text-[var(--theme-text)] mt-5">
          <p class="text-lg">{{i18n.global.t('Dashboard.Bz1')}}</p>
          <p class="mt-2">{{i18n.global.t('Dashboard.BZ1_Title')}}@{{bot}}</p>
        </div>
        <div class="text-[var(--theme-text)] mt-5">
          <p class="text-lg">{{i18n.global.t('Dashboard.Bz2')}}</p>
          <p class="mt-2">/bind {{url}}api/v1/client/subscribe?token={{store.Subscribe.token}}</p>
        </div>
      </div>
      <div class="bg-[rgba(0,0,0,0.5)] w-full h-full absolute z-20" @click="esc"></div>
    </div>

  </div>
</template>

<style scoped>
.show{
  animation-duration: 0.5s;
}

</style>
