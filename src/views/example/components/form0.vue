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
            <el-form-item
                v-for="(item ,index) in ruleForm.list"
                :key="index"
                :label="item.name"
                :prop="'list.' + index + '.value'"
                :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
            >
                <el-input v-model="ruleForm.list[index].value"></el-input>
            </el-form-item>
        </el-form-item>
    </el-form>
</template>
<script>
import { danwei } from '@/views/example/components/data.js'
export default {
    props: ['level'],
    created() {
        this.danwei.forEach((e, index) => {
            this.ruleForm.list.push({
                name: e.name,
                value: '',
                id: e.id,
                id2: this.level.id
            })
        });
    },
    data() {
        return {
            danwei,
            error: false,
            ruleForm: {
                list: [

                ]
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.error = true;
                } else {
                    return false;
                }
            });
        },
        test() {
            this.submitForm();
            return {
                error: this.error,
                data: this.ruleForm.list
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
