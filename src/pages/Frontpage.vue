<template>
  <div class="totalwrp">
    <div class="fromwrp">
      <div class="linkwrp">
          <router-link class="link" active-class="active" to="/Frontpage/Login">登录</router-link> 
          <router-link class="link" active-class="active" to="/Frontpage/Register">注册</router-link>
      </div>
      <div class="inputwrp">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'Frontpage'
}
</script>

<style scoped>
    .totalwrp{
      width: 100%;
      height: 100%;
      background-image: url(../imgs/3.png);
      background-size: cover;
      position: absolute;
    }
    .fromwrp{
      margin-top:38vh;
      margin-left: 60vw;
      width: 30vw;
      height: 50vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2vh;
    }
    .linkwrp{
      display: flex;
      width: 60%;
      justify-content: space-around;
      margin: 1vh 0;
    }
    .link{
      text-decoration: none;
    }
    .active{
      color: blue;
    }
</style>
