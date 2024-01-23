import i18n from "../../../../public/i18n/i18n.js";

class User{
    // 验证邮箱
    constructor(email,pass) {
        this.Email=email;
        this.Pass=pass;
    }
    test_email(){
        return new Promise((yes, no) => {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (this.Email===undefined || !emailRegex.test(this.Email)) {
                throw new Error(i18n.global.t('Error.Email_Prompt'))
            }
            yes()
        })
    }
    // 验证密码
    test_pass(){
        return new Promise((yes,no)=>{
            const regex = /^.{8,20}$/;
            if (this.Pass===undefined || !regex.test(this.Pass)) {
                throw new Error(i18n.global.t('Error.Password_Prompt'))
            }
            yes()
        })
    }
    
    
}


// 登录
export class Sign_in extends User{
    constructor() {
        super();
    }
    // 验证
    Test(){
       return  Promise.all([this.test_email(),this.test_pass()])
    }
    
}

// 注册
export class Sign_up extends User{
    constructor(recommend,iscode,code) {
        super();
        this.Recommend=recommend //推荐人
        this.IsCode=iscode //验证码
        this.Code=code
    }


    test_code(){
        return new Promise((yes, no) => {
            if (this.Code===undefined || this.Code.length<4) {
                throw new Error((i18n.global.t('Error.Code_Prompt')))
            }
            yes()
        })
        
       
          

    }
    Test(){
        // 判断邮箱 密码 验证码
        let arr=[this.test_email(),this.test_pass()]
        if (this.IsCode===1){
            arr.push(this.test_code())
        }

        return  Promise.all(arr)
    }
    
}