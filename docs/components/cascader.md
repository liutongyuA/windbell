# Cascader级联选择器
## :sparkles:简单用法
::: demo 
```html
<template>
    <div>
        <wb-cascader :options="options" :selected="selected" @updateSelected="selected=$event"></wb-cascader>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options:   [
                    {
                        name: "一级菜单1",
                        children: [
                            { name: "二级菜单1-1" },
                            {
                                name: "二级菜单1-2",
                                children: [
                                    { name: "三级菜单1-2-1", children: [{ name: "四级菜单1-2-1-1" }] },
                                ],
                            },
                        ],
                    },
                    { name: "一级菜单2" ,
                        children: [{ name: "二级菜单2-1" }, { name: "二级菜单2-2" },{ name: "二级菜单2-3" },{ name: "二级菜单2-4" }],},
                    {
                        name: "一级菜单3",
                        children: [{ name: "二级菜单3-1" }, { name: "二级菜单3-2" }],
                    },
                ],
                selected:[]
            }
        }
    }
</script>
```
:::