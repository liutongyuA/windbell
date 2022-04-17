<template>
<div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
:style="{paddingRight: gutter/2 +'px', paddingLeft:gutter/2 +'px'}"
>
<!--  为了能看清padding加的div-->
  <div style="border: 1px solid green;" >
  <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "wb-col",
  props:{
    span:{type:[Number,String]},
    offset:{type:[Number,String]}
  },
  data(){
    return {
      gutter:0 //父组件mounted时传过来
    }
  }
}
</script>

<style scoped lang="scss">
.col{
  height: 100px;
  width: 50%;
  //background-color: #ddd;
  //border: 1px solid red;
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