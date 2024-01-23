import {h,render} from "vue";
import Pay_cancel from "./Pay_cancel.vue";

export const Is_Pay=(data)=>{
   const move_node=()=>{
       render(vnode,document.getElementById('IsPay'))
   }
    const vnode=h(Pay_cancel,{
        data,move_node
    })
    render(vnode,document.getElementById('IsPay'))
}