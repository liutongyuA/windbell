<template>
  <div id="app">
    <wb-dialog
        :visible="true"
        title="设置标题"
        :showClose="true"
        :modal="true"
    >
<!--      <template slot="header"> 头部标题 </template>-->
      <template> 默认插槽 </template>
      <template slot="footer"> 尾部 </template>
    </wb-dialog>
    <wb-input></wb-input>
    <wb-button>点我</wb-button>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 200px;
}
</style>