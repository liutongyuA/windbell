<template>
<div class="tabs-nav">
  <slot></slot>
  <slot name="actions"></slot>
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

<style scoped>

</style>