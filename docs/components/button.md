# Button按钮

## :sparkles:简单用法
::: demo使用`icon`属性设置图标，`icon-position`属性设置图标环绕文字位置。
```html
<wb-button>默认按钮</wb-button>
<wb-button icon="download">下载</wb-button>
<wb-button icon="settings" icon-position="right">右侧图标</wb-button>
```
:::
## :sparkles:加载中
::: demo要设置为 loading 状态，只要设置`loading`属性为`true`即可。
```html
<template>
  <div>
      <wb-button loading>默认加载</wb-button>
      <wb-button icon="settings" :loading="loading" 
      @click="loading=!loading">点击加载</wb-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        loading: false
    }
  }
}
</script>

``` 
:::

## :sparkles:按钮组
::: demo使用`<wb-button-group>`标签来嵌套你的按钮。
```html
<wb-button-group>
    <wb-button icon="left">上一页</wb-button>
    <wb-button icon="right" icon-position="right">下一页</wb-button>
</wb-button-group>
<wb-button-group>
    <wb-button icon="thumbs-up"></wb-button>
    <wb-button icon="info"></wb-button>
    <wb-button icon="settings"></wb-button>
</wb-button-group>
    
```
:::

## 📌 Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
tbody>tr>td:nth-child(4){ min-width: 276px}
</style>

| 参数  | 说明         | 类型    | 可选值                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| icon  | 图标类名         | string  |   —         | —      |
| iconPosition  | 图标位置         | string  | left / right | left      |
| loading | 是否加载中效果 | boolean |  —                                 | false  |


