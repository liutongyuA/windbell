<template>
  <div class="cascader">
    <div class="trigger" @click="visible =!visible">
      {{selectedVal}}  &nbsp;
    </div>
    <div class="popover" v-if="visible">
      <wb-cascader-tree :selected="selected" :options="options" @updateSelected="updateSelected"></wb-cascader-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "wb-cascader",
  data(){
    return{
      visible:false
    }
  },
  props:{
    options:{type:Array,require:true},
    selected:{type:Array,default:()=>[]}
  },
  components:{
    'wb-cascader-tree':()=>import('./wb-cascader-tree')
  },
  methods:{
    updateSelected(copy){
      this.$emit('updateSelected',copy)
    }
  },
  computed:{
    selectedVal(){
      let aaa = this.selected.map((item)=>{
          return item.name
      })
      return aaa.join('-')
    }
  },

}
</script>

<style scoped lang="scss">
.cascader{
  position: relative;
  z-index:999;
  .trigger{
    display: inline-block;
    height: 34px;
    min-width: 10em;
    padding: 0 1em;
    line-height: 32px;
    border:1px solid #ddd;
    border-radius: 4px;
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