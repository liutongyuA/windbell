<template>
<div class="tabs-content">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "wb-tabs-content",
  inject:['eventBus'],
  created() {
  }
}
</script>

<style scoped>

</style>