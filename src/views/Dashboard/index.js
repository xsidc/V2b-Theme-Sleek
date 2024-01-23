import {Get_Comm_config, Get_Invite, Info, Save_Invite, Subscribe} from "@/api/v1/User.js";
import {useDataStore} from "@/store/user.js";
import {Fetch, Get_details, Get_oder, Get_server, Get_ticket, Language} from "@/api/v1/data.js";
import {Is_Pay} from "@/components/Pay_cancel/index.js";
import {Show_Alerts} from "@/components/Alerts/index.js";
import {Show_Bulletin} from "@/components/Bulletin/index.js";
import i18n from "../../../public/i18n/i18n.js";

const store = useDataStore()



export const Init = () => {
    const GetInFo=()=>{
        return new Promise((resolve,reject)=>{
            Info().then(res=>{
                store.Set_Info(res.data.data)
                resolve()
            }).catch(err=>{
                reject()
            })
        })
    }
    
    const GetSubscribe=()=>{
        return new Promise((resolve,reject)=>{
            Subscribe().then(res=>{
                store.Set_Subscribe(res.data.data)
                resolve()
            }).catch(err=>{
                reject()
            })
        })
    }
    const GetComm=()=>{
        return new Promise((resolve,reject)=>{
            Get_Comm_config().then(res=>{
                store.Set_Comm(res.data.data)
                resolve()
            }).catch(err=>{
                reject()
            })
        })
    }
    
    const GetInvite=()=>{
        return new Promise((resolve,reject)=>{
            Get_Invite().then(res=> {
                store.Invite = res.data.data
                if (store.Invite.codes[0] === undefined) {
                    Save_Invite().then().catch(err=>{reject()})
                    Get_Invite().then(res => {
                        store.Invite = res.data.data
                    }).catch(err=>{reject()})
                }
                resolve()
            }).catch(err=>{
                reject()
            })
        })
    }
    
    const GetServer=()=>{
        return new Promise((resolve,reject)=>{
            Get_server().then(res=>{
                store.ServerList=res.data.data
                resolve()
            }).catch(()=>reject)
        })
       
    }
    
    const GetOder=()=>{
        return new Promise((resolve,reject)=>{
            Get_oder().then(res=>{
                store.OderList=res.data.data
                if (store.OderList.length>0&&store.OderList[0].status===0){
                            Is_Pay(store.OderList[0])
                        }
                resolve()
            }).catch(err=>reject())
        })

    }

    const GetTicket=()=>{
        return new Promise((resolve,reject)=>{
            Get_ticket().then(res=>{
                store.Set_Ticket(res.data.data)
                resolve()
            }).catch(()=>reject)
        })

    }
    const GetDetails=()=>{
        return new Promise((resolve,reject)=>{
            Get_details().then(res=>{
                store.Set_Details(res.data)
                resolve()
            }).catch(()=>reject)
        })

    }
    const GetFetch=()=>{
        return new Promise((resolve,reject)=>{
            Fetch().then(res=>{
                store.Set_Bulletin(res.data.data)
                if (store.Bulletin[0]!==undefined){Show_Bulletin(store.Bulletin[0])}
                resolve()
            }).catch(()=>reject)
        })

    }

    Promise.all([GetInFo(), GetSubscribe(), GetComm(), GetInvite(), GetServer(), GetOder(), GetTicket(), GetDetails(), GetFetch()]).then(r =>{}).catch(err=>{
        Show_Alerts(i18n.global.t('Error.Http'),null,400)
    })


}

