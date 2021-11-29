<template>
  <div class="registerwrp">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="studentid">
        <el-input
          v-model.number="ruleForm.studentid"
          size="small"
          class="registerint"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入学号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          prefix-icon="el-icon-s-cooperation"
          class="registerint"
          type="password"
          size="small"
          placeholder="请输入密码"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          prefix-icon="el-icon-s-goods"
          class="registerint"
          type="password"
          size="small"
          placeholder="请再次输入密码"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          class="registerint"
          size="small"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="registerbut" type="primary" @click="submitForm('ruleForm')">注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {post} from '../utils/axios.js'
export default {
  naem: "Register",
  data() {
    var checkstudentid = (rule, value, callback) => {
      this.studentid = value
      let regid = /^[0-9]{10}$/;
      if (!value) {
        return callback(new Error("学号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (!regid.test(value)) {
            callback(new Error("学号必须为十位"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      let regRegistrationpassword = /^.{8}/
      if (value === "") {
        callback(new Error("请输入密码"));
      } 
      else if(!regRegistrationpassword.test(value)){
        callback(new Error("密码至少为8位"))
      }
      else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      this.password = value
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkusername = (rule,value,callback) => {
      this.username = value
      if(value === ""){
        callback(new Error("用户名不能为空"))
      }else{
        callback()
      }
    }
    return {
      studentid:'',
      password:'',
      username:'',
      ruleForm: {
        pass: "",
        checkPass: "",
        studentid: "",
        username:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        studentid: [{ validator: checkstudentid, trigger: "blur" }],
        username:[{validator:checkusername,trigger:"blur"}]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          try{
            let res = await post('http://1.14.74.79:9090/laf/signup',{
              student_number:Number(this.studentid),
              password:this.password,
              user_name:this.username
            })
            if(res.data.code===1000){
              this.$router.push("/Frontpage/Login")
              alert("注册成功")
            }else if(res.data.code===1002){
              alert("用户已存在")
            }
          }catch(err){
            console.log(err)
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
  .registerwrp{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .registerint {
    width: 20vw;
    /* margin-top: -3vh; */
  }
  .registerbut{
    width: 4.5vw;
    height: 4.5vh;
    outline: none;
    border: none;
    color: white;
    background: #1890FF;
    font-weight: 500;
    margin-left: 7.75vw;
  }
</style>