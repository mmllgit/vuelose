<template>
    <div class="SignalAddwrp">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="studentnumber">
            <el-input v-model.number="ruleForm.studentnumber"></el-input>
        </el-form-item>
        <el-form-item label="失物" prop="thing">
            <el-input v-model="ruleForm.thing"></el-input>
        </el-form-item>
        <el-form-item label="日期">
            <div class="block">
            <el-date-picker
            v-model="value"
            format="yyyy-MM-dd"
            type="date"
            @change="savedate"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        </el-form-item>
        
        <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {post} from '../utils/axios.js'
  export default {
    name:'SignalAdd',
    data() {
      var checkstudentnumber = (rule, value, callback) => {
        let regid = /^[0-9]{10}$/
        this.studentnumber = value
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (!regid.test(value)) {
            callback(new Error("学号必须为十位"));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var checkaddress = (rule, value, callback) => {
        this.address = value
        if (value === '') {
          callback(new Error('请输入领取地址'));
        } else {
          callback();
        }
      };
      var checkthing = (rule, value, callback) => {
          this.thing = value
        if (value === '') {
          callback(new Error('请输入失物名称'));
        }else {
          callback();
        }
      };
      var checkname = (rule, value, callback) => {
          this.name = value
        if (value === '') {
          callback(new Error('请输入失主姓名'));
        }else {
          callback();
        }
      };
      return {
        value: '',
        ruleForm: {
          name: '',
          studentnumber: '',
          thing: '',
          address:'',
          date:''
        },
        rules: {
          name: [
            { validator: checkname, trigger: 'blur' }
          ],
          studentnumber: [
            { validator: checkstudentnumber, trigger: 'blur' }
          ],
          thing: [
            { validator: checkthing, trigger: 'blur' }
          ],
          address: [
            { validator: checkaddress, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async(valid) => {
          if (valid) {
            try{
                let res = await post('http://1.14.74.79:9090/laf/add',{
                    date:this.date,
                    thing:this.thing,
                    name:this.name,
                    student_number:this.studentnumber,
                    address:this.address
                })
                if(res.data.code===1000){
                    alert("添加成功！！！")
                }
            }
            catch(err){
                console.log(err)
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      savedate(e){
        this.date = e
      }
    }
  }
</script>

<style scoped>
    .SignalAddwrp{
        width: 50vw;
        height: 50vh;
        margin-top: 10vh;
        margin-left: 10vw;
    }
    .submit{
        margin-left: 20vw;
    }
</style>