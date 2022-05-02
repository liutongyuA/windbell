# Message消息提示
## :sparkles:简单用法
从三个位置出现，3 秒后自动消失。
::: demo`$message`为全局注册的插件，接收的第一个参数为提示框消息，第二个参数为配置项`duration`代表关闭时间单位是毫秒，默认是0不关闭，`position`弹出位置。
```html
<template>
  <div>
      <wb-button @click="showTop">顶部出现</wb-button>
      <wb-button @click="showMiddle">中部出现</wb-button>
      <wb-button @click="showBottom">底部出现</wb-button>
  </div>
</template>
<script>
export default {
    methods:{
        showTop(){
            this.$message(
                    '这是一条消息提示', 
                    {duration:3000,position:'top'}
            )
        },
        showMiddle(){
            this.$message(
                    '这是一条消息提示',
                    {duration:3000,position:'middle'}
            )
        },
        showBottom(){
            this.$message(
                    '这是一条消息提示',
                    {duration:3000,position:'bottom'}
            )
        }
  }
}
</script>

``` 
:::
## :sparkles:可关闭
可以添加关闭按钮。
::: demo默认的 `Message` 是不可以被人工关闭的，如果需要可手动关闭的`Message`，可以使用`showClose`属性。同时可以通过`onclose`属性指定关闭时所执行的回调函数内容。
```html
<template>
  <div>
      <wb-button @click="show">点击可关闭</wb-button>
  </div>
</template>
<script>
export default {
    methods:{
        show(){
            this.$message(
                    '这是一条可关闭的消息提示', 
                    {duration:0,position:'top',showClose:true,onclose:function(){alert('回调函数想干嘛')}}
            )
        },
  }
}
</script>

``` 
:::


## :sparkles:使用 HTML 片段
支持传入 HTML 片段展示。
::: demo`enableHtml`属性设置为true，`message` 就会被当作 HTML 片段处理
```html
<template>
  <div>
      <wb-button @click="show">点击可关闭</wb-button>
  </div>
</template>
<script>
export default {
    methods:{
        show(){
            this.$message(
                    '<strong>这是 <i>HTML</i> 片段</strong>', 
                    {duration:0,position:'top',showClose:true,enableHtml:true,onclose:function(){alert('回调函数想干嘛')}}
            )
        },
  }
}
</script>

``` 
:::
## 📌 Options
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
</style>

| 参数  | 说明         | 类型    | 可选值                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
|  message | 消息文字    | string  |   —  | —      |
| duration  | 显示时间, 毫秒。	         | number  | — | 0    |
| position | 展示位置          | string |  top/middle/bottom   | top  |
| showClose | 	是否显示关闭按钮          | boolean |  —   | false  |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例          | function |  —   | —  |
| enableHtml | 是否将 message 属性作为 HTML 片段处理         | boolean |  —   | false  |
