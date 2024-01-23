import {h,render} from "vue";
import Money from "./Money.vue";


export const Operate_Money=(number)=>{
    const move_node=()=>{
        render(null,document.getElementById('Model'))
    }
    const vnode=h(Money,{
        number,move_node
    })

    render(vnode,document.getElementById('Model'))
}