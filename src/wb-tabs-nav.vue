<template>
<div class="tabs-nav">
  <slot></slot>
 <div class="actions-wrapper">
   <slot name="actions"></slot>
 </div>
</div>
</template>

<script>
export default {
  name: "wb-tabs-nav",
  inject:['eventBus'],
  created() {
  }
}
</script>

<style scoped lang="scss">
.tabs-nav{
  height: 40px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>