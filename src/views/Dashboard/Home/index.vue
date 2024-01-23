<script setup>

import {ref, onMounted} from 'vue'
import Banner from '@/components/Banner/banner.vue'

import Progress from '@/views/Dashboard/Home/Progress.vue'

import bulletin from '@/views/Dashboard/Home/bulletin.vue'
import Jiedian from "@/views/Dashboard/Home/Jiedian.vue";
import Oder from "@/components/Oder/Oder.vue";
import Table from "@/views/Dashboard/Ticket/Table.vue";
import i18n from "../../../../public/i18n/i18n.js";

const cs_index = ref(0)



</script>
<template>
  <div class=" flex  gap-10 justify-between h-full overflow-y-scroll overflow-x-hidden flex-col lg:flex-row">
    <!--    个人套餐-->
    <div class="left mt-20 lg:w-[23rem] lg:p-2">
      <div class="relative">
        <Progress></Progress>
      </div>


      <!--      公告-->
      <div class="mt-5 h-[19rem] bg-[var(--theme-com)] relative shadow-[var(--theme-shadow-bg)] shadow-lg rounded-xl">
        <bulletin></bulletin>
      </div>


    </div>

    <div class="right w-full lg:w-2/3">
      <Banner></Banner>
      <div class="flex sm:flex-row sm:gap-12 gap-5  flex-col mt-20 lg:h-[21rem]  bg-[var(--theme-com)] p-5 rounded-xl">
        <div class="left lg:w-1/3  rounded-xl">
          <h1 class="px-4 py-2 bg-[var(--theme-com-item)] text-[var(--theme-title)] shadow-[var(--theme-shadow-bg)] shadow-lg rounded-2xl">{{ i18n.global.t('Dashboard.Server') }} </h1>
          <div class="mt-5 relative w-full h-[15rem] lg:h-[80%] overflow-y-scroll">
            <Jiedian></Jiedian>
          </div>
        </div>

        <div class="right lg:w-2/3  flex-auto flex flex-col">
          <div class="flex gap-10 ">
            <p v-for="(item,index) in [i18n.global.t('Dashboard.Oder'),i18n.global.t('Dashboard.G')]" @click="cs_index=index"
               :class="cs_index===index?'shadow-[var(--theme-shadow-bg)] bg-[var(--theme-com-item)] shadow-lg ':''" class="rounded-2xl px-4 text-[var(--theme-title)] py-2 cursor-pointer">
              {{ item }}
            </p>
          </div>
          <div class="h-[16rem] mt-5 w-full   overflow-hidden">
            <!--            订单-->
            <template v-if="cs_index===0">
              <Oder></Oder>
            </template>
            <!--            工单-->
            <template v-else>
              <div class="relative w-full h-full ">
                <div class="flex absolute  top-0 bottom-0 left-0 right-0 m-auto">
                  <Table></Table>
                </div>

              </div>
            </template>
          </div>

        </div>
      </div>
    </div>

  </div>


</template>

<style scoped>

</style>