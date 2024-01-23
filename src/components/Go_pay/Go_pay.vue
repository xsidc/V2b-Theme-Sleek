<script setup>

import {onMounted,defineProps,ref} from "vue";
import {GetPaymentMethod, Post_oder_cancel, order_checkout, Get_oder} from "@/api/v1/Pay.js";
import {Show_Alerts} from '@/components/Alerts/index.js'
import {useDataStore} from "@/store/user.js";
import {Is_Pay} from "@/components/Pay_cancel/index.js";
import router from "@/router/index.js";
const show=useDataStore()

const pop=defineProps({
  data:Number,
  move_node:Function
})

const pay_list=ref()
GetPaymentMethod().then(res=>{
  pay_list.value=res.data.data
}).catch(()=>{
  Show_Alerts("加载失败 请刷新",null,400)
})

const close_pop=()=>{
  pop.move_node()
}


// 支付
const go=(id)=>{
  order_checkout(pop.data,id).then(res=>{
    if (res.data.data===true){
      router.push("/dashboard")
    }else {
      window.location.href=res.data.data
    }
    
  }).catch(err=>{
    Show_Alerts(err.data.message,null,400)
  }).finally(()=>{
    pop.move_node()
  })
}


// 取消 
const cancel=()=>{
    Post_oder_cancel(pop.data).then(res=>{
      Show_Alerts("取消成功",null,200)
      Get_oder().then(res=>{
        show.OderList=res.data.data
        Is_Pay(show.OderList[0])
      })
      pop.move_node()
    }).catch(err=>{
        Show_Alerts("取消失败","重新尝试刷新",400)
    })
}
</script>
<template>
  <div class="absolute w-full h-full top-0 bg-[rgba(0,0,0,0.5)]">
    <div class="w-full h-full flex justify-center items-center">
      <div class="bg-[var(--theme-model-bg)]  text-[var(--theme-title)] shadow-lg shadow-[var(--theme-shadow-bg)]
      relative lg:w-[25rem] w-[22rem]  rounded-2xl p-5">
        <!--        关闭-->
        <div class="absolute top-0 right-0 cursor-pointer" @click="close_pop">
          <svg t="1694499094039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16661" width="32" height="32"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#5090F1" p-id="16662"></path><path d="M512 455.431l169.706-169.705a8 8 0 0 1 11.313 0l45.255 45.255a8 8 0 0 1 0 11.313L568.57 512l169.705 169.706a8 8 0 0 1 0 11.313l-45.255 45.255a8 8 0 0 1-11.313 0L512 568.57 342.294 738.274a8 8 0 0 1-11.313 0l-45.255-45.255a8 8 0 0 1 0-11.313L455.43 512 285.726 342.294a8 8 0 0 1 0-11.313l45.255-45.255a8 8 0 0 1 11.313 0L512 455.43z" fill="#FFFFFF" p-id="16663"></path></svg>        </div>
        <!--        标题-->
        <div class="text-xl flex items-center">
          <h1>订单：</h1>
          <p class="text-sm">{{pop.data}}</p>
        </div>

        <!--        支付-->
        <div class="mt-5 flex items-center">
          <div
              v-for="item in pay_list"

              class="grid grid-cols-2 w-full gap-5 ">
            <div
                @click="go(item.id)"
                class="bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
                flex gap-2 items-center rounded-lg p-2 cursor-pointer">
              <img class="w-5" src="/public/icon/pay.svg" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>

<!--        支付取消-->
        <div class="mt-10 w-full text-center">
          <button
              @click="cancel"
              type="button" class="w-[80%] p-2 bg-green-600 rounded-2xl">关闭/取消订单</button>
        </div>


      </div>
    </div>

  </div>
</template>