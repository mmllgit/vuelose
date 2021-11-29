<template>
    <div>
        <div class="ChooseAddwrp">
            <div>
                <router-link class="el-icon-document link" active-class="active" to='/Navigation/ChooseAdd/SignalAdd'>单条引入</router-link>
            </div>
            <div>
                <router-link class="el-icon-folder-opened link" active-class="active" to='/Navigation/ChooseAdd/TotalAdd'>批量导入</router-link>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .ChooseAddwrp{
        display: flex;
        flex-direction: row;
        margin-left: 3vw;
        margin-top: 3vh;
    }
    .ChooseAddwrp div:nth-child(1){
        flex: 1;
    }
    .ChooseAddwrp div:nth-child(2){
        flex: 4;
    }
    .link{
        text-decoration: none;
    }
    .active{
        color: blue;
    }
</style>