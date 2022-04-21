<template>
<div class="tabs-pane" v-if="active">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "wb-tabs-pane",
  inject:['eventBus'],
  data(){
    return{
      active:false
    }
  },
  props:{
    name:{
      type:Number|String,
      required:true
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = this.name === name
    })
  }
}
</script>

<style scoped lang="scss">

</style>