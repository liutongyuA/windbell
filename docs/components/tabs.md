# Tabs标签页
## :sparkles:简单用法
::: demo
```html
<template>
  <div>
      <wb-tabs :selected.sync="selectedTab">
          <wb-tabs-nav>
              <template slot="actions"><button>设置</button></template>
              <wb-tabs-item name="user">
                  用户管理
              </wb-tabs-item>
              <wb-tabs-item name="config">
                  <wb-icon icon="settings"></wb-icon>
                  配置管理
              </wb-tabs-item>
              <wb-tabs-item name="role" disabled>
                  角色管理
              </wb-tabs-item>
          </wb-tabs-nav>
          <wb-tabs-content>
              <wb-tabs-pane name="user">用户管理相关内容</wb-tabs-pane>
              <wb-tabs-pane name="config">配置管理相关内容</wb-tabs-pane>
              <wb-tabs-pane name="role">角色管理相关内容</wb-tabs-pane>
          </wb-tabs-content>
      </wb-tabs>
  </div>
</template>
<script>
export default {
    data(){
        return{
            selectedTab:'user',
        }
    }
}
</script>

``` 
:::
## 📌 Tabs Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}

</style>

| 参数  | <div style="width:10em">说明</div>         | 类型    | <div style="width:17em">可选值</div>                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
|  selected | 默认选中的标签    | string  |   —  | —      |
## 📌 Tabs-item Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}

</style>
| 参数  | <div style="width:10em">说明</div>           | 类型    | <div style="width:15.8em">可选值</div>                     | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
|  name | 选项卡标题    | string  |   —  | —      |
|  disabled | 是否禁用    | boolean  |   —  | false      |
## 📌 Tabs-pane Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}

</style>
| 参数  |  <div style="width:10em">说明</div>       | 类型    |  <div style="width:18.2em">可选值</div>                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
|  name | 选项卡标题    | string  |   —  | —      |
