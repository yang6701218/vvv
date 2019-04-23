<template>
    <div>
        <el-button type="primary" @click="changeisCollapse">主要按钮</el-button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations([
            'changeisCollapse'
        ]),
    }
}
</script>
