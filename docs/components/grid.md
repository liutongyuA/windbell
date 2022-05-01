# Grid栅格布局

通过基础的 24 分栏，迅速简便地创建布局。

## :sparkles:简单用法

::: demo 通过 row 和 col 组件嵌套使用，通过col组件`span`属性控制分栏

```html

<template>
    <div>
        <wb-row>
            <wb-col span="24">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
        <wb-row>
            <wb-col span="12">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="12">
                <div class="grid-content bg-purple-light"></div>
            </wb-col>
        </wb-row>
        <wb-row>
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="6">
                <div class="grid-content bg-purple-light"></div>
            </wb-col>
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="6">
                <div class="grid-content bg-purple-light"></div>
            </wb-col>
        </wb-row>
        <wb-row>
            <wb-col span="2">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="5">
                <div class="grid-content bg-purple-light"></div>
            </wb-col>
            <wb-col span="17">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
    </div>
</template>
<style>
    .row {
        margin-bottom: 20px;
    }

    .row:last-child {
        margin-bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #E5E9F2;
    }
</style>
```

:::

## :sparkles:分栏偏移

::: demo 通过 row 和 col 组件嵌套使用，通过col组件`offset`属性控制左侧偏移量

```html

<template>
    <div>
        <wb-row>
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="6" offset="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
        <wb-row>
            <wb-col span="12" offset="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
    </div>
</template>
<style>
    .row {
        margin-bottom: 20px;
    }

    .row:last-child {
        margin-bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }
</style>
```

:::

## :sparkles:混合布局

::: demo 通过 row 和 col 组件嵌套使用，通过row组件`gutter`属性控制col左右间距，实际距离为`gutter/2`

```html

<template>
    <div>
        <wb-row gutter="20">
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
        <wb-row gutter="20">
            <wb-col span="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col span="6" offset="6">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
        <wb-row :gutter="20">
            <wb-col :span="8">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col :span="8">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col :span="4">
                <div class="grid-content bg-purple"></div>
            </wb-col>
            <wb-col :span="4">
                <div class="grid-content bg-purple"></div>
            </wb-col>
        </wb-row>
    </div>
</template>
<style>
    .row {
        margin-bottom: 20px;
    }

    .row:last-child {
        margin-bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }
</style>
```

:::

## :sparkles:响应式

::: demo 预设了五个响应尺寸，`xs(默认)\sm\md\lg\xl`

```html

<template>
    <div>
        <wb-row gutter="20">
            <wb-col span="8" :sm="{span:'6',offset:'2'}" :md="{span:'4',offset:'2'}" :lg="{span:'3',offset:'2'}" :xl="{span:'1',offset:'2'}"><div class="grid-content bg-purple"></div></wb-col>
            <wb-col span="4" :sm="{span:'6',offset:'2'}" :md="{span:'8',offset:'2'}" :lg="{span:'9',offset:'2'}" :xl="{span:'11',offset:'2'}"><div class="grid-content bg-purple"></div></wb-col>
            <wb-col span="4" :sm="{span:'6',offset:'2'}" :md="{span:'8',offset:'2'}" :lg="{span:'9',offset:'2'}" :xl="{span:'11',offset:'2'}"><div class="grid-content bg-purple"></div></wb-col>
            <wb-col span="8" :sm="{span:'6',offset:'2'}" :md="{span:'4',offset:'2'}" :lg="{span:'3',offset:'2'}" :xl="{span:'1',offset:'2'}"><div class="grid-content bg-purple"></div></wb-col>
        </wb-row>
    </div>
</template>
<style>
    .row {
        margin-bottom: 20px;
    }

    .row:last-child {
        margin-bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }
</style>
```
:::
## 📌 wb-row Attributes
<style>
 td,th{
   border: none!important;
}
tbody{border-bottom: 1px solid #D9D9D9;}
</style>

| 参数  | 说明         | 类型    | <div style="width:23em">可选值</div>                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| gutter  | 栅格间隔    | number  |   —  | —      |


## 📌 wb-col Attributes

| 参数  | 说明       | 类型   | <div style="width:6em">可选值 </div>                      | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| span    | 栅格占据的列数    | number  |   —  | 24     |
| offset  | 栅格左侧的间隔格数    | number  |   —  | 0     |
| sm  | 响应式栅格数`≥577px`    | object(例如： {span: 4, offset: 4})  |   —  | —      |
| md  | 响应式栅格数`≥769px`   | object(例如： {span: 4, offset: 4})  |   —  | —      |
| lg  | 响应式栅格数`≥993px`    | object(例如： {span: 4, offset: 4})  |   —  | —      |
| xl  | 响应式栅格数`≥1201px` | object(例如： {span: 4, offset: 4})  |   —  | —      |
