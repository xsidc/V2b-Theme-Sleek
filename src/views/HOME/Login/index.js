import {h,render} from "vue";
import Login from "@/views/HOME/Login/Login.vue";
export const Show_Login=(code)=>{
    const move_node=()=>{
        render(null,document.getElementById('Login'))
    }
    const vnode=h(Login,{
        move_node,code
    })
    
    render(vnode,document.getElementById('Login'))
}