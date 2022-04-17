<template>
<div class="col" :class="colClass" :style="colStyle">
  <slot></slot>
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
      gutter:0 ,//父组件mounted时传过来,
      colClass:[this.span && `col-${this.span}`,this.offset && `offset-${this.offset}`]
    }
  },
  computed:{
    colClass(){
      const {span,offset} = this
      return [span && `col-${span}`,offset && `offset-${offset}`]
    },
    colStyle(){
      const {gutter} =this
      return {paddingRight: gutter/2 +'px', paddingLeft:gutter/2 +'px'}
    }
  }
}
</script>

<style scoped lang="scss">
.col{
  width: 50%;
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