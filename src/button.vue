<template>
  <button class='wb-button' :class=`icon-${iconPosition}`>
    <wb-icon icon="loading" class="loading svg" v-if="loading"></wb-icon>
    <wb-icon :icon="icon" v-if="icon&&!loading" class="svg"></wb-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
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

<style  lang="scss">
@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.wb-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
  border-color: var(--border-color-hover);
}
  &:active {
  background-color: var(--button-active-bg);
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