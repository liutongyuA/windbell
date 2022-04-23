<template>
<div class="popover" >
  <div class="content-wrapper" v-if="visible">
    <slot name="content"></slot>
  </div>
  <div @click.stop="xxx">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "wb-popover",
  data(){
    return{
      visible:false
    }
  },
  methods:{
    xxx(){
      this.visible=!this.visible
      if(this.visible === true){
        this.$nextTick(()=>{
          let eventHandler=()=>{
            this.visible=false
            document.removeEventListener("click", eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.popover{
  display: inline-block;
  vertical-align: top;
  border: 1px solid red;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid green;
    box-shadow:0 0 3px rgb(0,0,0,0.5);
  }
}
</style>