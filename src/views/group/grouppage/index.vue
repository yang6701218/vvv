<template>
  <div>
    <div>
      <el-button type="primary">主要按钮</el-button>
    </div>
    <tableList />
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>
<script>
import tableList from '@/views/group/grouppage/components/table.vue'
export default {
    components:{
        tableList
    },
     data() {
      return {
        currentPage: 5,
      };
    },
     methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>
