<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :inline="true"
    >
        <el-row v-for="(item,index) in ruleForm.list" :key="index">
            <el-form-item :label="level.name">
                <el-form-item label="最低" prop="name">
                    <el-input v-model="item.min"></el-input>
                </el-form-item>
                <el-form-item label="最高" prop="name">
                    <el-input v-model="item.max"></el-input>
                </el-form-item>
                <el-form-item label="百分比" prop="name">
                    <el-input v-model="item.value"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button type="primary" @click="add">增加</el-button>
                    <el-button type="success" @click="removeDomain(item)" v-if="index>0">删除</el-button>
                </el-form-item>
            </el-form-item>
        </el-row>
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
                list: [
                    {
                        id2: this.level.id,
                        min: '',
                        max: '',
                        value: ''
                    }
                ]
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
        add() {
            this.ruleForm.list.push({
                id2: this.level.id,
                min: '',
                max: '',
                value: ''
            })
        },
        removeDomain(item) {
            var index = this.ruleForm.list.indexOf(item)
            if (index !== -1) {
                this.ruleForm.list.splice(index, 1)
            }
        },
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
