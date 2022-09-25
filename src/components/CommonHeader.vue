<template>
    <header>
      <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
<!--        <h3 style="color: white">首页</h3>-->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item class="myColor" v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
          <span>
            <img :src="userImg" class="user">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "CommonHeader",
        computed:{
          ...mapState({
              tags:state => state.tab.tabsList
          })
        },
        data(){
            return{
                userImg:require('../assets/images/user.png')
            }
        },
        methods:{
            handleMenu(){
                this.$store.commit('collapMenu')
                //执行vuex里的mutations的collapMenu方法，实现点击变换侧边栏
            },
            logOut(){
                this.$store.commit('clearToken')
                this.$store.commit('clearMenu')
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped lang="less">
header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
  .l-content{
    display: flex;
    align-items: center;
    .el-button{
      margin-right: 20px;
    }
  }
  .r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
.myColor /deep/ .el-breadcrumb__inner {
  color:white;
}
</style>
