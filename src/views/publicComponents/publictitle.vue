<template>
  <div class="title">
    <p>
      {{ titleTxt }}
    </p>
  </div>
</template>
<script>
export default {
    props:['titleTxt']
}
</script>
<style lang="less" scoped>
.title {
  height: 30px;
  line-height: 40px;
  text-align: left;
  padding: 5px 30px;
  background-color: #cccccc;
  p {
    margin: 0;
    padding: 0 20px;
    height: 30px;
    border-left: 2px solid red;
    line-height: 30px;
  }
}
</style>
