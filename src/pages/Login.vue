<template>
    <div>
        <div class="inputwrp">
            <el-input size='medium' class="inputlogin" placeholder="请输入学号" prefix-icon="el-icon-user-solid" @input="savestuid" v-model="stuid"/>
            <div v-show="!isid" class="tip">学号必须为十位数字</div>
            <div v-show="isid"></div>
            <el-input size='medium' class="inputlogin" placeholder="请输入密码" prefix-icon="el-icon-s-cooperation" @input="savestupawd" v-model="stupawd" show-password></el-input>
            <div v-show="!ispass" class="tip">密码至少为八位</div>
            <div v-show="ispass" class="tip"></div>
        </div>
        <div class="nolinkwrp">
            <router-link class="nolink" to='/Frontpage/Register'>没有账号点击注册</router-link>
        </div>
        <div class="checkboxwrp">
            <input type="checkbox">
            记住密码
        </div>
        <div class="btnwrp">
            <button @click="pushLogin">登录</button>
        </div>
    </div>
</template>
<script>
import {post} from '../utils/axios.js'
export default {
    name:'Login',
    data(){
        return {
            isid:true,
            ispass:true,
            stuid:'',
            stupawd:''
        }
    },
    methods:{
        savestuid(e){
            let regid = /^[0-9]{10}$/
            this.isid = regid.test(e)
            this.stuid = e
        },
        savestupawd(e){
            let regpass = /^.{8}/
            this.ispass = regpass.test(e)
            this.stupawd = e
        },
        async pushLogin(){
            if(this.isid && this.ispass){
                try{
                    let res = await post('http://1.14.74.79:9090/laf/login',{
                    student_number:Number(this.stuid),
                    password:this.stupawd
                    })
                    if(res.data.code===1000){
                        localStorage.setItem('atoken','Bearer '+res.data.data.atoken)
                        localStorage.setItem('self_msg',JSON.stringify({num:res.data.data.student_number,user_name:res.data.data.user_name}))
                        this.$router.push('/Navigation/Chooseshow/List')
                    }else if(res.data.code===1003){                        
                        alert("用户不存在")
                    }else if(res.data.code===1004){
                        alert("账号或密码错误")
                    }else if(res.data.code===1005){
                        alert("业务繁忙")
                    }       
                }catch(err){
                    console.log(err)
                }
            }
        }
    },
}
</script>
<style scoped>
    .inputwrp{
        display: flex;
        flex-direction: column;
        height: 18vh; 
        justify-content: space-around;
        margin: 1vh 0;
    }
    .inputlogin{
        width: 20vw;
    }
    .nolinkwrp{
        margin-top: 2vh;
        margin-left: 11vw ;
    }
    .nolink{
        text-decoration: none;
    }
    .checkboxwrp{
        margin: 3vh 0;
    }
    .btnwrp{
        margin-top: 3vh;
        display: flex;
        justify-content: center;
    }
    button{
        width: 4.5vw;
        height: 4.5vh;
        outline: none;
        border: none;
        color: white;
        background: #1890FF;
        font-weight: 500;
    }
    .tip{
        color: red;
        font-size: 14px;
    }
</style>
