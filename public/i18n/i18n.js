import {createI18n} from "vue-i18n";
import zh from './zh.js'

const i18n = createI18n({
    legacy: false, 
    locale: 'zh', // 默认语言
    globalInjection: true, // 全局注册$t方法
    messages: {
        zh,
    }
})

export default i18n
