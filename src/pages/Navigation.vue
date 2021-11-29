<template>
    <div>
        <div class="headertitle">失物招领后台管理系统</div>
        <div class="content">
            <div>
                <div class="msgwrp">
                    <div class="el-icon-user"></div>
                    <div>
                        <div>姓名：{{self_info.user_name}}</div>
                        <div>学号：{{self_info.num}}</div>
                    </div>
                </div>
                <div class="Menuwrp"><NavMenu></NavMenu></div>
            </div>
            <div class="viewwrp">
                <router-view class="view"></router-view>
            </div>
        </div>          
    </div>
</template>
<script>
import NavMenu from '../components/NavMenu.vue'
export default {
    name:'Navigation',
    components:{NavMenu},
    data(){
        return{
            self_info:JSON.parse(localStorage.getItem('self_msg'))
        }
    }
}
</script>
<style>
    .content{
        display: flex;
        flex-direction: row;
    }
    .headertitle{
        line-height: 8vh;
        font-size: 24px;
        padding-left: 6vw;
        color: white;
        background-color: #001529;
    }
    .msgwrp{
        display: flex;
        flex-direction: row;
        margin-top: 3vh;
        margin-left: 1vw;
    }
    .Menuwrp{
        margin-top: 1vh;
    }
    .el-icon-user{
        font-size: 40px;
        margin-right: 1vw;
    }
    .viewwrp{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
</style>