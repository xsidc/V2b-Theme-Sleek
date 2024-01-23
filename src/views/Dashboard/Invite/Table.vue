<script setup>
import {useDataStore} from "@/store/user.js";
import i18n from "../../../../public/i18n/i18n.js";

const show = useDataStore()


const handel_time = (timestamp) => {

// 创建一个日期对象
  const date = new Date(timestamp * 1000); // 注意：JavaScript 中的时间戳通常是以秒为单位的，所以需要乘以1000以转换为毫秒

// 提取年、月、日、小时和分钟
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要加1
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

// 构建格式化后的日期和时间字符串
  const formattedDateTime = `${year}/${month}/${day} — ${hours}:${minutes}`;

  return formattedDateTime

}
</script>
<template>

  <div class="overflow-auto lg:overflow-visible ">

    <table class="table text-[var(--theme-title)]  space-y-6 text-sm w-full">
      <thead class=" bg-[var(--theme-com)] text-gray-400 sticky top-0">
      <tr>
        <th class="p-3">{{i18n.global.t('Invite.Time')}}</th>
        <th class="p-3 text-left">{{i18n.global.t('Invite.Commission')}}</th>
        <th class="p-3 text-left">{{i18n.global.t('Invite.Transactions')}}</th>
        <th class="p-3 text-left">{{i18n.global.t('Invite.Status')}}</th>

      </tr>
      </thead>
      <tbody>
      <template v-if="show.Details!==undefined">
        <tr v-for="item in show.Details.data" class="bg-[var(--theme-com)]">
          <td class="p-3  text-center">
            {{ handel_time(item.created_at) }}
          </td>
          <td class="p-3">
            {{ (item.get_amount / 100).toFixed(2) }}
          </td>
          <td class="p-3">
            {{ (item.order_amount / 100).toFixed(2) }}
          </td>
          <td class="p-3 font-bold">
            <span class="bg-green-400 text-gray-50 rounded-md px-2 px-1"></span>
          </td>
        </tr>
      </template>


      </tbody>
    </table>
  </div>
</template>
<style scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n+5),
tr th:nth-child(n+5) {
  border-radius: 0 .625rem .625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: .625rem 0 0 .625rem;
}
</style>
