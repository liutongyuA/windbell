<template>
  <div class="cascader">
    <div class="trigger" @click="visible =!visible"></div>
    <div class="popover" v-if="visible">
      <wb-cascader-tree :options="options"></wb-cascader-tree>
    </div>
  </div>
</template>

<script>
import wbCascaderTree from './wb-cascader-tree'
export default {
  name: "wb-cascader",
  data(){
    return{
      visible:false
    }
  },
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
  position: relative;
  .trigger{
    width: 100px;
    height: 32px;
    border:1px solid black;
  }
  .popover{
    height: 200px;
    white-space: nowrap;
    position: absolute;
    top: 100%;
    background-color: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.15);
  }
}
</style>