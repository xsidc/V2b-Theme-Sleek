import {Show_Alerts} from "@/components/Alerts/index.js";

export class Test {
    constructor(email, pass,newpass,code) {
        this.Email = email
        this.Pass = pass
        this.NewPass=newpass
        this.Code=code
    }
    
    TestEmail(){
        return new Promise((yes,no)=>{
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(this.Email)) {
                Show_Alerts("邮箱错误", "请填写正确的邮箱", 400)
                throw ""
            }
            yes()
        })
    }
    
    TestPass(){
        return new Promise((yes,no)=>{
            const regex = /^.{8,20}$/;
            if (this.Pass===undefined || !regex.test(this.Pass)) {
                Show_Alerts("密码格式错误", "大于等于8个字符", 400)
                throw ""
            }
            yes()
        })
    }
    TestNewPass(){
        return new Promise((yes,no)=>{
            const regex = /^.{8,20}$/;
            if (this.NewPass===undefined || !regex.test(this.Pass)) {
                Show_Alerts("密码格式错误", "大于等于8个字符", 400)
                throw ""
            }
            yes()
        })
    }
    
    TestCode(){
        return new Promise((yes,no)=>{
            if (this.Code===undefined || this.Code.length<3){
                Show_Alerts("验证码错误", "请填写正确的验证码", 400)
                throw ""
            }
            yes()
        })
    }
    
    TestSave(){
        return Promise.all([this.TestEmail(),this.TestPass(),this.TestCode()])
    }
    
    TestInSave(){
        return Promise.all([this.TestPass(),this.TestNewPass()])
    }
}

