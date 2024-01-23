<script setup>
import AddTicket from "./AddTicket.vue";
import InfoNo from "@/components/InfoNo/InfoNo.vue";
import {useDataStore} from "@/store/user.js"
import {Get_ticket} from "@/api/v1/data.js";
import ticket_table from './Table.vue'

const show = useDataStore()

Get_ticket().then(res=>{
  show.Ticket=res.data.data
})


</script>
<template>
  <div class="flex flex-col ">
    <div>
      <AddTicket></AddTicket>
    </div>
    <p class="mt-2 text-neutral-400">有啥问题这里添加工单 会有客服给予回答</p>
    <div class="mt-10 overflow-scroll w-full mx-auto">
      <template v-if="show.Ticket!==undefined && show.Ticket.length>0">
        <ticket_table></ticket_table>
      </template>
      <template v-else>
        <div class="w-full h-full">
          <InfoNo :title="'暂无工单'"></InfoNo>
        </div>
      </template>
    </div>
  </div>


</template>
