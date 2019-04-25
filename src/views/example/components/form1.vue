<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :inline="true"
    >
        <el-form-item :label="level.name">
            <el-form-item label="价格" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="等级" prop="id2">
                <el-select v-model="ruleForm.id2" placeholder="请选择活动区域">
                    <el-option
                        :label="item.name"
                        :value="item.id"
                        v-for="(item,index) in danwei"
                        :key="index"
                    >{{item.name}}</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="百分比" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-form-item>
    </el-form>
</template>
<script>
import { danwei } from '@/views/example/components/data.js'
export default {
    props: ['level'],
    created() {

    },
    data() {
        return {
            danwei,
            ruleForm: {
                id: this.level.id,
                id2: '',
                name: '',
                region: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
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
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
