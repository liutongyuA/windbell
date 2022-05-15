# Dialog对话框
## :sparkles:简单用法
Dialog 弹出一个对话框，可设置显示的内容。
::: demo
```html
<template>
  <div>
      <wb-dialog 
              :visible="visible"
              title="提示"
              :showClose="true"
              :modal="true"
              @closeBefore="beforeClose"
      >
          <template slot="header"> 头部标题 </template>
          <template>
                  <span>这是一段信息</span>
          </template>
          <template slot="footer">
              <wb-button  @click="visible = false">确认</wb-button>
              <wb-button  @click="visible = false">取消</wb-button>
          </template>
      </wb-dialog>
      <wb-button @click="visible=!visible">点我打开dialog</wb-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            visible:false
        }
    },
    methods:{
        beforeClose(e){
            this.visible = e
        }
    }
}
</script>

``` 
:::

## :sparkles:自定义内容
Dialog 组件的内容可以是任意的,下面是使用wb-input的案例。
::: demo
```html
<template>
  <div>
      <wb-dialog 
              :visible="visible"
              title="提示"
              :showClose="true"
              :modal="true"
              @closeBefore="beforeClose"
      >
          <template>
              <div class="a">
                  <span style="margin-right: 1em">站点名称</span>
                  <wb-input v-model="aaa"></wb-input>
              </div>
              <div class="b" style="margin-top:1em">
                  <span style="margin-right: 1em">站点网址</span>
                  <wb-input v-model="bbb"></wb-input>
              </div>
          </template>
          <template slot="footer">
              <wb-button  @click="visible = false">确认</wb-button>
              <wb-button  @click="visible = false">取消</wb-button>
          </template>
      </wb-dialog>
      <wb-button @click="visible=!visible">打开嵌套表单的dialog</wb-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            visible:false
        }
    },
    methods:{
        beforeClose(e){
            this.visible = e
        }
    }
}
</script>

``` 
:::

## :sparkles:支持不同宽度
dialog同时也支持不同宽度展示，通过`dialogWidth`属性设置，默认是30%。
::: demo

```html

<template xmlns="http://www.w3.org/1999/html">
    <div>
        <wb-dialog
                :visible="visible"
                title="提示"
                :showClose="true"
                :modal="true"
                @closeBefore="beforeClose"
                dialogWidth="70%"
        >
            <template>
                <span>这是一段消息</span>
            </template>
            <template slot="footer">
                <wb-button @click="visible = false">确认</wb-button>
                <wb-button @click="visible = false">取消</wb-button>
            </template>
        </wb-dialog>
        <wb-button @click="visible=!visible">打开不同宽度的dialog</wb-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            beforeClose(e) {
                this.visible = e
            }
        }
    }
</script>

``` 
:::
## 📌 Dialog Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
</style>
| 参数  | 说明      | 类型    |可选值               | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
|  visible | 是否显示 Dialog    | boolean  |   —  | false     |
|  title | Dialog 的标题，也可通过具名 slot 传入    | string  |   —  | —    |
|  showClose | 是否显示关闭按钮    | boolean  |   —  | true     |
|  modal | 是否开启背景遮罩层   | boolean  |   —  | true     |
|  dialogWidth | 	Dialog 的宽度    | 	string  |   —  | 30%     |
|  closeBefore | 	关闭前的回调，会暂停 Dialog 的关闭   | 	function  |   —  | —     |

## 📌 Dialog Slot
| name  | <div style="width:39.5em">说明</div>|
| :--: | :--: |
|  title  | Dialog 的标题    |
|  —  | Dialog 的内容区    |
|  footer | Dialog 的底部按钮操作区    |