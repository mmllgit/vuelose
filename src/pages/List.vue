<template>
    <table>
        <template v-if="!issearch1">
            <tbody>
            <tr class="firsttr">
                <td><input type="checkbox"></td>
                <td>编号</td>
                <td>日期</td>
                <td>失物</td>
                <td>姓名</td>
                <td>学号</td>
                <td>状态</td>
                <td>找回日期</td>
                <td>领取地址</td>
                <td>操作</td>
            </tr>
            <Tr v-for="(item,index) of arr" v-show="index>=(page1-1)*10 && index<=page1*10-1" :key="item.number" :item="item" :getall="getall"></Tr>
        </tbody>
        <tfoot class="tfooter">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="arr ? arr.length : 0"
            @current-change='currentpage1'>
            </el-pagination>
        </tfoot>
        </template>
        <template v-if="issearch1">
            <tbody>
            <tr class="firsttr">
                <td><input type="checkbox"></td>
                <td>编号</td>
                <td>日期</td>
                <td>失物</td>
                <td>姓名</td>
                <td>学号</td>
                <td>状态</td>
                <td>找回日期</td>
                <td>领取地址</td>
                <td>操作</td>
            </tr>
            <Tr v-for="(item,index) of arr1" v-show="index>=(page2-1)*10 && index<=page2*10-1" :key="item.number" :item="item" :getall="getall"></Tr>
        </tbody>
        <tfoot class="tfooter">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="arr1 ?  arr1.length : 0"
            @current-change='currentpage2'>
            </el-pagination>
        </tfoot>
        </template>  
    </table>
</template>

<script>
import {post} from '../utils/axios.js'
import Tr from '../components/Tr.vue'
export default {
    name:'List',
    components:{Tr},
    methods:{
        async getall(){
            try{
                let res = await post("http://1.14.74.79:9090/laf/getall",{
                })
                if(res.data.code===1000){
                    this.arr = res.data.data
                }
            }
            catch(err){
                console.log(err)
            }
        },
        currentpage1(e){
            this.page1 = e
        },
        currentpage2(e){
            this.page2 = e
        },
    },
    props:["issearch"],
    data(){
      return{
          arr:[],
          arr1:[],
          issearch1:false,
          page1:1,
          page2:1
      } 
    },
    mounted(){
        this.getall()
        this.$bus.$on('searchinfo',(data)=>{
            this.issearch1 = data.issearch
            this.arr1 = data.arr1
        })
    },
    beforeDestroy(){
        this.issearch1 = false
        this.$bus.$off('searchinfo')
    },
}
</script>

<style scoped>
    table{
     display: flex; 
     flex-direction: column;
     flex: 1; 
     width: 100%; 
    }
    tbody{
        flex: 1;
        padding: 0 2vw;
    }
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
    .firsttr{
        background-color: #FAFAFA;
    }
    tr td:nth-child(1){
        flex: 1;
    }
    tr td:last-child{
        flex: 3;
    }
    .tfooter{
        margin: 3vh auto;
        margin-left: 32vw;
    }
</style>