import {render,h} from "vue";
import chat from './Chat.vue'

export const Popup_Chat=(id)=>{


    const remove=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(chat,{
        id,remove
    })

    render(vnode,document.getElementById('Model'))
}