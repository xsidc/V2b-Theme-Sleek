<script setup>
import {ref, defineProps, computed, watch} from 'vue'
import {useDataStore} from "@/store/user.js";
import InfoNo from "@/components/InfoNo/InfoNo.vue";
import i18n from "../../../../public/i18n/i18n.js";
const store=useDataStore()
const data_index = ref(0)


</script>
<template>

  <div class="flex flex-col gap-5 w-full p-3 rounded-xl relative h-full ">
    <template v-if="store.Bulletin!==undefined && store.Bulletin.length>0">
      <h1 class="text-[var(--theme-title)] shadow-[var(--theme-shadow-bg)] shadow-lg bg-[var(--theme-com-item)]
       flex top-0 p-2   rounded-xl gap-5 items-center  w-full  ">
        <svg t="1692840375669" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="5277" width="32" height="32">
          <path d="M509.184 513.1264m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                fill="#FFBC42" p-id="5278"></path>
          <path
              d="M588.2368 253.5424a50.32448 50.32448 0 0 0-49.2032-2.3552L326.3488 356.608H240.2304c-27.904 0-50.6368 22.7328-50.6368 50.6368v200.0896c0 27.904 22.7328 50.6368 50.6368 50.6368h86.2208l212.9408 103.5264c7.0656 3.4304 14.6432 5.12 22.1696 5.12 9.3184 0 18.5856-2.6112 26.8288-7.7312a50.2784 50.2784 0 0 0 23.7568-42.9056V296.5504c0-17.6128-8.9088-33.6896-23.9104-43.008z m-222.0544 318.6688a33.28 33.28 0 1 1-66.56 0V444.928a33.28 33.28 0 1 1 66.56 0v127.2832zM669.44 370.432c-11.264 0-22.2208-5.6832-28.4672-16.0256-9.5232-15.7184-4.5568-36.1984 11.1616-45.7216l68.4032-41.5744c15.7184-9.5232 36.1984-4.5568 45.7216 11.1616 9.5232 15.7184 4.5568 36.1984-11.1616 45.7216l-68.4032 41.5744c-5.376 3.2768-11.3664 4.864-17.2544 4.864zM773.632 539.392h-77.9264a33.28 33.28 0 1 1 0-66.56h77.9264a33.28 33.28 0 1 1 0 66.56zM737.792 752.2304a32.8192 32.8192 0 0 1-16.9984-4.7104l-68.4032-40.704c-15.8208-9.3696-20.992-29.7984-11.5712-45.6192a33.28 33.28 0 0 1 45.6192-11.5712l68.4032 40.704c15.8208 9.3696 20.992 29.7984 11.5712 45.6192a33.1264 33.1264 0 0 1-28.6208 16.2816z"
              fill="#FFFFFF" p-id="5279"></path>
        </svg>
        {{ store.Bulletin[data_index].title}}
      </h1>
      <div class="indent-4 text-[var(--theme-text)]  overflow-scroll h-full">
        <div v-html=" store.Bulletin[data_index].content ">

        </div>
      </div>

      <div class="flex justify-center gap-5">
        <span v-for="(item,index) in store.Bulletin" class="border-[6px] rounded-2xl cursor-pointer" :class="index===data_index?'border-blue-600':''" @click="data_index=index">

        </span>
      </div>

    </template>
    <template v-else>
      <InfoNo :title="i18n.global.t('Error.No_notice')"></InfoNo>
    </template>

  </div>

</template>

