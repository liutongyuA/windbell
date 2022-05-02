# Popover弹出框

## :sparkles:简单用法

::: demo

```html

<wb-popover>
    <template slot="content">
        <div>我是popover弹出内容</div>
    </template>
    <wb-button>上边弹出</wb-button>
</wb-popover>
<wb-popover position="bottom">
    <template slot="content">
        <div>我是popover弹出内容</div>
    </template>
    <wb-button>下边弹出</wb-button>
</wb-popover>
<wb-popover position="left">
    <template slot="content">
        <div>我是popover弹出内容</div>
    </template>
    <wb-button>左边弹出</wb-button>
</wb-popover>
<wb-popover position="right">
    <template slot="content">
        <div>我是popover弹出内容</div>
    </template>
    <wb-button>右边弹出</wb-button>
</wb-popover>
```

:::

## 📌 Attributes

<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
tbody>tr>td:nth-child(4){ min-width: 23.1em}
</style>

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 
| :--: | :--: | :--: | :--: | :--: |
| position | 弹框位置 | string | top/bottom/left/right | top |
