<template>
  <svg class="svg">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: "wb-icon",
  props:['icon'],
  mounted() {
    // import('./svg').then(module => {
    // })
  }
}
</script>

<style scoped lang="scss">
.svg{
  width: 1em;height: 1em;
}
</style>