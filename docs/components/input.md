# Input输入框

## :sparkles:简单用法
::: demo
```html
<wb-input value="正常输入"></wb-input>
```
:::
## :sparkles:禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<wb-input value="禁止输入" disabled></wb-input>
```
:::
## :sparkles:只读状态
::: demo 通过 `readonly` 属性指定是否只读 input 组件
```html
<wb-input value="只读" readonly></wb-input>
```
:::
## :sparkles:错误状态
::: demo 通过 `error` 属性指定input 组件输入错误信息提示 
```html
<wb-input value="输入错误" error="信息输入错误，请检查"></wb-input>
```
:::
## :sparkles:双向绑定
::: demo 通过`v-model`属性实现双向绑定
```html
<template>
    <div>
        <wb-input v-model="message"></wb-input>
        <div style="margin-top: 20px">message:{{message}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: '双向绑定',
            }
        }
    }
</script>
```
:::
## :sparkles:事件绑定
::: demo 
```html
<template>
    <div>
        <wb-input value="事件绑定" @change="callback"></wb-input>
        <wb-input value="事件绑定" @input="callback2"></wb-input>
    </div>
</template>
<script>
    export default {
        methods:{
            callback(value){
                console.log(value);
            },
            callback2(value){
                console.log(value);
            }
        }
    }
</script>
```
:::

## 📌 Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
tbody>tr>td:nth-child(4){ min-width: 18.5em}
</style>

| 参数  | 说明         | 类型    | 可选值                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| value / v-model  | 绑定值    | string  |   —  | —      |
| disabled  | 是否禁用         | boolean  | — | false      |
| readonly | 是否只读          | boolean |  —   | false  |
| error | 错误信息          | String |  —   | —  |

## 📌 Input Events

| 方法名  | <div style="width:31em">说明 </div>        | 参数    
| :--: | :--:| :--: 
| change   | 仅在输入框失去焦点或用户按下回车时触发    | (value: string | number)  |
| input  | 	在 Input 值改变时触发         | (value: string | number)  | 
| focus | 在 Input 获得焦点时触发	          |(event: Event) |
| blur | 在 Input 失去焦点时触发          |(event: Event) |