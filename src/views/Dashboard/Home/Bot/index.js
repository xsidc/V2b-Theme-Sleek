import {h,render} from 'vue'
import Bot from "./Bot.vue";
export const Show_Bot=()=>{
    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const node=h(Bot,{
        move_node
    })
    render(node,document.getElementById('Model'))
}