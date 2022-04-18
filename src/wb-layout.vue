<template>
<div class="layout" :class="wbClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "wb-layout",
  data(){
    return {
      wbClass:{hasAside : false}
    }
  },
  mounted() {
    this.$children.forEach(item=>{
      if(item.$options.name === 'wb-aside'){
        this.wbClass.hasAside = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasAside{
    flex-direction: row;
  }
}
</style>