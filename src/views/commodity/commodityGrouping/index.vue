<template>
  <el-card>
    <div>
      <add />
      <el-input
        @blur="handleSearch"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21"
        class="searchInput"
      >
      </el-input>
    </div>
    <tableList></tableList>
  </el-card>
</template>
<script>
import add from '@/views/commodity/commodityGrouping/components/add.vue'
import tableList from '@/views/commodity/commodityGrouping/components/table.vue'
export default {
    components:{
        add,
        tableList
    },
    data(){
        return{
            input21:''
        }
    },
    methods:{
        handleSearch(){
            alert(this.input21)
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

