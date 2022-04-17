<template>
<div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "wb-col",
  props:{
    span:{type:[Number,String]},
    offset:{type:[Number,String]}
  }
}
</script>

<style scoped lang="scss">
.col{
  height: 100px;
  width: 50%;
  background-color: #ddd;
  border: 1px solid red;

  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n / 24) * 100%;
    }
    }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

</style>