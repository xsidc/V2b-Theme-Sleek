<script setup>
import {defineProps,onMounted,ref} from 'vue'
import {Add_Chat, Get_Chat_ticket} from "@/api/v1/Chat.js";
import {Show_Alerts} from "@/components/Alerts/index.js";

const pop=defineProps({
  id:Number,
  remove:Function
})

const data=ref(null)
const input=ref('')

const newlist=()=>{
  Get_Chat_ticket(pop.id).then(res=>{
    data.value=res.data.data
  })
}
onMounted(()=>{
  newlist()

})


let xh_chat=setInterval(()=>{
  newlist()
  if (data.value.status===1){
    clearInterval(xh_chat)
  }
},10000)

const remove_pop=()=>{
  pop.remove()
  clearInterval(xh_chat)
}

const send=()=>{
  Add_Chat(pop.id,input.value).then(res=>{
    newlist()
  }).catch(err=>{
    Show_Alerts("提交失败",err.data.message,400)
  })




}
</script>
<template>
  <!-- chat box -->
  <div class="absolute z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
    <div class="w-screen h-screen flex fixed top-0 justify-center items-center ">
      <div class="shadow-md bg-[var(--theme-model-bg)] shadow-[var(--theme-shadow-bg)]  text-[var(--theme-title)]
    w-80 h-96 lg:w-[28rem] lg:h-[30rem] flex p-4 rounded-lg flex-col  ">
        <div class="flex items-center justify-between border-b p-2">
          <!--标题-->
          <div class="flex items-center">
            <img class="rounded-full w-10 h-10"
                 src="/img/touxiang.jpg" />
            <div class="pl-2">
              <div class="font-semibold">
                <p>客服</p>
              </div>
            </div>
          </div>

          <!--   关闭按钮-->
          <div>
            <button @click="remove_pop" class="inline-flex  rounded-full p-2" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>

        <!--    内容-->
        <div class="flex-1 px-4 py-4 overflow-y-auto">

          <template v-if="data!==null">
            <template v-for="(item,index) in data.message">

              <!--      客服-->
              <div v-if="item.is_me!==true" class="flex items-center mb-4">
                <div class="flex-none flex flex-col items-center space-y-1 mr-4">
                  <img class="rounded-full w-10 h-10"
                       src="/img/touxiang.jpg" />
                  <a href="#" class="block text-xs hover:underline">客服</a>
                </div>
                <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                  <div>{{ item.message }}</div>

                  <!-- arrow -->
                  <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                  <!-- end arrow -->
                </div>
              </div>

              <!--      我-->
              <div v-else class="flex items-center flex-row-reverse mb-4">
                <div class="flex-none flex flex-col items-center space-y-1 ml-4">
                  <img class="rounded-full w-10 h-10"
                       src="/img/touxiang.jpg" />
                  <a href="#" class="block text-xs hover:underline">我</a>
                </div>
                <div class="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
                  <div>{{item.message}}</div>

                  <!-- arrow -->
                  <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
                  <!-- end arrow -->
                </div>
              </div>
            </template>
          </template>



        </div>

        <div v-if="data!==null" class="flex items-center  p-2">

          <template v-if="data.status===1">
            <p class="m-auto">工单已关闭，如有新疑问，请添加新工单</p>
          </template>
          <template v-else>
            <!--      文字-->
            <div class="w-full mx-2">
              <input class="outline-0 w-full text-black p-2 rounded-full border border-gray-200" type="text" v-model="input" placeholder="Aa"  />
            </div>



            <!--      发送-->
            <div>
              <button @click="send"
                      class="inline-flex  rounded-full p-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </template>


        </div>
      </div>
    </div>
  </div>



  <!-- end chat box -->
</template>