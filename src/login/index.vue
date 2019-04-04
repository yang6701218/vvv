<template>
    <div class="main">
        <el-card class="loginBox">
            <div slot="header" class="clearfix">
                <span>后台系统</span>
            </div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="0"
                class="demo-ruleForm"
                label-position="left"
            >
                <el-form-item prop="userName">
                    <el-input v-model="ruleForm.userName" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="loginBtn" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            ruleForm: {
                userName: 'test',
                password: '123456',
            },
            rules: {
                userName: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                },],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                },],
            }
        }
    },
    methods: {
        ...mapActions[{}],
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login()
                } else {
                    return false;
                }
            });
        },
        login() {
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                }
            });

        }
    }
}
</script>
<style lang="less" scoped>
.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    .clearfix {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .loginBtn {
        margin-top: 10px;
        width: 100%;
    }

    .loginBox {
        width: 400px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}
</style>
