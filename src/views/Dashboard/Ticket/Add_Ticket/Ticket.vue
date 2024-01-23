<script setup>
import {defineProps, ref, render} from 'vue'
import rank from './rank.vue'
import {Get_ticket, Save_ticket} from '@/api/v1/data.js'
import {Show_Alerts} from "@/components/Alerts/index.js";
import {useDataStore} from "@/store/user.js";
const show=useDataStore()

const pop=defineProps({
  renode:Function
})
const rank_index=ref(0)
const title=ref('')
const cont=ref('')
const save=()=>{
  Save_ticket(title.value,rank_index.value,cont.value).then(res=>{
    Show_Alerts("提交成功","等待回答",200)
    Get_ticket().then(res=>{
      show.Set_Ticket(res.data.data)
    })
    pop.renode()
  }).catch(err=>{
    Show_Alerts("提交失败","检查是否完整",400)
  })
}
</script>
<template>
  <div class="absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0">
    <div class="w-screen h-screen flex fixed top-0 items-center justify-center ">
      <div class="bg-[var(--theme-model-bg)] shadow-lg shadow-[var(--theme-shadow-bg)] 
    lg:w-1/4  p-5 rounded-xl ">
        <form class="form text-[var(--theme-text)]">
          <div class="flex gap-2">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" height="34" width="34">
                <path stroke-linejoin="round" stroke-width="2.5" stroke="#115DFC" d="M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"></path>
                <path stroke-linejoin="round" stroke-width="2.5" stroke="#115DFC" d="M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"></path>
                <path stroke-width="2.5" stroke="#115DFC" d="M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"></path>
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#115DFC" d="M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"></path>
              </svg>
            </div>
            <div class="note">
              <label class="text-lg text-[var(--theme-title)]">添加新的工单</label>
              <span class="text-neutral-400">请简要的描述您遇到的问题～</span>
            </div>
          </div>
          <input v-model="title"
                 placeholder="标题"
                 class="bg-[var(--theme-com-item)]
                 mt-1 p-3 w-full rounded-md  sm:text-sm"
          />
          <textarea v-model="cont"
                    placeholder="描述内容"
                    class="bg-[var(--theme-com-item)]
                    mt-1 p-3 w-full rounded-md  sm:text-sm"
          />
          <rank v-model:rank_index="rank_index"></rank>
          <div class="grid grid-cols-2 gap-5 w-full">
            <button type="button" @click="renode" class="p-2 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">取消</button>
            <button type="button" @click="save" class="p-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>


<style scoped>
.popup {
  position: relative;
  width: 320px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #ECF1FD;
  box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 5px;
}

.note {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: #2B2B2F;
}

.subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #5F5D6B;
}

.input_field {
  width: 100%;
  height: 42px;
  padding: 0 0 0 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
  drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 1px #2B2B2F;
  background-color: transparent;
}

.form button.submit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 100%;
  height: 42px;
  background: linear-gradient(180deg, #4480FF 0%, #115DFC 50%, #0550ED 100%);
  box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 5px;
  border: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
}

</style>