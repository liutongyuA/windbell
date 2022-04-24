<template>
<div>
  <div v-for="item in options">
    {{item.name}}
    <div v-if="item.children">
      <wb-cascader-tree :options="item.children"></wb-cascader-tree>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "wb-cascader-tree",
  props:['options']
}
</script>

<style scoped>

</style>