<template>
  <span>
    <el-button type="primary" @click="dialogVisible = true"
      >新增商品分组</el-button
    >

    <el-dialog
      title="新增商品分组"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            placeholder="最多140字"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品排序" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择商品排序">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </span>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
          ruleForm: {
          name: '',
          region: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
           submitForm(formName) {
             this.$refs[formName].validate((valid) => {
          if (valid) {
           this.dialogVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
         this.dialogVisible=false
      }
    }
  };
</script>
