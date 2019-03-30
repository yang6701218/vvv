<template>
  <div class="header">
    <!-- <el-button @click="$store.commit('changeisCollapse')">点击我</el-button>
    <fullscreen /> -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import fullscreen from '@/components/fullscreen/index.vue'
export default {
    components:{
fullscreen
    },
    computed:{
        ...mapGetters([])
    },
    created(){
       
    }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
}
</style>


