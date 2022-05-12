<template>
    <button class='wb-button' :class="{[`icon-${iconPosition}`]: true}"  @click="$emit('click')">
      <wb-icon icon="loading" class="loading svg" v-if="loading"></wb-icon>
      <wb-icon :icon="icon" v-if="icon&&!loading" class="svg"></wb-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>

<script>
import Icon from './wb-icon'
export default {
  name: "wb-button",
  components:{
    'wb-icon':Icon
  },
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value) {
        return value !== 'left' && value !=='right' ? false :true
      }
    },
    loading:{
      default: false,
      type:Boolean
    }
  }
}
</script>

<style  lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$border-radius: 4px;
$button-active-bg: #eee;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.wb-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  border-color: $border-color-hover;
}
  &:active {
  background-color: $button-active-bg;
}
  &:focus {
  outline: none;
}
  .loading{
    animation: spin 2s linear infinite;
  }
  > .svg{order:1; margin-right: .1em; }
  > .content{order: 2 }
  &.icon-right{
    > .svg{order:2;margin-right: 0; margin-left: .1em;}
    > .content{order: 1}
  }
}
</style>