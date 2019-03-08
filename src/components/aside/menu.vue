<template>
  <el-menu
    default-active="2"
    class="menuList"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
  >
    <el-submenu v-for="item in meunList" :index="item.path" :key="item.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.title }}</span>
      </template>
      <menuItem :list="item.children"></menuItem>
    </el-submenu>
  </el-menu>
</template>
<script>
import {mapGetters} from 'vuex'
import menuItem from '@/components/aside/menuItem.vue'
  export default {
      components:{
          menuItem
      },
      computed:{
        ...mapGetters(['meunList']),
      },
      created(){
        
      },
    methods: {
      
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
.menuList {
}
</style>
