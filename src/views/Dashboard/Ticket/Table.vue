<script setup>
import {Close_ticket, Get_ticket} from "@/api/v1/data.js";
import {useDataStore} from "@/store/user.js"
import {Popup_Chat} from "@/components/Chat/index.js";
import i18n from "../../../../public/i18n/i18n.js";
const show=useDataStore()



const Chat = (id) => {
  Popup_Chat(id)
}

const close=(id)=>{
  Close_ticket(id).then(res=>{
    Get_ticket().then(res=>{
      show.Set_Ticket(res.data.data)
    })
  })
}
const time_update = (number) => {

  const date = new Date(number * 1000);
// 获取年、月、日、小时和分钟
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并确保两位数字
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

// 格式化成指定的形式
  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;

  return formattedDate
}

</script>
<template>

  <div class="inline-block min-w-full overflow-scroll rounded-lg shadow">
    <table class="min-w-full leading-normal text-[var(--theme-title)]">
      <thead class="bg-[var(--theme-com)]  sticky top-0">
      <tr>
        <th scope="col" class="
        px-5 py-3 text-sm font-normal text-left  uppercase  ">
          {{i18n.global.t('Ticket.Title')}}
        </th>
        <!--              <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase  ">-->
        <!--                创建时间-->
        <!--              </th>-->
        <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase  ">
          {{i18n.global.t('Ticket.Time')}}
        </th>
        <th scope="col" class="px-5 py-3 text-sm font-normal text-left uppercase   ">
          {{i18n.global.t('Ticket.Status')}}
        </th>
        <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase   ">
          操作
        </th>
      </tr>
      </thead>
      <tbody class="bg-[var(--theme-com-item)]">
      <template v-for="(item,index) in show.Ticket" :key="index">
        <tr>
          <!--                  标题-->
          <td class="px-5 py-5 text-sm ">
            <div class="flex items-center">
              <div class="flex-shrink-0">

                <img alt="profil" src="/img/touxiang.jpg"
                     class="mx-auto object-cover rounded-full h-10 w-10 "/>

              </div>
              <!--                    主题-->
              <div class="mx-3">
                <p class=" whitespace-nowrap w-[6rem] overflow-hidden overflow-ellipsis">
                  {{ item.subject }}
                </p>
              </div>
            </div>
          </td>
          <!--                  创建时间-->
          <!--                <td class="px-5 py-5 text-sm  ">-->
          <!--                  <p class=" whitespace-nowrap">-->
          <!--                    {{ time_update(item.created_at) }}-->
          <!--                  </p>-->
          <!--                </td>-->
          <!--                  回复时间-->
          <td class="px-5 py-5 text-sm ">
            <p class=" whitespace-nowrap">
              {{ time_update(item.updated_at) }}
            </p>
          </td>
          <!--                  状态-->
          <td class="px-5 py-5 text-sm ">

                                <span
                                    :class="item.status===1?'text-red-600  bg-red-200':item.reply_status===1?'text-yellow-600  bg-yellow-200':'text-green-600  bg-green-200'"
                                    class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-lg">

                                    <span class="relative whitespace-nowrap">
                                        {{ item.status === 1 ? i18n.global.t('Ticket.Status3') : item.reply_status === 1 ? i18n.global.t('Ticket.Status1') : i18n.global.t('Ticket.Status2') }}
                                    </span>
                                </span>
          </td>
          <!--                  操作-->
          <td class="px-5 py-5 text-sm ">
            <div class="flex gap-5 items-center">

              <p class="whitespace-nowrap cursor-pointer" @click="Chat(item.id)">
                <svg  width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" class="w-8 h-8 text-stone-300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                  </path>
                </svg>
              </p>
              <p v-if="item.status !== 1" @click="close(item.id)" class="whitespace-nowrap bg-red-400 cursor-pointer p-1 rounded-lg">
                {{ i18n.global.t('Ticket.Close') }}
              </p>
            </div>

          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>

</template>