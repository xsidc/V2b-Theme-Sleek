<script setup>
import {defineProps} from 'vue'
import {Go_PAY} from "@/components/Go_pay/index.js";
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'


const pop= defineProps({
  data: Object,
  move_node: Function
})

const gopay=()=>{
  Go_PAY(pop.data.trade_no)
  pop.move_node()
}
</script>
<template>
  <template v-if="data.status===0">
    <div class="fixed  z-50 top-0 left-0 right-0">
        <div class="flex justify-center p-8">
<!--          <div class="bg-[var(&#45;&#45;theme-model-bg)] text-[var(&#45;&#45;theme-title)]-->
<!--          lg:w-96 w-72 rounded-lg shadow-lg  p-4">-->
<!--            <div class=" gap-5 items-center mb-4 flex    ">-->
<!--              <div class="w-12">-->
<!--                <div class="text-2xl p-2 bg-indigo-600 rounded-full">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
<!--                  </svg>-->

<!--                </div>-->
<!--              </div>-->
<!--              <div class="w-64 flex-1">-->
<!--                <h4 class=" font-bold">您有订单尚未支付！</h4>-->
<!--              </div>-->
<!--              <div class="bg-[var(&#45;&#45;theme-button-imp)]  rounded-lg cursor-pointer p-2">-->
<!--                <button class=" lg:text-sm  " @click="gopay">去处理</button>-->
<!--              </div>-->
<!--            </div>-->
<!--            <p class="whitespace-nowrap overflow-ellipsis w-full overflow-hidden">订单编号: {{pop.data.trade_no}}</p>-->
<!--          </div>-->
          <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <ExclamationTriangleIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                 您有订单未处理/未支付！ 
                  {{ ' ' }}
                  <span @click="gopay" class="cursor-pointer font-medium text-yellow-700 underline hover:text-yellow-600">去处理/去支付</span>
                </p>
              </div>
            </div>
          </div>

        </div>

    </div>
  </template>

</template>