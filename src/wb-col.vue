<template>
<div class="col" :class="colClass" :style="colStyle">
  <slot></slot>
</div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "wb-col",
  props:{
    span:{type:[Number,String]},
    offset:{type:[Number,String]},
    //sm:{span:'8',offset:'2'}
    sm:{type:Object,validator},
    md:{type:Object,validator},
    lg:{type:Object,validator},
    xl:{type:Object,validator},
  },
 methods:{
   createClasses (obj, str = '') {
     if (!obj) {return []}
     let array = []
     if (obj.span) { array.push(`col-${str}${obj.span}`) }
     if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
     return array
   }
 },
  data(){
    return {
      gutter:0 ,//父组件mounted时传过来,
    }
  },
  computed:{
    colClass(){
      const {span,offset,sm,md,lg,xl,createClasses} = this
      return [
        // span && `col-${span}`,
        // offset && `offset-${offset}`,
      //    col-sm-span ipad样式
        ...createClasses({span, offset}),
        ...createClasses(sm, 'sm-'),
        ...createClasses(md, 'md-'),
        ...createClasses(lg, 'lg-'),
        ...createClasses(xl, 'xl-'),
      ]
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
  //width: 50%;
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

  @media (min-width: 577px) {
    @for $n from 1 through 24 {
      &.col-sm-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-sm-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    @for $n from 1 through 24 {
      &.col-md-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-md-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    @for $n from 1 through 24 {
      &.col-lg-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-lg-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    @for $n from 1 through 24 {
      &.col-xl-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-xl-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

}

</style>