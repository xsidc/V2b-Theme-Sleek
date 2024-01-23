<script setup>
import {onMounted} from "vue";
import {useDataStore} from "@/store/user.js";
import InfoNo from "@/components/InfoNo/InfoNo.vue";
const show=useDataStore()
onMounted(()=>{
  
})
</script>
<template>
  <!--节点在线数量 失联数量-->

  <template  v-if="show.ServerList!==undefined && show.ServerList.length>0">
    <div class="flex flex-col gap-4">
      <template v-for="item in show.ServerList">
        <div class="bg-[var(--theme-com-item)] text-[var(--theme-text)]  shadow-md shadow-[var(--theme-shadow-bg)]
        flex gap-3 items-center p-2  rounded-lg justify-around">
          <p class="whitespace-nowrap w-[5rem] overflow-ellipsis overflow-hidden">{{item.name}}</p>
          <p  class="whitespace-nowrap w-[5rem] overflow-ellipsis overflow-hidden">{{ item.type }}</p>
          <p>{{item.rate}}x</p>
          <p v-if="item.is_online===1" class="border-4 border-green-500 w-0 h-0  rounded-full"></p>
          <p v-else class="border-4 border-red-200 w-0 h-0  rounded-full"></p>
         
        </div>
      </template>
    </div>

  </template>
  <template v-else>
    <InfoNo :title="'暂无订阅'"></InfoNo>
  </template>


</template>