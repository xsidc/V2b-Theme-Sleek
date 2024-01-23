
import axios from "axios";
import {Show_Alerts} from '../components/Alerts/index'
import {Loading} from '@/components/Loading/index.js'
import {useUserStore} from "@/store/user.js";

import router from "@/router/index.js";



export const request=axios.create({
    baseURL:window.config.hosturl,
    headers:{
        "Content-Type":"application/x-www-form-urlencoded",
    },
    timeout:10000,//timeout
})




// 请求拦截
request.interceptors.request.use((config)=>{
    config.headers.Authorization=useUserStore().Auth_key
    if (config.url.includes("api/v1/user/ticket/fetch")){

    }
    else {
        Loading(true)
    }
    


    return config
})



// 响应拦截
request.interceptors.response.use((req)=>{

    // 登录注册获取token保存
        if (req.config.url==="api/v1/passport/auth/login" || req.config.url==="api/v1/passport/auth/register"){
            useUserStore().Set_Auth_key(req.data.data.auth_data)
            Show_Alerts("登录成功", "正在跳转首页...", 200)
            router.replace("/dashboard")
        }

    Loading(false)
    return req
},err=>{
        


    if(err.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
        Show_Alerts("网络超时","请重新提交请求",500)
        Loading(false)
        return ""
    }
    

        // 过期
        if(err.response.hasOwnProperty("status")&&err.response.status===403){
            useUserStore().Set_Auth_key(undefined)
            Show_Alerts("登录过期", "正在跳转首页...", 400)
            router.push('/')
        }


    Loading(false)
    return Promise.reject(err.response)
})
