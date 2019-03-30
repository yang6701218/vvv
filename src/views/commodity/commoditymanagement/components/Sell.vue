<template>
  <div>
    <div>
      <span style="float:left">
        <el-button
          type="primary"
          @click="$router.push({ name: 'commodityadd' })"
          >发布商品</el-button
        >
      </span>
      <div class="searchCondition">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </div>
    </div>
    <tableList />
  </div>
</template>
<script>
import tableList from '@/views/commodity/commoditymanagement/components/table.vue'
export default {
    components:{
        tableList
    },
    data(){
        return{
              options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        search:''
        }
    }
}
</script>
<style lang="less" scoped>
.searchCondition {
  float: right;
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-right: 50px;
}
</style>
