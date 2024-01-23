import {request} from "@/utils/request.js";


export const Restart_Security = () => {
    return request({
        url: "api/v1/user/resetSecurity",
        method: "get"
    })
}