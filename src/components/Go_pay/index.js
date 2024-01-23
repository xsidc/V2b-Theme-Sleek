import {h,render} from "vue";
import go_pay from  './Go_pay.vue'

export const Go_PAY=(data)=>{

    const move_node=()=>{
        render(null,document.getElementById('Model'))

    }
    const vnode=h(go_pay,{
        data,move_node
    })

    render(vnode,document.getElementById('Model'))
}