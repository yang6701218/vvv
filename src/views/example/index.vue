<template>
    <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item label="活动选择" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分销价格"></el-form-item>
            <el-row v-for="(item,index) in levelList" :key="index">
                <from0 :level="item" ref="from0"></from0>
            </el-row>
            <el-form-item label="业绩分销设定">
                <el-form-item label-width="100px">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="1">模式一</el-radio>
                        <el-radio label="2">模式二</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>
            <div v-if="ruleForm.resource==1">
                <el-row v-for="(item,index) in levelList" :key="index">
                    <from1 :level="item"></from1>
                </el-row>
            </div>
            <div v-if="ruleForm.resource==2">
                <el-row v-for="(item,index) in levelList" :key="index">
                    <from2 :level="item"></from2>
                </el-row>
            </div>
            <el-form-item label="推荐业绩">
                <el-form-item label-width="100px">
                    <el-radio-group v-model="ruleForm.desc">
                        <el-radio label="1">模式一</el-radio>
                        <el-radio label="2">模式二</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>
            <div v-if="ruleForm.desc==1">
                <el-row v-for="(item,index) in levelList" :key="index">
                    <from3 :level="item"></from3>
                </el-row>
            </div>
            <div v-if="ruleForm.desc==2">
                <el-row v-for="(item,index) in levelList" :key="index">
                    <from4 :level="item"></from4>
                </el-row>
            </div>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { danwei, levelList } from '@/views/example/components/data.js'
import from0 from '@/views/example/components/form0.vue'
import from1 from '@/views/example/components/form1.vue'
import from2 from '@/views/example/components/form2.vue'
import from3 from '@/views/example/components/form3.vue'
import from4 from '@/views/example/components/form4.vue'
export default {
    components: {
        from0,
        from1,
        from2,
        from3,
        from4
    },
    data() {
        return {
            danwei,
            levelList,
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '1',
                desc: '1'
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
            //  console.log(this.$refs[0].submitForm)
            for (let i = 0; i < this.$refs.from0.length; i++) {
                let data = this.$refs.from0[i].test();
                console.log(data)
            }
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         alert('submit!');
            //     } else {
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
