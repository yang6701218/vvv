<template>
    <el-container>
        <layoutAside></layoutAside>
        <el-container>
            <el-header style="height:80px">
                <layoutHeadr></layoutHeadr>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import layoutAside from '@/layout/components/layoutAside/index.vue'
import layoutHeadr from '@/layout/components/layoutHeadr/index.vue'
export default {
    components: {
        layoutAside,
        layoutHeadr
    }
}
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    line-height: 80px;
}
.el-header {
    height: 100px;
}
.el-main {
    color: #333;
    margin: 20px;
}

body > .el-container {
    margin-bottom: 40px;
    height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>



