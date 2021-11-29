<template>
  <el-col :span="12" class="menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>失物管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
              <router-link active-class="active" class="link" to="/Navigation/ChooseAdd/SignalAdd">新增失物</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link active-class="active" class="link" to="/Navigation/Chooseshow/List">失物记录</router-link>
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>成员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-switch-button"></i>
          <span>退出登录</span>
        </template>
      </el-submenu>
    </el-menu>
  </el-col>
</template>
<script>
  export default {
    name:'NavMenu',
    methods: {
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    }
  }
</script>

<style scoped>
    .menu{
        width: 15vw;
    }
    .link{
        text-decoration: none;
        color: black;
    }
    .active{
        color: blue;
    }
</style>