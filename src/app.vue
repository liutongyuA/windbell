<template>
  <div id="app">
    <p>1111</p>
    <wb-cascader :options="options" :selected="selected" @updateSelected="selected=$event"></wb-cascader>
    <p>2222</p>

    <wb-icon icon="download"></wb-icon>
    <wb-button icon="right"></wb-button>
  </div>
</template>
<script>
export default {
  name:'app',
  data(){
    return {
    loading1:false,
    loading2:false,
    loading3:false,
    message:"你的名字",
    //    tabs
    selectedTab:'user',
    //    cascader
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
  }},
  methods:{
    back(value){
      console.log(value);
    },
    show(){
      this.$message('<strong>这是 <i>HTML</i> 片段</strong>',
          {duration:0,showClose:true,enableHtml:false,position:'bottom',onclose:function(){alert('回调函数想干嘛')}})
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  padding: 200px;
}
</style>