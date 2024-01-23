<template>
  <a href="javascript:" @click.stop="btn"
     class="flex  bg-[#42c990] hover:bg-[#2df399] ease-in duration-300 rounded-xl gap-6 px-6 py-3 text-black">
    <p v-if="store.Auth_key!==undefined">{{ i18n.global.t('Home.Home') }}</p>
    <p v-else >{{ i18n.global.t('Home.Sign_In') }}</p>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="text-white "
    >
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.73 6.60042C13.2963 3.56741 17.2746 2.15497 21.1481 2.85202C21.8451 6.72563 20.4327 10.7042 17.3998 13.2706L12.846 17.1239L11.7918 17.7469L6.25265 12.2075L6.87063 11.1617L10.73 6.60042ZM4.87237 9.37916L8.68656 4.8713C8.71603 4.83647 8.74565 4.80181 8.77542 4.76732C7.21133 5.11554 5.14211 6.01006 2.72421 8.10974L4.87237 9.37916ZM12.0147 2.01846C15.111 0.126844 18.8895 -0.497593 22.5246 0.411228C23.0486 0.542238 23.4578 0.951408 23.5888 1.47545C24.4977 5.11138 23.8729 8.89071 21.9806 11.9874C22.0888 12.6089 22.1542 13.4255 22.0649 14.4057C21.8587 16.6665 20.8401 19.6878 17.8346 23.1175C16.6146 24.5098 14.4903 24.1703 13.6158 22.6903L12.5134 20.8246C11.9325 21.078 11.2367 20.9664 10.7631 20.5037L10.9158 20.6564L9.96943 21.6029C8.92407 22.6482 7.22922 22.6482 6.18387 21.6029L2.39831 17.8171C1.35295 16.7717 1.35295 15.0768 2.39831 14.0314L3.3447 13.085L3.49714 13.2374C3.03431 12.7636 2.92278 12.0674 3.17656 11.4864L1.30968 10.3832C-0.170248 9.50864 -0.509748 7.38423 0.882445 6.16416C4.31206 3.15855 7.33325 2.13987 9.59389 1.93375C10.5755 1.84425 11.393 1.90998 12.0147 2.01846ZM5.2374 14.9779L4.29109 15.9243L8.07665 19.71L9.02296 18.7636L5.2374 14.9779ZM14.6206 19.1289L15.8891 21.2757C17.9875 18.8591 18.8821 16.7908 19.2308 15.227C19.197 15.2562 19.163 15.2852 19.1289 15.3141L14.6206 19.1289Z"
            fill="#000"/>
    </svg>
  </a>
</template>

<script setup>
import {useRouter,useRoute} from "vue-router";
const router=useRouter()
import {Show_Login} from "@/views/HOME/Login/index.js";
import {useUserStore} from "@/store/user.js";
import i18n from "../../../public/i18n/i18n.js";
const store=useUserStore()
const route=useRoute()

const btn = () => {
  if (store.Auth_key !== undefined) {
    router.push("/dashboard")
  }else {
    Show_Login(route.query.code)
  }
}
</script>