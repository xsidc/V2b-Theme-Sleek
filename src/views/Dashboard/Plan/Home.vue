<script setup>
import {ref, onMounted, watch} from 'vue'
import { PlanFetch} from '@/api/v1/data.js'
import {PlanPay} from "./Plan_Pay/index.js";


const ClassIndex = ref(-1)
const data = ref(null)


// 小数点
const handel_number = (value) => {
  if (typeof value === 'number') {
    const stringValue = value.toString();
    const integerPart = stringValue.slice(0, -2);
    const decimalPart = stringValue.slice(-2);
    return `${integerPart}.${decimalPart}`;
  }
  return value;

}

const data_price = (price) => {

  switch (price) {
    case "month_price":
      return "月付";
    case "quarter_price":
      return "季付";
    case "half_year_price":
      return "半年";
    case "year_price":
      return "年付";
    case "two_year_price":
      return "俩年付";
    case "three_year_price":
      return "三年付";
    case "onetime_price":
      return "一次性";
    case "reset_price":
      return "重置价格";
    default :
      return false;

  }
}

onMounted(() => {
  PlanFetch().then(res => {
    if (Array.from(res.data.data).length > 0) {
      ClassIndex.value = 0
      data.value = Array.from(res.data.data)
    }
  })


})


const data_data = ref()
const data_data_price = ref([])
watch(ClassIndex, value => {
  data_data.value = data.value[value]
  data_data_price.value.splice(0)
  for (const Key in data_data.value) {
    if (data_data.value[Key] !== null) {
      let name = data_price(Key)
      if (name !== false) {
        data_data_price.value.push({
          name: name,
          title: Key,
          number: data_data.value[Key]
        })
      }
    }
  }

})


const handel_price = (price) => {
  let arr = []
  for (const priceKey in price) {
    if (priceKey.indexOf("_price") !== -1 && price[priceKey] !== null) {
      arr[0] = data_price(priceKey)
      arr[1] = handel_number(price[priceKey])
      break
    }
  }

  return arr
}

// 支付
const Pay = () => {
  let item = data.value[ClassIndex.value]

  PlanPay(item)

}

</script>
<template>


  <div class="shadow-lg shadow-[var(--theme-shadow-bg)] text-[var(--theme-title)]
  relative rounded-2xl lg:-mt-7 overflow-y-scroll   h-full   ">

    <template v-if="data!==null">
      <div class="bg-[var(--theme-com)] 
      w-[100%] items-center lg:p-14  py-5   h-full  flex gap-10">
        <div class="hidden lg:block flex-1">
          <img src="/img/banner2.png" alt="">
        </div>
        <div class="lg:w-[70%] w-full px-5 h-full  ">
          <div class=" relative flex flex-col  h-full">
            <div class="lg:ml-5">
              <p class=" w-full
              lg:text-xl text-xl p-2  rounded-lg inline-block ">套餐名称：{{ data[ClassIndex].name }}</p>
            </div>
            <!--  内容填充  -->
            <div class="bg-[var(--theme-com-item)]
            mt-2 sm:flex-1  w-full sm:overflow-scroll sm:ml-5 mb-2 p-5 rounded-lg">
              <div v-html="data[ClassIndex].content" class="">
                
              </div>
            </div>


            <div class="px-5">

              <p class="text-xl mb-2">配置项：</p>
              <div class="flex gap-5 items-center text-lg">
                <span class="border-4 border-green-500 w-0 h-0  rounded-full"></span>
                <p class="">周期流量：{{ data[ClassIndex].transfer_enable }}G</p>
              </div>
              <div class="flex gap-5 items-center text-lg">
                <span class="border-4 border-green-500 w-0 h-0  rounded-full"></span>
                <p>巅峰限速：{{ data[ClassIndex].speed_limit == null ? '无限制' : data[ClassIndex].speed_limit }}/MS</p>
              </div>


              <div class="w-full overflow-scroll">
                <ul class="flex gap-5 ">
                  <template v-for="(item,index) in data_data_price" :key="index">
                    <li
                        class="rounded-md  py-4 text-sm focus:relative text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span
                          class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p class="whitespace-nowrap text-sm"> {{ item.name }}: {{ handel_number(item.number) }}</p>
                      </span>
                    </li>
                  </template>
                </ul>
              </div>
            </div>


            <!--            列表支付 金额-->
            <div class="flex  items-center">
              <!--            商品列表-->
              <div class="p-5 sm:max-h-[150px] sm:overflow-y-scroll overflow-x-scroll ">
                <ul class="flex flex-row  flex-nowrap gap-5 sm:flex-wrap">
                  <li v-for="(item,index) in data" :key="index"
                      :class="index===ClassIndex?'border-[#08CD7C] border-2':'border-2 '"
                      @click="ClassIndex=index"
                      class="relative p-2 px-5 shadow-sm shadow-[#08CD7C] w-36  text-center rounded-xl cursor-pointer hover:border-[#08CD7C]">
                    <div>
                      <p class=" whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {{ item.name }}
                      </p>
                      <span class="absolute -top-3 text-white text-sm bg-[#08CD7C] rounded-lg px-2 left-0">{{ item.transfer_enable }}G/{{ handel_price(item)[0] }}</span>
                      <div class="flex flex-col items-center gap-0">
                         <span class="text-[13px] whitespace-nowrap text-neutral-400">
                           {{ handel_price(item)[1] }} - {{ item.speed_limit == null ? '无限制' : item.speed_limit }}/MS
                         </span>
                        <!--                        <span class="text-[13px] whitespace-nowrap text-neutral-400 flex gap-2">-->
                        <!--                         -->
                        <!--                         </span>-->
                      </div>
                    </div>
                    <svg :class="index===ClassIndex?'block':'hidden'" t="1693782622038"
                         class="icon absolute top-0 right-0"
                         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4230" width="20"
                         height="20">
                      <path
                          d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z"
                          fill="#08CD7C" p-id="4231" data-spm-anchor-id="a313x.search_index.0.i2.3aaf3a810MN6jV"
                          class="selected"></path>
                      <path
                          d="M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-104.489796-104.489796c-8.359184-8.359184-8.359184-21.420408 0-29.779591 8.359184-8.359184 21.420408-8.359184 29.779592 0l104.489795 104.489796c8.359184 8.359184 8.359184 21.420408 0 29.779591-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                          fill="#DCFFFA" p-id="4232"></path>
                      <path
                          d="M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779591l208.979591-208.979592c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779592l-208.979592 208.979591c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                          fill="#DCFFFA" p-id="4233"></path>
                    </svg>
                  </li>
                  
                </ul>
              </div>


            </div>
            <!--            支付按钮-->
            <div class="pb-24 sm:pb-5 sm:mt-5">
              <button type="button"
                      @click="Pay"
                      class="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-[#08CD7C] text-gray-900">立即支付
                <span class="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">Go~</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </template>
  </div>


</template>
<style scoped>
.Btn {
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
}

.svgIcon {
  width: 16px;
}

.svgIcon path {
  fill: white;
}

.Btn::before {
  width: 130px;
  height: 130px;
  position: absolute;
  content: "";
  background-color: white;
  border-radius: 50%;
  left: -100%;
  top: 0;
  transition-duration: .3s;
  mix-blend-mode: difference;
}


.Btn:active {
  transform: translate(5px, 5px);
  transition-duration: .3s;
}
</style>