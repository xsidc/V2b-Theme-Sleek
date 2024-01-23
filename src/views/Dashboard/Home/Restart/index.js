import {h,nextTick,render} from "vue";
import restart from './Restart.vue'

export const Show_restart=()=>{
    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }


    const vnode=h(restart,{
        move_node
    })
    render(vnode,document.getElementById('Model'))
}