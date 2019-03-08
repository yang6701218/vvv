<template>
  <div>
    <div class="log">
      <span>后台管理</span>
    </div>
    <menuList />
  </div>
</template>
<script>
import menuList from '@/components/aside/menu.vue'
  export default {
      components:{
        menuList
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
.log {
  width: 100%;
  height: 100px;
  display: flex;
  line-height: 100px;
  text-align: center;
  img {
    width: 100px;
    height: 40px;
  }
}
</style>
