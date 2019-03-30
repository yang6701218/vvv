<template>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="search"
    @blur="handleSearch"
    class="search"
  >
  </el-input>
</template>
<script>
export default {
    data(){
        return{
            search:''
        }
    },
    methods:{
        handleSearch(){
            this.$emit('search',this.search)
        }
    }
}
</script>
<style lang="less" scoped>
.search {
  width: 300px;
  float: right;
}
</style>

