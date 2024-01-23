import {request} from "@/utils/request.js";



export const GetPaymentMethod = () => {
    return request({
        url: "api/v1/user/order/getPaymentMethod",
        method: "get",
    })
}


export const Post_oder_cancel = (trade_no) => {
    return request({
        url: "api/v1/user/order/cancel",
        method: "post",
        data: {
            trade_no: trade_no //订单号
        }
    })
}


export const order_checkout = (trade_no, id) => {
    return request({
        url: "api/v1/user/order/checkout",
        method: "post",
        data: {
            trade_no: trade_no,//订单号
            method: id,//支付号
        }
    })
}


export const Get_oder = () => {
    return request({
        url: "api/v1/user/order/fetch",
        method: "get"
    })
}


export const Order_Save = (title, id, code = null) => {
    return request({
        url: "api/v1/user/order/save",
        method: "post",
        data: {
            period: title,
            plan_id: id,
            coupon_code: code
        }
    })
}


export const Post_coupon_check = (id, code) => {
    return request({
        url: "api/v1/user/coupon/check",
        method: "post",
        data: {
            plan_id: id,
            code: code
        }
    })
}


export const Post_transfer=(transfer_amount)=>{
    return request({
        url:"api/v1/user/transfer",
        method:"post",
        data:{
            transfer_amount:transfer_amount*100
        }
    })
}

export const Post_withdraw=(withdraw_account,withdraw_method)=>{
    return request({
        url:"api/v1/user/ticket/withdraw",
        method:"post",
        data:{
            withdraw_account:withdraw_account, //金额
            withdraw_method:withdraw_method //支付宝
        }
    })
}