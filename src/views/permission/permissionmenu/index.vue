<template>
  <el-card>
    <div class="main">
      <div class="character">
        <el-radio-group v-model="checkboxGroup1" class="characterList">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <MenuList></MenuList>
      </div>
    </div>
  </el-card>
</template>

<script>
import MenuList from '@/views/permission/permissionmenu/components/menuList.vue'
  export default {
      components:{
        MenuList
      },
    data () {
      return {
        checkboxGroup1: '上海'
      };
    }
  }
</script>
<style lang="less" scoped>
.main {
  display: flex;
  .character {
    width: 200px;
    .characterList {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

