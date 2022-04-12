<template>
  <svg class="svg">
    <use :xlink:href=`#i-${icon}`></use>
  </svg>
</template>

<script>
export default {
  name: "icon",
  props:['icon']
}
</script>

<style scoped lang="scss">
.svg{
  width: 1em;height: 1em;
}
</style>