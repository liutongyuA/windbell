<template>
<div class="cascader-tree">
  <div class="left">
    <div  v-for="item in options" @click="seleced = item" class="item">
      {{item.name}}
      <wb-icon icon="right" class="icon" v-if="item.children"></wb-icon>
    </div>
  </div>
  <div class="right" v-if="x">
    <wb-cascader-tree :options="x"></wb-cascader-tree>
  </div>
</div>
</template>

<script>
import wbIcon from './wb-icon'
export default {
  name: "wb-cascader-tree",
  data(){
    return{
      seleced:null
    }
  },
  components:{
    'wb-icon':wbIcon
  },
  computed:{
    x(){
      if(this.seleced&&this.seleced.children){
        return this.seleced.children
      }else {
        return false
      }
    }
  },

  props:['options']
}
</script>

<style scoped lang="scss">
.cascader-tree{
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left{
    height: 100%;
    >.item{
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >.icon{
        margin-left: 1em;
        transform: scale(0.5);
      }
    }
  }
  .right{
    height: 100%;
    border-left: 1px solid #dfe2e5;
  }
}
</style>