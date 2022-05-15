# Layout布局容器
用于布局的容器组件，方便快速搭建页面的基本结构
## :sparkles:简单用法
::: demo **上中下**布局，外容器`wb-layout`包裹顶栏容器`wb-header`、内容区容器`wb-content`、底栏容器`wb-footer`
```html
<template>
    <div>
        <wb-layout>
            <wb-header>头部</wb-header>
            <wb-content>内容区</wb-content>
            <wb-footer>底部</wb-footer>
        </wb-layout>
    </div>
</template>
<style>
    .wbHeader, .wbFooter {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }
        .contentLayout {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }
</style>
```
:::
## :sparkles:简单用法
::: demo **上左中下**布局，外容器`wb-layout`包裹顶栏容器`wb-header`、底栏容器`wb-footer` 并嵌套包裹外容器
```html
<template>
    <div>
        <wb-layout >
            <wb-header>头部</wb-header>
            <wb-layout>
                <wb-aside>左侧边栏</wb-aside>
                <wb-content>右内容区</wb-content>
            </wb-layout>
            <wb-footer>底部</wb-footer>
        </wb-layout>
    </div>
</template>
<style>
    .wbHeader, .wbFooter {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }
        .aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
            padding: 10px;
        }
        .contentLayout {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }
</style>
```
:::


## :sparkles:简单用法
::: demo **左上中下**布局，外容器`wb-layout`包裹侧边栏容器`wb-aside`并嵌套包裹外容器
```html
<template>
    <div>
        <wb-layout>
            <wb-aside>左侧边栏</wb-aside>
            <wb-layout>
                <wb-header>头部</wb-header>
                <wb-content>右内容区</wb-content>
                <wb-footer>底部</wb-footer>
            </wb-layout>
        </wb-layout>
    </div>
</template>
<style>
    .wbHeader, .wbFooter {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }
        .aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
            padding: 10px;
        }
        .contentLayout {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }
</style>
```
:::