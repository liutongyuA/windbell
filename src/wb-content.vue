<template>
  <div class="contentLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wb-content"
}
</script>

<style scoped lang="scss">
.contentLayout{
  flex-grow: 1;
}
</style>