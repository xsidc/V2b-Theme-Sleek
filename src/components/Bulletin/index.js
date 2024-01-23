import {render,h} from "vue";
import Bulletin from './Bulletin.vue'

export const Show_Bulletin=(data)=>{


    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(Bulletin,{
        data,move_node
    })

    render(vnode,document.getElementById('Model'))
}