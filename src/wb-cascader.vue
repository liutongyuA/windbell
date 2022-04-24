<template>
  <div class="cascader">
    <wb-cascader-tree :options="options"></wb-cascader-tree>
<!--    <slot></slot>-->
  </div>
</template>

<script>
import wbCascaderTree from './wb-cascader-tree'
export default {
  name: "wb-cascader",
  props:{
    options:{type:Array,require:true}
  },
  components:{
    'wb-cascader-tree':wbCascaderTree
  }

}
</script>

<style scoped lang="scss">
.cascader{

}
</style>