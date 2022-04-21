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
      if(this.disabled) return
      this.eventBus.$emit('update:selected',this.name,this.$el.getBoundingClientRect())
    }
  },
  computed:{
    classes(){
      return {
        active : this.active,
        disabled :this.disabled
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item{
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  &.active {
    color: #51A7FF;
    .svg{
      fill: #51A7FF;
    }
  }
  &.disabled{
    color: #929190 ;
    cursor:not-allowed;
  }

}

</style>