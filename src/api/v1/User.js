import {request} from "@/utils/request.js"


export const Info=()=>{
    return request({
        url: "api/v1/user/info",
        methods: "get",
    })
}


export const Subscribe = () => {
    return request({
        url: "api/v1/user/getSubscribe",
        methods: "get",
    })
}



export const User_update=(remind_expire,remind_traffic)=>{
    return request({
        url:"api/v1/user/update",
        method:"post",
        data:{
            remind_expire:remind_expire, //到期邮件
            remind_traffic:remind_traffic //流量邮件
        }

    })
}


export const Get_Comm_config = () => {
    return request({
        url: "api/v1/user/comm/config",
        methods: "get",
    })
}




export const changePassword = (pass, newpass) => {
    return request({
        url: "api/v1/user/changePassword",
        method: "post",
        data: {
            old_password: pass,
            new_password: newpass,
        }
    })
}


export const  checkLogin=()=>{
    return request({
        url:"api/v1/user/checkLogin",
        method:"get"
    })
}


export const password_no_auth = (email, password, email_code) => {
    return request({
        url: "api/v1/passport/auth/forget",
        method: "post",
        data: {
            email: email,
            password: password,
            email_code: email_code,
        }
    })
}



export const sendEmailVerify = (email) => {
    return request({
        url: "api/v1/passport/comm/sendEmailVerify",
        method: "post",
        data: {
            email: email
        }
    })
}



export const Save_Invite = () => {
    return request({
        url: "api/v1/user/invite/save",
        method: "get"
    })
}


export const Get_Invite = () => {
    return request({
        url: "api/v1/user/invite/fetch",
        method: "get"
    })
}