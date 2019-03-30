<template>
  <div>
    <el-table
      :data="tableData"
      class="tb-edit"
      style="width: 100%"
      highlight-current-row
    >
      <el-table-column label="姓名" width="180">
        <template scope="scope">
          <el-input
            size="small"
            v-model="scope.row.name"
            placeholder="请输入内容"
            @change="handleEdit(scope.$index, scope.row)"
          ></el-input>
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template scope="scope">
          <el-input
            size="small"
            v-model="scope.row.address"
            placeholder="请输入内容"
            @change="handleEdit(scope.$index, scope.row)"
          ></el-input>
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="handleAdd">新增参数</el-button>
    <div class="foot">
      <el-button type="primary" @click="handleAddNew">保存</el-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
        computed: {
        ...mapState([
           
        ]),
    },

    data(){
        return{
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
      methods: {
     ...mapMutations([
            'setTableData'
        ]),
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
             this.$confirm('此操作将删除该该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.tableData.splice(index,1)
        }).catch(() => {
        
        });
     
            },
            handleAdd(){
                this.tableData.push({
                     date: '2016-05-03',
                name: '我是新增',
                address: '我是新增参数'
                })
            },
            handleAddNew(){
                console.log(this.tableData)
            }
        }
}
</script>
<style lang="less" scoped>
.tb-edit .el-input {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
}
.foot {
  margin-top: 30px;
}
</style>
