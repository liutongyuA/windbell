<template>
  <div id="app">
    <wb-dialog
        :visible="visible"
        title="设置标题"
        :showClose="true"
        :modal="true"
        @closeBefore="beforeClose"
    >
      <!--      <template slot="header"> 头部标题 </template>-->
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
        <wb-button @click="confirm">确认</wb-button>
        <wb-button @click="beforeClose(false)">取消</wb-button>
      </template>
    </wb-dialog>
    <wb-input></wb-input>
    <wb-button @click="visible=!visible">点我</wb-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: '',
      bbb:'',
      visible:true
    }
  },
  methods:{
    confirm(){
      console.log(this.aaa,this.bbb);
    },
    //关闭前回调
    beforeClose(e){
      this.aaa=''
      this.bbb=''
      this.visible = e
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 200px;
}
</style>