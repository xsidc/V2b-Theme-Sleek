import {h,nextTick,render} from 'vue'
import loading from './loading.vue'

export const Loading=(status,title)=>{


    const remnode=()=>{
        render(null,document.getElementById('Loading'))
    }

    if (status===false) {
        nextTick(remnode)
    }

    const vnode=h(loading,{
        status, title,remnode
    })
    render(vnode,document.getElementById('Loading'))
}
