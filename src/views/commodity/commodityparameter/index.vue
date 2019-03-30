<template>
  <el-card>
    <div>
      <el-button
        type="primary"
        @click="
          $router.push({
            name: 'commodityparameteradd'
          })
        "
        >新增商品参数</el-button
      >
      <search @search="handleSearch" />
    </div>
    <tableList></tableList>
  </el-card>
</template>
<script>
import tableList from '@/views/commodity/commodityparameter/components/table.vue'
import search from '@/components/search/index.vue'
export default {
    components:{
        tableList,
        search
    },
    data(){
        return{
            input21:''
        }
    },
    methods:{
        handleSearch(val){
            alert(val)
        }
    }
}
</script>
<style lang="less" scoped>
.searchInput {
  width: 300px;
  float: right;
}
</style>

