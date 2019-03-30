<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>新增商品参数</span>
    </div>
    <tableList></tableList>
  </el-card>
</template>
<script>
import tableList from '@/views/commodity/commodityparameteradd/components/table.vue'
export default {
    components:{
        tableList
    }
}
</script>
