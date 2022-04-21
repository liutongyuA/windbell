<template>
<div class="tabs-nav">
  <slot></slot>
  <div class="line" ref="line"></div>
 <div class="actions-wrapper">
   <slot name="actions"></slot>
 </div>
</div>
</template>

<script>
export default {
  name: "wb-tabs-nav",
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(name,item)=>{
      this.active = this.name === name
      this.$refs.line.style.width= item.width+'px'
      this.$refs.line.style.left = item.left +'px'
    })
  },
}
</script>

<style scoped lang="scss">
.tabs-nav{
  height: 40px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #E4E7ED;
  position: relative;
  >.line{
    position: absolute;
    border-bottom: 1px solid #51A7FF;
    bottom: -1px;
    transition: all 350ms;
  }
  >.actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>