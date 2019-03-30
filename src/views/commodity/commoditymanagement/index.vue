<template>
  <el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="出售中" name="first">
        <sell />
      </el-tab-pane>
      <el-tab-pane label="已售罄" name="second">已售罄</el-tab-pane>
      <el-tab-pane label="仓库中" name="third">仓库中</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import sell from '@/views/commodity/commoditymanagement/components/Sell.vue'
  export default {
      components:{
          sell
      },
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>