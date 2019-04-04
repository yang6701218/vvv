<template>
    <div>
        <el-card>
            <div slot="header" class="clearfix">
                <span>系统一</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="one">前往</el-button>
            </div>
        </el-card>
        <el-card>
            <span>系统二</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="two">前往</el-button>
        </el-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        one() {
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                }
            });
        },
        two() {
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
