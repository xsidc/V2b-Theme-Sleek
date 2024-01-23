<script setup>
import {Get_oder, Order_Save, Post_coupon_check} from "@/api/v1/Pay.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {computed, defineProps, onMounted, ref, watch} from 'vue'
import {Go_PAY} from "@/components/Go_pay/index.js";
import {useDataStore} from "@/store/user.js";
const show = useDataStore()

const pop=defineProps({
  data: Object,
  move_node: Function
})


const close_pop=()=>{
  pop.move_node()
}
const code=ref(null)

const handel_data_price = (price) => {

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

const data_price=ref([])

const price_index=ref(0)

const youhui=ref(null)
// 数据监听
watch(pop.data,item => {
  for (const valueKey in item) {
    if (item[valueKey]!==null){
      if (handel_data_price(valueKey)){
        data_price.value.push({
          title:handel_data_price(valueKey),
          name:valueKey,
          number:item[valueKey]
        })
      }
    }
  }

},{immediate:true})
const coupon_check=()=>{
  Post_coupon_check(pop.data.id,code.value).then(res=>{
    youhui.value=res.data.data
  })
      .catch(err=>{
        Show_Alerts(err.data.message,null,400)
        code.value=null
      })
}


// 支付
const go_pay=()=>{

  let period=data_price.value[price_index.value].name
  let id=pop.data.id
  Order_Save(period,id,code.value).then(res=>{
    Show_Alerts("订单创建成功","请支付",200)
    pop.move_node()
    Go_PAY(res.data.data)
  }).catch(err=>{
    Show_Alerts("订单提交失败！",err.data.message,400,4000)
    console.log(err.data.message.indexOf("未付款")!==-1)
    if (err.data.message.indexOf("未付款")!==-1){
      Get_oder().then(res=>{
        show.OderList=res.data.data
        for (let i=0;i<res.data.data.length;i++){
          console.log(res.data.data[i])
          if (res.data.data[i].status===0){
            Go_PAY(res.data.data[i].trade_no)
          }
        }
      })
    }
  })

}
</script>
<template>
  <div class="absolute w-full h-full top-0 bg-[rgba(0,0,0,0.5)]">
    <div class="w-full h-full flex justify-center items-center">
      <div class=" bg-[var(--theme-model-bg)]  text-[var(--theme-title)] shadow-lg shadow-[var(--theme-shadow-bg)]
      relative lg:w-[25rem] w-[22rem] rounded-2xl p-5">
        <!--        关闭-->
        <div class="absolute top-0 right-0 cursor-pointer" @click="close_pop">
          <svg t="1694499094039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16661" width="32" height="32"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#5090F1" p-id="16662"></path><path d="M512 455.431l169.706-169.705a8 8 0 0 1 11.313 0l45.255 45.255a8 8 0 0 1 0 11.313L568.57 512l169.705 169.706a8 8 0 0 1 0 11.313l-45.255 45.255a8 8 0 0 1-11.313 0L512 568.57 342.294 738.274a8 8 0 0 1-11.313 0l-45.255-45.255a8 8 0 0 1 0-11.313L455.43 512 285.726 342.294a8 8 0 0 1 0-11.313l45.255-45.255a8 8 0 0 1 11.313 0L512 455.43z" fill="#FFFFFF" p-id="16663"></path></svg>        </div>
        <!--        标题-->
        <div class="text-xl">
          <p>订单详情</p>
        </div>

        <!--        套餐行-->
        <div class="mt-5 flex items-center">
          <img class=" rounded-lg lg:w-24 w-20" src="/public/icon/套餐.svg" alt="">
          <div class="flex w-full justify-around items-center">
            <!--            套餐标题内容-->
            <div class="flex flex-col">
              <h1 class="text-lg whitespace-nowrap overflow-ellipsis overflow-hidden">{{ pop.data.name }}</h1>
              <div>
                <div class="flex gap-2 items-center">
                  <span class="border-4 border-green-500 w-0 h-0  rounded-full"></span>
                  <p>周期流量：{{ pop.data.transfer_enable }}G</p>
                </div>
                <div class="flex gap-2 items-center">
                  <span class="border-4 border-green-500 w-0 h-0  rounded-full"></span>
                  <p>套餐限速：{{pop.data.speed_limit===null?'无限':pop.data.speed_limit}}/MS</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!--        优惠码行-->
        <div class="mt-4 ">
          <p >优惠码</p>
          <div class="flex mt-2 justify-between gap-5 px-2">
            <input
                v-model="code"
                class="bg-[var(--theme-com-item)]
                flex-1 indent-2    rounded-lg p-1 outline-0" type="text"  placeholder="可选项">
            <button type="button"
                    @click="coupon_check"
                    class="text-sm rounded-lg text-black bg-green-600 px-2 py-1">验证优惠码</button>
          </div>
        </div>


        <!--        套餐年费-->
        <div class="mt-5">
          <p class="text-sm mb-2">周期选项</p>
          <div class="w-full overflow-scroll">
            <div class="flex gap-5 flex-wrap">
              <template v-for="(item,index) in data_price">

                <p @click="price_index=index"
                   :class="price_index===index?'text-green-400 border border-green-400':''"
                   class="bg-[var(--theme-com-item)]
                   cursor-pointer px-2 py-1 rounded-lg whitespace-nowrap  ">
                  {{item.title}}:
                  {{youhui!=null?youhui.type===1?(item.number/100)-(youhui["value"]/100).toFixed(2):(item.number/100-(item.number/100*youhui["value"]/100)).toFixed(2):(item.number/100).toFixed(2)}}
                </p>

              </template>

            </div>
          </div>
        </div>


        <!--         支付-->
        <div class="w-full text-center mt-5">
          <button @click="go_pay" class="w-[80%] p-2 bg-green-500 text-black rounded-3xl  ">去支付</button>
        </div>

      </div>
    </div>

  </div>
</template>

