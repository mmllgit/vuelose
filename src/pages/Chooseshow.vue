<template>
<div class="Choosewrp">
    <div class="Linkwrp">
        <div>
            <router-link class="link" active-class="active" to='/Navigation/Chooseshow/List'>
                列表显示
            </router-link>
        </div>
        <div>
            <router-link class="link" active-class="active" to='/Navigation/Chooseshow/pic'>
                图表显示
            </router-link>
        </div>
        <div>
            <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="savesearch">
                <template slot="append">
                    <el-button slot="append" icon="el-icon-search" @click="search">
                </el-button></template>
            </el-input>
            </div>
        </div>
        <div>
            <router-link class="link" active-class="active" to='/Navigation/Add'>
                新增失物
            </router-link>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import {post} from '../utils/axios.js'
export default {
    name:'Chooseshow',
    data(){
        return {
            savesearch:'',
        }
    },
    methods:{
        async search(){
            try{
                let res = await post('http://1.14.74.79:9090/laf/get',{
                    student_number:isNaN(this.savesearch) ? null : Number(this.savesearch),
                    name:isNaN(this.savesearch) ? this.savesearch : null
                })
                this.$bus.$emit('searchinfo',{arr1:res.data.data,issearch:true})
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    .Linkwrp{
        display: flex;
        flex-direction: row;
        margin: 3vh 0 3vh 0;
    }
    .Linkwrp div{
        flex: 1;
        text-align: center;
    }
    .Linkwrp div:nth-child(3){
        flex: 3;
        margin-top: -3vh;
    }
    .link{
        text-decoration: none;
    }
    .active{
        color: blue;
    }
</style>