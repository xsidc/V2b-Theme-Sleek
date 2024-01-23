import {request} from '@/utils/request.js'

export const Sign_In=(data)=>{
    return request({
        url:"api/v1/passport/auth/login",
        method:"post",
        data:{
            email:data[0],
            password:data[1],
        }
    })
}


export const Sign_Config=()=>{
    return request({
        url:"api/v1/guest/comm/config",
        method:"get"
    })
}


export const SignUp_SendEmail=(email)=>{
    return request({
        url:"api/v1/passport/comm/sendEmailVerify",
        method:"post",
        data:{
            email:email
        }
    })
}

export const Sign_Register=(email,password,invite_code,email_code)=>{
    return request({
        url:"api/v1/passport/auth/register",
        method:"post",
        data:{
            email:email,
            password: password,
            invite_code: invite_code,
            email_code: email_code,
        }
    })
}
