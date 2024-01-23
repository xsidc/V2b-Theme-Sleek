import {h,render} from "vue";
import Md from "./Md.vue";


export const Open_Md=(id)=>{
    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(Md,{
        id,move_node
    })

    render(vnode,document.getElementById('Model'))
}