import {h,render} from 'vue'
import Links from "@/views/Dashboard/Home/Link_Imp/Links.vue";
export const Link_Imp=()=>{
    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const node=h(Links,{
        move_node
    })
    render(node,document.getElementById('Model'))
}