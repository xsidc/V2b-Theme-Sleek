<script setup>
import {defineProps, ref} from 'vue'
import {changePassword, checkLogin, password_no_auth, sendEmailVerify} from "@/api/v1/User.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {useRouter} from "vue-router";
import {Test} from './test.js'

const router = useRouter()

const pop = defineProps({
  is_login: Boolean,
  move_node: Function
})


let Pass_in=new Test

// 登录重置密码
const auto_password = () => {
  Pass_in.TestInSave().then(()=>{
    changePassword(Pass_in.Pass, Pass_in.NewPass).then(res => {
      Show_Alerts("重置成功", null, 200)
      checkLogin()
      pop.move_node()
      router.go(0)

    }).catch(err => {
      Show_Alerts("重置失败", err.data.message, 400)
    })
  })
}



const Pass_up=new Test
const i=ref(0)
//未登录重置密码
const send_Email=()=>{
  // 验证邮箱
    Pass_up.TestEmail().then(()=>{
      sendEmailVerify(Pass_up.Email).then(res=>{
        Show_Alerts("发送成功","请查看验证码",200)
        i.value=60
        const cs=setInterval(()=>{
          i.value--
          if (i.value===0)clearInterval(cs)
        },1000)
      }).catch(err=>Show_Alerts(err.data.message,null,400))
    }) 
}

const no_auto_pass=()=>{

  Pass_up.TestSave().then(()=>{
    password_no_auth(Pass_up.Email,Pass_up.Pass,Pass_up.Code).then(res=>{
      Show_Alerts("重置成功","快去登录吧",200)
      pop.move_node()
    }).catch(err=>{
      Show_Alerts(err.data.message,null,400)
    })
  })
  
}
const show=ref(true)
</script>
<template>
  <div class=" h-screen z-[60] w-screen fixed left-0 right-0 top-0 bottom-0 m-auto bg-[rgba(0,0,0,0.5)]">

    <div class="absolute  m-auto left-0 right-0 top-0 bottom-0">
      <div class="w-full animate__animated h-full text-white flex justify-center items-center"
           :class="show?'animate__fadeIn':'animate__fadeOut'"
      >
        
          <div class="flex flex-col w-96 p-5 rounded-xl shadow-xl shadow-[var(--theme-shadow-bg)] bg-[var(--theme-model-bg)]"
          >
            <h1 class="text-xl text-[var(--theme-title)]">重置密码</h1>
            <!--        登录重置密码-->
            <template v-if="pop.is_login">
            <div class="text-[var(--theme-title)] bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
            flex gap-5 items-center mt-6 p-4  rounded-lg  ">
              <label class=" w-14 whitespace-nowrap">旧密码:</label>
              <input v-model="Pass_in.Pass" class="flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0" type="text" name=""
                     id="" placeholder="请输入旧密码">
            </div>
            <div class="text-[var(--theme-title)] bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
            flex gap-5 items-center mt-6 p-4 rounded-lg  ">
              <label class="w-14 whitespace-nowrap">新密码:</label>
              <input v-model="Pass_in.NewPass" class="flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0" type="text" name=""
                     id="" placeholder="请输入新密码">
            </div>

            <button @click="auto_password"
                    class="mt-5 p-2 mx-4 bg-green-600 rounded-xl text-sm ">重置密码
            </button>
            </template>

            <!--        未登录重置密码-->
            <template v-else>
              <div class="title-[var(--theme-title)] bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
              flex  gap-5 items-center mt-6 p-4  rounded-lg  ">
                <label class="w-14 whitespace-nowrap">邮箱:</label>
                <input v-model="Pass_up.Email" class="flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0" type="text" name=""
                       id="" placeholder="请输入邮箱@Gmail">
              </div>
              <div class="title-[var(--theme-title)] bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
              flex gap-5 relative items-center mt-6 p-4  rounded-lg ">
                <label class="w-14 whitespace-nowrap">验证码:</label>
                <input v-model="Pass_up.Code" class="flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0" type="text" name=""
                       id="" placeholder="验证码">
                <button class="absolute right-5 z-10" :disabled="i!==0" @click="send_Email">{{i===0?'发送验证码':i}}</button>
              </div>
              <div class="title-[var(--theme-title)] bg-[var(--theme-com-item)] shadow-lg shadow-[var(--theme-shadow-bg)]
              flex gap-5 items-center mt-6 p-4  rounded-lg ">
                <label class="w-14 whitespace-nowrap">密码:</label>
                <input v-model="Pass_up.Pass" class="flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0" type="text" name=""
                       id="" placeholder="请输入新密码">
              </div>
              <button @click="no_auto_pass" 
                      class="mt-5 p-2 title-[var(--theme-title)] mx-4 bg-green-600 rounded-xl text-sm ">重置密码
              </button>
            </template>

            <button @click="pop.move_node()"
                    
                    class="text-[var(--theme-title)] bg-[var(--theme-button-imp)] shadow-[var(--theme-shadow-bg)]
                    mt-2 w-f p-2  mx-4  shadow-lg rounded-xl text-sm ">取消重置
            </button>
          </div>




      </div>

    </div>

  </div>

</template>

<style scoped>

</style>

