<script setup>
import {useDataStore} from "@/store/user.js";
import moment from 'moment'
import InfoNo from "@/components/InfoNo/InfoNo.vue";
import {Show_restart} from "@/views/Dashboard/Home/Restart/index.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {Link_Imp} from "@/views/Dashboard/Home/Link_Imp/index.js";
import Email from "@/views/Dashboard/Home/Email.vue";
import {Restart_Password} from "@/components/Restart_pass/index.js";
import {onMounted, ref, watch} from "vue";
import i18n from "../../../../public/i18n/i18n.js";
import {Show_Bot} from "@/views/Dashboard/Home/Bot/index.js";
import router from "@/router/index.js";
import {useUserStore} from "@/store/user.js";

const store = useDataStore()
const userstore=useUserStore()

// 重置
const restart = () => Show_restart()

// 复制链接
const Copy_link = (index) => {
  if (index === 0) {
    navigator.clipboard.writeText(store.Subscribe.subscribe_url)
        .then(() => {
          Show_Alerts(i18n.global.t('Dashboard.Copy_Success'), null, 200)
        })
        .catch(() => {
          Show_Alerts(i18n.global.t('Error.Copy'), null, 400)
        });
  } else {
    Link_Imp()
  }
}
const open_tg = () => {
  window.open(store.Comm_config.telegram_discuss_link, '_blank')
}



onMounted(() => {
  const tx = () => {
    let tx = document.querySelector('#tx')
    let yg = store.Subscribe.d
    let all = store.Subscribe.transfer_enable
    let deg = (all - yg) / all * 360
    let index = 0
    const ystime = setInterval(() => {
      index++
      tx.style.background = `conic-gradient(#30cb30 ${index}deg, black 0deg)`
      if (index >= deg) {
        clearInterval(ystime)
      }
    }, 5)
  }
  tx()
})


</script>
<template>
  <div
      class="relative flex flex-col gap-5 bg-[var(--theme-com)] shadow-[var(--theme-shadow-bg)] shadow-lg  rounded-2xl pt-2 pb-4 text-[var(--theme-title)] ">
    <div class="absolute z-0 -top-16 left-0 right-0 m-auto  w-24 h-24 ">
      <div id="tx"></div>
      <img class="absolute z-10 overflow-hidden w-24 h-24 rounded-full object-cover " src="/img/touxiang.jpg" alt="">
    </div>
    <div class="absolute  -top-12 right-0  cursor-pointer">
      <button @click="restart" class="p-1 rounded-xl  text-sm
                bg-[var(--theme-button-imp)] shadow-inner shadow-[var(--theme-shadow-bg)] text-white "
              type="button">
        {{ i18n.global.t('Dashboard.Restart_Sub') }}
      </button>
    </div>
    <div class="absolute -top-12 left-5">
      <div class="checkbox-wrapper-5">
        <div class="check" >
          <input v-model="userstore.Theme" id="check-5" type="checkbox">
          <label for="check-5"></label>
        </div>
      </div>
    </div>

    <div class="flex gap-3 text-center p-2 mx-2  rounded-lg text-[var(--theme-title)]">
      <div class="flex-1 flex flex-col  rounded-xl">
        <p>{{ (store.Info.balance / 100).toFixed(2) }} {{ store.Comm_config.currency_symbol }}</p>

        <div class="text-neutral-300 text-sm flex justify-center gap-1 items-center">
          <img src="/public/icon/钱包.svg" alt="">
          <p>{{ i18n.global.t('Dashboard.balance') }}</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col  rounded-xl">

        <p>{{ (store.Info.commission_balance / 100).toFixed(2) }}{{ store.Comm_config.currency_symbol }}</p>
        <div class="text-neutral-300 text-sm flex justify-center gap-1 items-center">
          <img src="/public/icon/钱包.svg" alt="">
          <p>{{ i18n.global.t('Dashboard.commission') }}</p>
        </div>
      </div>
    </div>


    <div
        class="flex text-[var(--theme-text)] relative gap-3 text-center p-2 h-16 mx-2  bg-[var(--theme-com-item)] shadow-[var(--theme-shadow-bg)] shadow-lg rounded-lg">

      <template v-if="store.Subscribe.plan!==null">
        <div class="flex-1 flex flex-col  rounded-xl">
          <p>{{ (store.Subscribe.transfer_enable / 1024 / 1024 / 1024).toFixed(2) }}G</p>
          <div class="text-sm flex justify-center gap-1 items-center">
            <img class="w-6" src="/icon/流量.svg" alt="">
            <p>{{ i18n.global.t('Dashboard.Transfer') }}</p>
          </div>
        </div>
        <div class="flex-1  rounded-xl">
          <p>{{ (store.Subscribe.d / 1024 / 1024 / 1024).toFixed(2) }}G</p>
          <div class="text-sm flex justify-center gap-1 items-center">
            <img class="w-6" src="/icon/流量.svg" alt="">
            <p>{{ i18n.global.t('Dashboard.Use_Transfer') }}</p>
          </div>
        </div>
        <div class="flex-1 rounded-xl">
          <p :class="Date.now()>store.Subscribe.expired_at*1000?'text-red-500':''"
          >
            {{ store.Subscribe.expired_at === null ? '永久':moment(store.Subscribe.expired_at * 1000).format('YY/MM/DD')  }}</p>
          <div class="text-sm flex justify-center gap-1 items-center">
            <img class="w-6" src="/public/icon/关闭.svg" alt="">
            <p
            >到期</p>
          </div>
        </div>
      </template>
      <template v-else>

        <InfoNo @click="router.push('dashboard/plan')" :title="'点击订购套餐'"></InfoNo>

      </template>


    </div>


    <div class="flex gap-5 justify-around">
      <button type="button"
              v-for="(item,index) in [i18n.global.t('Dashboard.Copy_Link'),i18n.global.t('Dashboard.Import_Link')]"
              @click="Copy_link(index)"
              class=" rounded-xl bg-[var(--theme-button-imp)] text-[var(--theme-button-color)] w-full mx-3 py-3  cursor-pointer hover:scale-105 hover:transform">
        {{ item }}
      </button>
    </div>


    <div class="flex justify-around items-center">
      <Email></Email>

      <div class="flex gap-1 cursor-pointer"
           v-if="store.Comm_config!==undefined && store.Comm_config.telegram_discuss_link!==null"
           @click="open_tg">

        <p class="text-[12px] text-neutral-400">{{ i18n.global.t('Dashboard.TG') }}</p>
        <svg t="1694751608470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="4060" width="16" height="16">
          <path
              d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z"
              fill="#1296DB" p-id="4061"></path>
        </svg>
      </div>
      <div>
        <p class="cursor-pointer text-[12px] text-stone-400 flex" @click="Show_Bot">
          <svg t="1699618314462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1995" width="16" height="16">
            <path
                d="M853.333333 640v85.333333H170.666667v-85.333333H85.333333v-213.333333h85.333334V341.333333h682.666666v85.333334h85.333334v213.333333h-85.333334z m-85.333333 0v-213.333333H256v213.333333h512zM554.666667 213.333333v85.333334h-85.333334V213.333333h85.333334z m-149.333334 384c-34.133333 0-64-29.866667-64-64S371.2 469.333333 405.333333 469.333333s64 29.866667 64 64-29.866667 64-64 64z m213.333334 0c-34.133333 0-64-29.866667-64-64s29.866667-64 64-64 64 29.866667 64 64-29.866667 64-64 64z"
                fill="#ffffff" p-id="1996"></path>
          </svg>
          {{ i18n.global.t('Dashboard.Bot') }}
        </p>
      </div>
      <div>
        <p @click="Restart_Password(true)" class="cursor-pointer text-[12px] text-stone-400">
          {{ i18n.global.t('Setting.Update_Pass') }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.checkbox-wrapper-5 .check {
  --size: 40px;
  position: relative;
  background: linear-gradient(90deg, #f19af3, #f099b5);
  line-height: 0;
  perspective: 400px;
  font-size: var(--size);
}

.checkbox-wrapper-5 .check input[type="checkbox"],
.checkbox-wrapper-5 .check label,
.checkbox-wrapper-5 .check label::before,
.checkbox-wrapper-5 .check label::after,
.checkbox-wrapper-5 .check {
  appearance: none;
  display: inline-block;
  border-radius: var(--size);
  border: 0;
  transition: .35s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
}

.checkbox-wrapper-5 .check label {
  width: 40px;
  height: 20px;
  background: #d7d7d7;
  overflow: hidden;
}

.checkbox-wrapper-5 .check input[type="checkbox"] {
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  top: 1px;
  left: 0px;
  background: linear-gradient(45deg, #dedede, #ffffff);
  box-shadow: 0 6px 7px rgba(0,0,0,0.3);
  outline: none;
  margin: 0;
}

.checkbox-wrapper-5 .check input[type="checkbox"]:checked {
  left: 20px;
}

.checkbox-wrapper-5 .check input[type="checkbox"]:checked + label {
  background: transparent;
}




.checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::before,
.checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
  left: calc(1.55 * var(--size));
  top: calc(.4 * var(--size));
  line-height: calc(.1 * var(--size));
  transform: rotateY(360deg);
}

.checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
  height: calc(.16 * var(--size));
  top: calc(.55 * var(--size));
  left: calc(1.6 * var(--size));
  font-size: calc(.6 * var(--size));
  line-height: 0;
}


#tx {
  box-shadow: 0 0 10px #00ff84;
  content: '';
  display: flex;
  background: conic-gradient(#30cb30 0deg, black 0deg);
  width: 7rem;
  height: 7rem;
  top: 0;
  left: -9px;
  bottom: 0;
  margin: auto;
  position: absolute;
  border-radius: 50%;
  z-index: 10;
}
</style>