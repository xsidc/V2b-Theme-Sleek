import {defineStore} from 'pinia'
import {ref} from 'vue'
import {Subscribe} from "@/api/v1/User.js";
import {data} from "autoprefixer";

const theme=window.config.theme
export const useUserStore = defineStore('main', () => {
        const Auth_key = ref(undefined)
        const Theme = ref(theme)

        function Set_Auth_key(str) {
            Auth_key.value = str
        }

        return {
            Theme, Auth_key,
            Set_Auth_key
        }


    },
    {
        persist: true,
    }
)


export const useDataStore = defineStore('data', () => {

        const Info = ref({})        // 个人信息
        const Subscribe=ref({})     // 订阅链接
        const Comm_config=ref({}) //后台
        const Bulletin=ref(undefined)
        const Invite=ref()
        const OderList=ref()
        const Ticket=ref(undefined)
    const Details=ref(undefined)
        
        const ServerList=ref()
        const nav=ref(false)
        function Set_Info(data) {Info.value = data}
        
        function Set_Subscribe(data){Subscribe.value=data}
    
        function Set_Comm(data){Comm_config.value=data}
    
        function Set_Bulletin(data){Bulletin.value=data}
        function Set_Ticket(data){Ticket.value=data}
        function Set_Details(data){Details.value=data}
    

        return {
            Info,Set_Info,
            Subscribe,Set_Subscribe,
            Comm_config,Set_Comm,
            Bulletin,Set_Bulletin,
            Ticket,Set_Ticket,
            Details,Set_Details,
            Invite,ServerList,OderList,nav
        }
    }
)