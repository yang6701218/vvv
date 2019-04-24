<template>
    <div class="menu">
        <div class="logo"></div>
        <div class="menuList">
            <Menu></Menu>
        </div>
    </div>
</template>
<script>
import Menu from '@/layout/components/layoutAside/components/menu.vue'
export default {
    components: {
        Menu
    }
}
</script>
<style lang="less" scoped>
.menu {
    background: #545c64;
    height: 100vh;
    .logo {
        img {
            height: 80px;
            width: 200px;
        }
    }
    .menuList {
        max-width: 200px;
    }
}
</style>

