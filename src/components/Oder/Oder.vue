<script setup>
import {useDataStore} from "@/store/user.js";
import InfoNo from "@/components/InfoNo/InfoNo.vue"
import {Show_Alerts} from "@/components/Alerts/index.js";
const show=useDataStore()


const copy_oder=(index)=>{
  let text=show.OderList[index].trade_no
  navigator.clipboard.writeText(text)
      .then(()=>{
        Show_Alerts("复制成功",null,200)
      })
}
</script>
<template>
  <template v-if="show.OderList!==undefined && show.OderList.length>0">
    <div class="w-full h-full relative">
      <div class="flex absolute top-0 bottom-0 left-0 right-0 m-auto">
        <div class="flex flex-col gap-5 whitespace-nowrap overflow-scroll">
          <div
              class="a1 items-center"
              v-for="(item,index) in show.OderList">
            <p
                class="px-1 text-sm mr-5 text-center rounded-[5px] w-[5rem]"
                style="line-height: 25px"

                :class="item.status===0?'text-yellow-600 cursor-pointer  bg-yellow-200':item.status===2?'text-red-600 cursor-no-drop bg-red-200':'text-green-600  bg-green-200'"
            >{{item.status===0?'待支付':item.status===2?'取消':'成功'}}</p>
            <p class="w-[6rem] text-[var(--theme-title)] overflow-ellipsis overflow-hidden">{{item.plan.name}}</p>
            <p class="w-[8rem] text-[var(--theme-title)] ml-5 overflow-ellipsis overflow-hidden">{{ item.plan.transfer_enable }}G流量</p>
            <p class="w-[4rem] text-[var(--theme-title)] ml-5 overflow-ellipsis overflow-hidden">  {{ (item.total_amount/100).toFixed(2) }}{{show.Comm_config.currency_symbol}}</p>
            <span @click="copy_oder(index)" class="p-2 ml-5 bg-[var(--theme-button-imp)] text-[var(--theme-button-color)] rounded-lg cursor-pointer" >复制单号</span>

          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="w-full h-full relative">
    <InfoNo :title="'暂无订单'">
    </InfoNo>
      </div>
  </template>
</template>

<style scoped>
.a1{
  display: -webkit-box;
}
</style>