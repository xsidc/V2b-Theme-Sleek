<script setup>
import {defineProps, onMounted, ref} from 'vue'
import {Sign_in} from './test.js'
import {Sign_Config, Sign_In, Sign_Register, SignUp_SendEmail} from "@/api/v1/Sign.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {Sign_up} from './test.js'
import {Restart_Password} from "@/components/Restart_pass/index.js";
import i18n from "../../../../public/i18n/i18n.js";


const pop = defineProps({
  move_node: Function,
  code:String,
})

const show = ref(true)

// 退出
const c = () => {
  show.value = false
  setTimeout(() => {
    pop.move_node()
  }, 200)
}
// 注册登录切换
const show_item = ref(true)

//登录
const Sin=new Sign_in
const login = () => {
  // 验证
  Sin.Test().then(() => {
    //   发送登录请求
    Sign_In([Sin.Email, Sin.Pass]).then(res => {
      pop.move_node()
    }).catch(err => {
      Show_Alerts(err.data.message, null, 400)
    })
  }).catch(err => {
    Show_Alerts(err.message, null, 400)
  })
}


// 注册配置文件
const up = new Sign_up
onMounted(async () => {
  try {
    const res = await Sign_Config()
    up.IsCode=res.data.data.is_email_verify
  }catch (err){
    Show_Alerts(i18n.global.t('Error.Http'),null,400)
  }
  up.Recommend=pop.code
})


// 验证码发送
const i=ref(0)
const sendemail=()=>{
  SignUp_SendEmail(up.Email).then(res => {
    Show_Alerts(i18n.global.t('Setting.SendEmail'), i18n.global.t('Setting.Email_Prompt'), 200)
    i.value=60
    const timer = setInterval( ()=> {
      if (i.value === 0) {
        clearInterval(timer); // 倒计时结束，清除定时器
      } else {
        i.value--
      }
    }, 1000)// 以每秒执行一次
    
  }).catch(err=>Show_Alerts(err.data.message,null,400))
}

const Signup=()=>{
  up.Test().then(()=>{
    Sign_Register(up.Email,up.Pass,up.Recommend,up.Code).then(()=>pop.move_node()).catch(err=>Show_Alerts(err.data.message,null,400))
  }).catch(err=>{
    Show_Alerts(err.message,null,400)
  })
}




</script>
<template>
  <div class=" h-full  w-full flex items-center justify-around fixed  z-[60] top-0"

  >
    <div
        class="relative animate__animated  shadow-xl login w-[90vw] sm:w-[950px] overflow-hidden z-40 flex  gap-10 rounded-xl"
        :class="show?'animate__zoomIn':'animate__zoomOut'"
        style="animation-duration: 0.3s;"
    >
      <div class="sm:grid bg-black gap-5 grid-cols-2 justify-between w-full relative ">


        <!--  图片 -->
        <div
            class="h-full hidden sm:block bg-black items-center justify-center py-4">
          <div>
            <img class="max-h-[50vh] m-auto" src="/img/home_banner.png" alt=""/>

            <div class="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 class="text-2xl font-bold text-center text-slate-400">{{ i18n.global.t('Home.Sign_Title') }}</h3>
              <p class="leading-relaxed text-center text-gray-500 mt-2.5">{{ i18n.global.t('Home.Sign_Title1') }}</p>

              <div class="flex items-center justify-center mt-5 mb-5 space-x-3">
                <div class="bg-orange-500 rounded-full w-20 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>

        <!--登录注册-->
        <div class="flex h-full items-center bg-[#121212] justify-center ">
          <!--          登录-->
          <div class="w-full py-5 overflow-y-scroll px-4 sm:px-12"
          >
            <template v-if="show_item">
              <h2 class="text-3xl font-bold leading-tight text-slate-400 sm:text-4xl">{{ i18n.global.t('Home.Sign_In') }}</h2>
              <form class="mt-8">
                <div class="space-y-5 text-white">
                  <div>
                    <label class="text-base font-medium "> {{ i18n.global.t('Home.Email') }} </label>
                    <div class="mt-2.5">
                      <input @keydown.enter="login"
                             v-model="Sin.Email"
                             type="email"
                             :placeholder="i18n.global.t('Home.Email_Input')"
                             class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium"> {{ i18n.global.t('Home.PassWord') }} </label>
                    <div class="mt-2.5">
                      <input @keydown.enter="login"
                             v-model="Sin.Pass"

                             type="password"
                             :placeholder=" i18n.global.t('Home.PassWord_Input') "
                             class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div class="flex items-center">
                    <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                      {{ i18n.global.t('Home.Sign_No') }} <a href="javascript:" title="" @click="show_item=false"
                                     class="text-blue-600 hover:text-blue-700 hover:underline"
                    >{{i18n.global.t('Home.Go_Now_Up')}}</a>
                      <!-- and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a> -->
                    </label>
                    <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                      <a @click="Restart_Password(false)"
                         href="javascript:" title="" class="text-blue-600 hover:text-blue-700 hover:underline"
                      >{{i18n.global.t('Home.Forget_Password')}}</a>
                      <!-- and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a> -->
                    </label>
                  </div>

                  <div>
                    <button @click="login" type="button"
                            class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                      {{i18n.global.t('Home.Now_In')}}
                    </button>
                  </div>

                </div>
              </form>
            </template>

            <!--            注册-->
            <template v-else>
              <h2 class="text-3xl font-bold leading-tight text-slate-400 sm:text-4xl">{{ i18n.global.t('Home.Sign_Up') }}</h2>
              <form class="mt-8">
                <div class="sm:space-y-5 space-y-2 text-white">
                  <!-- 邮箱 -->

                  <div>
                    <label for="" class="text-base font-medium "> {{ i18n.global.t('Setting.Email') }} </label>
                    <div class="mt-2.5">
                      <input v-model="up.Email"
                             type="email"
                             :placeholder="i18n.global.t('Setting.Email_Input')"
                             class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <!-- 验证码 -->
                  <div v-if="up.IsCode===1">
                    <label for="" class="text-base font-medium"> {{i18n.global.t('Setting.Code')}} </label>
                    <div class="flex gap-5">
                      <div class="mt-2.5">
                        <input v-model="up.Code"
                               type="text"
                               :placeholder="i18n.global.t('Setting.Code')"
                               class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                      <button type="button" @click="sendemail"
                              :disabled="i!==0"
                              class=" right-0 top-0 bottom-0 mt-2.5 w-[50%] text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        {{ i===0?i18n.global.t('Setting.Send_Code'):i }}
                      </button>
                    </div>
                  </div>

                  <!-- 密码 -->
                  <div>
                    <label for="" class="text-base font-medium"> {{ i18n.global.t('Setting.PassWord') }} </label>
                    <div class="mt-2.5">
                      <input v-model="up.Pass"
                             type="password"
                             :placeholder="i18n.global.t('Setting.PassWord_Input')"
                             class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  

                  <div class="flex gap-5">
                    <!-- 推荐人 -->
                    <input v-model="up.Recommend"
                           type="text"
                           :placeholder="i18n.global.t('Setting.Recommend')"
                           class="block w-[70%] p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />


                    <button  @click="Signup" type="button"
                            class="w-full  inline-flex items-center justify-center  px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                      {{ i18n.global.t('Home.Go_Now_Up') }}
                    </button>
                  </div>
                  <div class="flex items-center">
                    <!-- <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" /> -->

                    <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                      已有账号？ <a href="javascript:" title="" class="text-blue-600 hover:text-blue-700 hover:underline"
                                   @click="show_item=!show_item">{{ i18n.global.t('Home.Now_In') }}</a>
                      <!-- and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a> -->
                    </label>
                  </div>
                </div>
              </form>
            </template>

          </div>
        </div>

      </div>
    </div>
    <div @click="c" class="w-full h-full absolute z-30 bg-[rgba(0,0,0,0.4)]">
    </div>
  </div>
</template>

<style scoped>
.login {
  box-shadow: 0px 0px 20px 8px #414141;
}


</style>