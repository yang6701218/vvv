<template>
    <div class="menu">
        <div class="logo">
            <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4154029029,765167532&fm=27&gp=0.jpg"
                alt
            >
        </div>
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

