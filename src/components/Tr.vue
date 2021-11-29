<template>
    <tr>
        <template v-if='!isedi'>
            <td><input type="checkbox"></td>
            <td>{{item.number}}</td>
            <td>{{item.date}}</td>
            <td>{{item.thing}}</td>
            <td>{{item.name}}</td>
            <td>{{item.student_number}}</td>
            <td>{{item.status=='true' ? '已找回' : '未找回'}}</td>
            <td>{{item.re_date}}</td>
            <td>{{item.address}}</td>
            <td>
                <div>
                    <el-button @click="edi">编辑</el-button>
                </div>
                <div>
                    <el-button type="danger" @click="deleted">删除</el-button>
                </div>
            </td>
        </template>
        <template v-else-if="isedi">
                <td><input type="checkbox"></td>
            <td>{{item.number}}</td>
            <td><el-input v-model="updatedate" placeholder="请输入内容"></el-input></td>
            <td><el-input v-model="updatething" placeholder="请输入内容"></el-input></td>
            <td><el-input v-model="updatename" placeholder="请输入内容"></el-input></td>
            <td><el-input v-model="updatestudent_number" placeholder="请输入内容"></el-input></td>
            <td><Select :status='item.status'></Select></td>
            <td><el-input v-model="updatere_date" placeholder="请输入内容"></el-input></td>
            <td><el-input v-model="updateaddress" placeholder="请输入内容"></el-input></td>
            <td>
                <div>
                    <el-button @click="update">保存</el-button>
                </div>
                <div>
                    <el-button type="danger" @click="canceledi">取消</el-button>
                </div>
            </td>
        </template>
    </tr>
</template>

<script>
import {post} from '../utils/axios.js'
import Select from './Select.vue'
export default {
    name:'Tr',
    props:["item","getall"],
    components:{Select},
    data(){
        return{
            isedi:false,
            updatething:'',
            updatestudent_number:'',
            updatedate:'',
            updatere_date:'',
            updateaddress:'',
            updatename:'',
            updatestatus:'',
            number:''
        }
    },
    mounted(){
        this.updatedate = this.item.date
        this.updatestudent_number = this.item.student_number
        this.updatething = this.item.thing
        this.updatename = this.item.name
        this.updateaddress = this.item.address
        this.updatere_date = this.item.re_date
        this.updatestatus = this.item.status
        this.number = this.item.number
        this.$bus.$on("data",(data)=>{
            this.updatestatus = data
        })
    },
    beforeDestroy(){
        this.$bus.$off("data")
    },
    methods:{
        edi(){
            this.isedi = true
        },
        canceledi(){
            this.isedi = false
        },
        change(e){
            console.log(e)
        },
        async update(){
            try{
                let res = await post('http://1.14.74.79:9090/laf/update',{
                    date:this.updatedate,
                    thing:this.updatething,
                    re_date:this.updatere_date,
                    name:this.updatename,
                    student_number:Number(this.updatestudent_number),
                    address:this.updateaddress,
                    status:this.updatestatus,
                    number:Number(this.number)
                })
                if(res.data.code === 1000){
                    this.isedi = false
                    this.getall()
                }
            }
            catch(err){
                console.log(err)
            }
        },
        async deleted(){
            try{
                let res = await post('http://1.14.74.79:9090/laf/delete',{
                    number:Number(this.number)
                })
                if(res.data.code===1000){
                    this.getall()
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    tr{
        flex: 1;
        display: flex;
    }
    td{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #F0F2F5;
        height: 8vh;
        flex: 2;
    }
    tr td:nth-child(1){
        flex: 1;
    }
    tr td:last-child{
        flex: 3;
    }
    tr td:last-child{
        display: flex;
        justify-content: space-around;
    }
</style>