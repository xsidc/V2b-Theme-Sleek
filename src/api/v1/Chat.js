import {request} from "@/utils/request.js";



export const Get_Chat_ticket = (id) => {
    return request({
        url: "api/v1/user/ticket/fetch",
        method: "get",
        params: {
            id: id
        }
    })
}



export const Add_Chat = (id, msg) => {
    return request({
        url: "api/v1/user/ticket/reply",
        method: "post",
        data: {
            id: id,
            message: msg
        }
    })
}
