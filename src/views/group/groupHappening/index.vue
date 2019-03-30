<template>
  <div>
    <el-card class="main">
      <headr />
      <center />
      <tableList />
    </el-card>
  </div>
</template>
<script>
import headr from '@/views/group/groupHappening/components/header.vue'
import center from '@/views/group/groupHappening/components/center.vue'
import tableList from '@/views/group/groupHappening/components/table.vue'
export default {
    components:{
        headr,
        center,
        tableList
    }
}
</script>
<style lang="less" scoped>
</style>

