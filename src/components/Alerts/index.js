import {h,render} from 'vue'
import Alerts from './Alerts.vue'
export const Show_Alerts=(title,conten,mess=200,movetime=2000)=>{


    const move_vnode=()=>{
        render(null,document.getElementById('Alert'))
    }

    // h函数创建组件虚拟节点
    // render  渲染组件为真实节点
    const vnode=h(Alerts,{
        title,conten,mess,movetime,move_vnode
    })


    render(vnode,document.getElementById('Alert'))
}