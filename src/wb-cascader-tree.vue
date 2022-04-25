<template>
<div class="cascader-tree">
  <div class="left">
    <div  v-for="(item,index) in options" :key="index" @click="onClickItem(item)" class="item">
      {{item.name}}
      <wb-icon icon="right" class="icon" v-if="item.children"></wb-icon>
    </div>
  </div>
  <div class="right" v-if="x">
    <wb-cascader-tree :options="x" :level="level+1" :selected="selected" @updateSelected="updateSelected"></wb-cascader-tree>
  </div>
</div>
</template>

<script>
import wbIcon from './wb-icon'
export default {
  name: "wb-cascader-tree",

  // props:['options','selected']
props:{
  options:{type:Array,require:true},
  selected:{type:Array,default:()=>[]},
  level:{type:Number,default:0}
},
  components:{
    'wb-icon':wbIcon
  },
  methods:{
    onClickItem(item){
      // this.[this.level] = item
      // 数组直接修改vue无法监测
      // this.$set(this.selected,this.level,item)
      const copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level+1)
      this.$emit('updateSelected',copy)
    },
    updateSelected(copy){
      this.$emit('updateSelected',copy)
    }
  },
  computed:{
    x(){
      let s = this.selected[this.level]
      if(s&&s.children){
        return s.children
      }else {
        return false
      }
    }
  },

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