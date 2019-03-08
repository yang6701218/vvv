<template>
  <div>
    <el-menu-item v-for="item in list" :index="item.path" :key="item.path">{{
      item.title
    }}</el-menu-item>
  </div>
</template>
<script>
export default {
    props:['list'],
    created(){
        console.log(this.list)
    }
}
</script>
