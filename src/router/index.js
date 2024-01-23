import { createRouter,createWebHashHistory } from "vue-router";
import {useUserStore} from "@/store/user.js";
import {Show_Alerts} from "@/components/Alerts/index.js";


const routes=[
    {
        path:"/",
        component:()=>import('@/views/HOME/Home.vue')
    },
    {
        path: "/dashboard",
        component:()=>import('@/views/Dashboard/Home.vue'),
        children:[
            {
                path:"",
                component:()=>import('@/views/Dashboard/Home/index.vue')
            },
            {
                path: "plan",
                component:()=>import("@/views/Dashboard/Plan/Home.vue")
            },
            {
                path: "ticket",
                component:()=>import("@/views/Dashboard/Ticket/Home.vue")
            },
            {
                path: "knowledge",
                component:()=>import("@/views/Dashboard/Konwledge/Home.vue")
            },
            {
                path:"invite",
                component:()=>import("@/views/Dashboard/Invite/Home.vue")
            }
        ]
    }


]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if (to.path!=="/"){
        if (useUserStore().Auth_key===undefined){
            Show_Alerts("未登录","请先登录",400,4000)
            next('/')
        }
    }
    next()

})

export default router;