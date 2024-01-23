import {h,render} from "vue";
import Plan_Pay from  './Plan_Pay.vue'

export const PlanPay=(data)=>{

    const move_node=()=>{
        render(null,document.getElementById('Model'))

    }
    const vnode=h(Plan_Pay,{
        data,move_node
    })

    render(vnode,document.getElementById('Model'))
}