<script setup>
import {defineProps,ref} from 'vue'
import rank from './rank.vue'
import {useDataStore} from "@/store/user.js";
import {Post_transfer, Post_withdraw} from "@/api/v1/Pay.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import i18n from "../../../../../public/i18n/i18n.js";
const show=useDataStore()
const pop= defineProps({
  number:Number,
  move_node:Function
})


const money=ref()


const rank_index=ref('')
const list=ref()
list.value=show.Comm_config.withdraw_methods
rank_index.value=list.value[0]



const tx=()=>{
  Post_withdraw(money.value,rank_index.value).then(res=>{
    Show_Alerts(i18n.global.t('Invite.Withdrawal_Success'),i18n.global.t('Invite.Withdrawal_Success_Prompt'),200)
  }).catch(err=>{
    Show_Alerts(i18n.global.t('Error.Withdrawal'),err.data.message,400)

  })
}



const hz=()=>{
  Post_transfer(money.value).then(res=>{
    Show_Alerts(i18n.global.t('Invite.Transfer_assets_Success'),null,200)

  }).catch(err=>{
    Show_Alerts(i18n.global.t('Error.Transfer_assets'),err.data.message,400)

  })
}
</script>


<template>
<div class="absolute z-20 w-full h-full top-0 bg-[rgba(0,0,0,0.5)]">
  <div class="w-screen h-screen flex fixed top-0 items-center justify-center">
    <div class="bg-[var(--theme-model-bg)] shadow-lg shadow-[var(--theme-shadow-bg)]
     lg:w-1/4   p-5 rounded-xl ">
      <form class="form">
        <div class="flex gap-2">
          <div class="note">
            <label class="text-lg text-[var(--theme-title)]">{{pop.number===1?i18n.global.t('Invite.Withdrawal'):i18n.global.t('Invite.Transfer')}}</label>
            <span class="text-[var(--theme-text)]">{{pop.number===1?i18n.global.t('Invite.Withdrawal_Prompt'):i18n.global.t('Invite.Transfer_Prompt')}}</span>
          </div>
        </div>

        <input v-model="money"
               :placeholder="pop.number===1?i18n.global.t('Invite.Withdrawal_Input'):i18n.global.t('Invite.Transfer_Input')"
               class="mt-1 p-3 w-full rounded-md  text-[var(--theme-text)] bg-[var(--theme-com-item)] sm:text-sm"
        />

        <rank v-if="pop.number===1" v-model:rank_index="rank_index" :list="list"></rank>
        <div class="grid grid-cols-2 gap-5 w-full">
          <button type="button" @click="pop.move_node" class="p-2 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">取消</button>
          <template v-if="pop.number===1">
            <button type="button" @click="tx" class="p-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">提交</button>
          </template>
          <template v-else>
            <button type="button" @click="hz" class="p-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">提交</button>
          </template>
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