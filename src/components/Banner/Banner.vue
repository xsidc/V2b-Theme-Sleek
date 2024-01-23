<script setup>
import {useDataStore} from "@/store/user.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import i18n from "../../../public/i18n/i18n.js";

const show=useDataStore()

const copy_invite=()=>{
  navigator.clipboard.writeText(window.location.host+"/#/?code="+show.Invite.codes[0].code)
      .then(()=>{
        Show_Alerts(i18n.global.t('Dashboard.Copy_Success'),i18n.global.t('Dashboard.Copy_Success_Prompt'),200)
      }).catch(()=>{
    Show_Alerts(i18n.global.t('Error.Copy'),i18n.global.t('Error.Http'),400)
  })
}

</script>
<template>

  <div class="h-56 w-full text-white p-10 flex flex-col justify-evenly rounded-2xl bg-stone-800 relative bg">
    <h1 class="text-3xl ">{{i18n.global.t('Banner.Title')}}</h1>
    <p class="text-xl mt-3">{{ i18n.global.t('Banner.Title1') }}{{show.Invite!==undefined?show.Invite.stat[3]:''}}</p>

    <div class="flex gap-10">
      <p @click="copy_invite" class="cursor-pointer p-3 rounded-lg bg-[#611797] shadow-xl shadow-[#611797]  mt-5">{{ i18n.global.t('Banner.Copy') }}</p>
      <!--      <p @click="copy_haibao" class="cursor-pointer p-3 rounded-lg bg-slate-900 border border-green-700">分享海报</p>-->
    </div>
    <img class="w-[60%] pointer-events-none absolute -right-[15%] -bottom-20 scale-[1] lg:-bottom-[80%] lg:max-w-[50%] z-10 lg:-top-[10%] lg:-right-[10%]" src="/img/klipartz.com.png" alt="">
  </div>



</template>

<style scoped>
h1,p,a{
  text-shadow: 0 0 10px white;
}
.bg{
//background: #fc5c7d;
//background: -webkit-linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251));
//background: linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251));
  background: url("/img/banner.jpg") no-repeat 100%;
  background-size: cover;
}
</style>