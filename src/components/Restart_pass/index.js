import {h,render} from "vue";

import restart_pass from './restart_pass.vue'

export const Restart_Password=(is_login)=>{

    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(restart_pass,{
        is_login,move_node
    })
    render(vnode,document.getElementById('Model'))
}


