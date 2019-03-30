<template>
  <div>
    <div class="log">
      <span></span>
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
  height: 80px;
  display: flex;
  line-height: 80px;
  text-align: center;
  background-color: white;
  img {
    width: 80px;
    height: 40px;
  }
}
</style>
