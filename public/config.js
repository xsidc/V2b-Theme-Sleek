window.config={
    // 主题默认颜色
    theme:false,
    
    // 后端网址配置
    hosturl:"https://xxxxx.com/",
    title:"xx-加速器",
    title1:"快速高效与世界连接",
    title2:"快速,可靠,信赖",

    //   下载配置
    down:[
        {
            name:"Pc",
            title:"电脑版下载",
            down:[
                {title:"Clash下载",href:"https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.20.27/Clash.for.Windows-0.20.27-win.7z"},
                {title:"V2ray下载",href:"https://github.com/v2ray/v2ray-core/releases/download/v4.28.2/v2ray-windows-64.zip"},
                {title:"Netch下载",href:"https://github.com/netchx/netch/releases/download/1.9.7/Netch.7z"}
            ]
        },
        {
            name:"Android",
            title:"安卓手机下载",
            down:[
                {title:"Clash下载",href:"https://github.com/Kr328/ClashForAndroid/releases/download/v2.5.12/cfa-2.5.12-foss-arm64-v8a-release.apk"},
                {title:"V2rayNG下载",href:"https://github.com/2dust/v2rayNG/releases/download/1.8.5/v2rayNG_1.8.5.apk"}
            ]
        },
        {
            name:"Ios",
            title:"苹果下载",
            down:[
                {title:"Shadowrocket",href:"https://apps.apple.com/us/app/shadowrocket/id932747118?l=zh"},
                {title:"Quantumult X",href:"https://apps.apple.com/us/app/quantumult-x/id1443988620"}
            ]
        }
    ],


    //   节点配置
    country:[
        {title:"挪威",title1:"奥斯陆",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7-65.5 50.7H0V322.8l51.4-68.5-51.4-65z"/><path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3 36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7 24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"/><path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"/></svg>`},
        {title:"法国",title1:"斯特拉斯堡",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></svg>`},
        {title:"芬兰",title1:"赫尔辛基",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"/><path fill="#0052b4" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"/></svg>`},
        {title:"瑞典",title1:"斯德哥尔摩",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#0052b4" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"/><path fill="#ffda44" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"/></svg>`},
        {title:"挪威",title1:"奥斯陆",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7-65.5 50.7H0V322.8l51.4-68.5-51.4-65z"/><path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3 36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7 24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"/><path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"/></svg>`},
        {title:"法国",title1:"斯特拉斯堡",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></svg>`},
        {title:"芬兰",title1:"赫尔辛基",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"/><path fill="#0052b4" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"/></svg>`},
        {title:"挪威",title1:"奥斯陆",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7-65.5 50.7H0V322.8l51.4-68.5-51.4-65z"/><path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3 36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7 24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"/><path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"/></svg>`},
        {title:"法国",title1:"斯特拉斯堡",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></svg>`},
        {title:"芬兰",title1:"赫尔辛基",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"/><path fill="#0052b4" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"/></svg>`},
        {title:"挪威",title1:"奥斯陆",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7-65.5 50.7H0V322.8l51.4-68.5-51.4-65z"/><path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3 36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7 24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"/><path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"/></svg>`},
        {title:"法国",title1:"斯特拉斯堡",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></svg>`},
        {title:"芬兰",title1:"赫尔辛基",lable:"new",img:`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="border-radius:50%"><path fill="#eee" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"/><path fill="#0052b4" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"/></svg>`},
    ],


    //    流媒体配置
    streammedia:[
        {title:'NETFLIX',img:"./icon/netflix.png"},
        {title:'Twitter',img:"./icon/twitter.png"},
        {title:'FaceBook',img:"./icon/facebook.png"},
        {title:'Instagram',img:"./icon/instagram.png"},
        {title:'TikTok',img:"./icon/tiktok.png"},
        {title:'Reddit',img:"./icon/reddit.png"},
        {title:'Linkedin',img:"./icon/linkedin.png"},
        {title:'Pornhub',img:"./icon/pornhub.svg"},
    ],

    // 套餐配置
    taocan:[
        {
            title:"基础套餐",
            money:10,
            cent:["支持Chatpt访问","支持Netflix，台湾哔哩哔哩等流媒体","巅峰1000/MS"]
        }
    ]
}