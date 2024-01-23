import {request} from "@/utils/request.js";


export const Fetch = () => {
    return request({
        url: "api/v1/user/notice/fetch",
        methods: "get",
    })
}


export const Get_server = () => {
    return request({
        url: "api/v1/user/server/fetch",
        method: "get"
    })
}



export const Get_oder = () => {
    return request({
        url: "api/v1/user/order/fetch",
        method: "get"
    })
}



export const PlanFetch = () => {
    return request({
        url: "api/v1/user/plan/fetch",
        method: "get"
    })
}



export const Get_ticket = () => {
    return request({
        url: "api/v1/user/ticket/fetch",
        method: "get"
    })
}


export const Save_ticket = (subject, level, message) => {
    return request({
        url: "api/v1/user/ticket/save",
        method: "post",
        data: {
            subject: subject, //标题
            level: level, //等级
            message: message //内容
        }
    })
}


export const Close_ticket = (id) => {
    return request({
        url: "api/v1/user/ticket/close",
        method: "post",
        data: {
            id: id
        }
    })
}


export const Language = () => {
    return request({
        url: "api/v1/user/knowledge/fetch?language=zh-CN",
        methods: "get",
    })
}


export const Language_data = (id) => {
    return request({
        url: "api/v1/user/knowledge/fetch?id=" + id + "&language=zh-CN",
        method: "get",
    })
}



export const Get_details=()=>{
    return request({
        url:"api/v1/user/invite/details",
        method:"get"
    })

}


export const getBotInfo=()=>{
    return request({
        url:"api/v1/user/telegram/getBotInfo",
        method:"get"
    })
}
    