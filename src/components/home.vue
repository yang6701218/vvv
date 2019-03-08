<template>
  <el-container class="main">
    <el-aside>
      <Aside />
    </el-aside>
    <el-container>
      <el-header class="main-header">Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '@/components/aside/index.vue'
export default {
    components:{
        Aside
    }
}
</script>
<style lang="less" scoped>
.main {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.main-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 100px !important;
  line-height: 100px;
}

.el-aside {
  background-color: #545c64;
  color: white;
  text-align: center;
  max-width: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

