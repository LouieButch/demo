<template>
  <div class="home">
    <div class="home-header">
      <div class="header-left" @click="jumpToHome">
        <el-avatar shape="square" :size="40" :src="logoUrl" style="background:none"></el-avatar>
        <h1>DEMO</h1>
      </div>
      <div class="header-right">
        <span style="margin-right: 8px">王二</span>
        <el-avatar :size="36" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </div>

    </div>
    <div class="home-body">
      <div class="body-menu">
        <left-menu></left-menu>
      </div>
      <div class="body-container">
        <el-scrollbar class="scrollbar-only__scrollY" style="height: 100%">
          <div class="body-content">
            <router-view />
          </div>
        </el-scrollbar>
        <!--<span>Hello World</span>-->
        <!--<common></common>-->
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Common from "../components/common/Common"
import LeftMenu from "../components/common/LeftMenu"
import logoUrl from "../assets/logo.png"

export default {
  name: 'home',
  components: {
      Common,
      LeftMenu,
  },
    data(){
      return{
          logoUrl:logoUrl,
      }
    },
    methods: {
        jumpToHome() {
            let routerInfo = {
                name: Home
            };
            this.$router.push(routerInfo);
        }
    }
}
</script>

<style scoped>
    .home{
      width: 100%;
      height: 100%;
    }
  .home-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 24px;
    width: calc(100% - 48px);
    background-color: #2b2b2b;
    box-shadow: 0 4px 12px #ebedf0;
    color: #ffffff;
  }
  .header-left{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .header-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header-left h1{
    font-size: 24px;
    color: #ffffff;
    padding: 0;
    line-height: 20px;
    margin: 0 0 0 -10px;
  }
  .home-body{
    width: 100%;
    height: calc(100% - 48px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .body-menu{
    width: 200px;
    height: 100%;
    background-color: #545c64;
  }
  .body-container{
    background-color: #f0f0f0;
    width: calc(100% - 200px);
    height: 100%;
  }
  .body-content{
    width: calc(100% - 48px);
    padding: 24px;
  }
</style>
