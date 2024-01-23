<script setup>
import Banner from "@/components/Banner/Banner.vue";
import {useDataStore} from "@/store/user.js";
import Table from "@/views/Dashboard/Invite/Table.vue";
import {Operate_Money} from "@/views/Dashboard/Invite/Money/index.js";
import i18n from "../../../../public/i18n/i18n.js";
const store=useDataStore()
</script>
<template>
  <div class="">
    <div class="sm:grid-cols-2 gap-5 grid text-[var(--theme-title)]">
      <div class="grid-cols-2 grid gap-5 mx-3">
        <div  v-for="(item,index) in i18n.global.t('Invite.Title').split(',')"
        class="bg-[var(--theme-com)] p-2 text-sm sm:text-md flex items-center justify-center rounded-2xl "
        >
          <p>{{item}}: </p>
          <p class="ml-2 text-lg font-bold text-left " v-if="store.Invite!==undefined">
            {{index===0?store.Invite.stat[index]:index===3?(store.Invite.stat[index+1]/100).toFixed(2):(store.Invite.stat[index]/100).toFixed(2)}}
          </p>
        </div>
      </div>
      
      <Banner></Banner>
    </div>
    
    <div class="mt-10">
      <div class="text-[var(--theme-title)] flex gap-5">
        <span class="rounded-lg ml-2  p-2 bg-[var(--theme-com)]">下单人数:{{store.Details!==undefined?store.Details.total:0}}</span>
        <button type="button" class="p-2 bg-[var(--theme-com)] rounded-lg" @click="Operate_Money(1)">{{ i18n.global.t('Invite.Withdrawal') }}</button>
        <button type="button" class="p-2 bg-[var(--theme-com)] rounded-lg" @click="Operate_Money(2)">{{ i18n.global.t('Invite.Transfer') }}</button>
      </div>
      <div class="mt-5">
        <Table></Table>
      </div>
    </div>
      
    

  </div>
</template>
