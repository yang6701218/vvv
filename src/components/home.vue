<template>
  <el-container class="main">
    <div class="aside">
      <Aside />
    </div>
    <el-container>
      <el-header class="main-header">
        <Header />
      </el-header>
      <el-main>
        <router-view class="routerView" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '@/components/aside/index.vue'
import Header from '@/components/header/index.vue'
export default {
    components:{
        Aside,
        Header
    }
}
</script>
<style lang="less" scoped>
.main {
  margin: 0;
  padding: 0;
  height: 100vh;
  .aside {
    background-color: #545c64;
  }
}
.main-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 80px !important;
  line-height: 100px;
}

.el-aside {
  background-color: #5a09aa;
  color: white;
  text-align: center;
  max-width: 200px;
}

.el-main {
  color: #333;
  width: 100%;
  height: 100%;
  .routerView {
    width: 100%;
    height: 100%;
  }
}
</style>

