
import {render,h} from "vue";
import PopupTicket from "./Ticket.vue";



export const Show_Ticket=()=>{
    const renode=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(PopupTicket,{
        renode
    })
    render(vnode,document.getElementById('Model'))
}
