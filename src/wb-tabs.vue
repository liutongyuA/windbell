<template>
<div class="tabs">
  <slot></slot>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "wb-tabs",
  props:{
    selected:{
      type:String,
      require:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value)>=0
      }
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {eventBus:this.eventBus}
  },
mounted() {
  //这个组件必须要触发这个事件，用于修改selected
  //   this.eventBus.$emit('update:selected',this.selected)
  this.$children.forEach((vm)=>{
    if(vm.$options.name === 'wb-tabs-nav'){
      vm.$children.forEach((childVm)=>{
        if (childVm.$options.name === 'wb-tabs-item'&& childVm.name === this.selected){
          this.eventBus.$emit('update:selected', this.selected, childVm.$el.getBoundingClientRect())
        }
      })
    }
  })
}
}
</script>

<style scoped>

</style>