<template>
<div class="tabs-item" @click="changeSelected" :class="classes">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "wb-tabs-item",
  data(){
    return{
        active:false
    }
  },
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:Number|String,
      required:true
    }
  },
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = this.name === name
    })
  },
  methods:{
    changeSelected(){
      this.eventBus.$emit('update:selected',this.name)
    }
  },
  computed:{
    classes(){
      return {active : this.active}
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background: red;
  }
}

</style>