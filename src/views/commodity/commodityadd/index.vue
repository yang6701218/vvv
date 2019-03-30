<template>
  <div>
    <!-- <div class="check">
      <button autofocus="autofocus" @click="active = 1">
        1.编辑商品基本信息
      </button>
      <button @click="active = 2">2.编辑商品详细信息</button>
    </div> -->
    <div class="check">
      <el-radio v-model="radio7" label="1" border class="text"
        >备选项1</el-radio
      >
      <el-radio v-model="radio7" label="2" border class="text"
        >备选项2</el-radio
      >
    </div>
    <div class="Info">
      <basicInfo v-if="active == 1"></basicInfo>
      <detailedInfo v-if="active == 2"></detailedInfo>
    </div>
  </div>
</template>
<script>
import basicInfo from '@/views/commodity/commodityadd/components/basicInfo.vue'
import detailedInfo from '@/views/commodity/commodityadd/components/detailedInfo.vue'
export default {
    components:{
        basicInfo,detailedInfo
    },
    data(){
        return{
            active:1,
            radio7:''
        }
    }
}
</script>
<style lang="less" scoped>
.check {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: white;
  .text {
    width: 48%;
  }
}
.Info {
  margin-top: 30px;
}
</style>

