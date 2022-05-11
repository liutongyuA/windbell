<template>
    <transition name="animation">
<!--      遮罩层-->
      <div class="dialogModal" :class="{ isModal: modal }" v-show="visible">
        <!--       @click="clickMaskCloseFn"-->
        <div class="dialogWrapper" >
          <div class="dialogHeader">
            <!-- 笔记：这样写可以做到若有传递过来的title就用传递过来的title 若有传递过来的插槽，就以插槽的为准 -->
            <slot name="header">
              <span>{{ title }}</span>
            </slot>
<!--             @click="close"-->
            <i class="el-icon-close" v-show="showClose"> </i>
          </div>

          <div class="dialogMain">
            <slot></slot>
          </div>

          <div class="dialogFooter">
            <slot name="footer"></slot>
          </div>
      </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: "wb-dialog",
  props: {
    // 控制是否展示或隐藏对话框
    visible: {
      type: Boolean,
      default: false,
    },
    // 父组件传过来的标题值
    title: {
      type: String,
      default: "",
    },
    // 是否显示关闭小图标
    showClose: {
      type: Boolean,
      default: true,
    },
    // 是否开启背景遮罩层
    modal: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
  .dialogModal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items:center;*/
}
  .dialogWrapper{
    width: 30%;
    border: 2px solid #e9e9e9;
    border-radius: 2px;
    background-color: #fff;
    margin: 50px auto;
  }
  .dialogHeader{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dialogHeader >span{
    font-size: 24px;
  }
  .dialogHeader >i{
    font-size: 24px;
    cursor: pointer;
  }
  .dialogMain{
    width: 100%;
    height: 150px;
  }
  .dialogFooter{
    border: 1px solid red;
  }
  .isModal {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>