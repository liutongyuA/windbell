<template>
    <transition name="animation">
<!--      遮罩层-->
      <div class="dialogModal" :class="{ isModal: modal }" v-show="visible" @click="closeModal">
        <div class="dialogWrapper" @click.stop :style="{width:dialogWidth}">
          <div class="dialogHeader">
            <!-- 笔记：这样写可以做到若有传递过来的title就用传递过来的title 若有传递过来的插槽，就以插槽的为准 -->
            <slot name="header">
              <span>{{ title }}</span>
            </slot>
<!--            <i class="el-icon-close" v-show="showClose" @click="close"> </i>-->
            <svg class="svg" v-show="showClose" @click="close">
              <use xlink:href="#i-chacha"></use>
            </svg>
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
// import './svg2'
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
    // 指定宽度
    dialogWidth:{
      type:String,
    }
  },
  mounted() {
    import('./svg2').then(module => {})
  },
  methods:{
    //点x关闭,false参数传给父亲，父亲将作为是否显示visible属性传过来
    close(){
      this.$emit('closeBefore',false)
    },
    //点遮罩层关闭,注意要给子元素阻止冒泡
    closeModal(){
        this.$emit('closeBefore',false)
    }
  }
}
</script>

<style lang="scss">
  .dialogModal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 999;
    >.dialogWrapper{
      width: 30%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);;
      border-radius: 2px;
      background-color: #fff;
      margin: 50px auto;
      >.dialogHeader{
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e9e9e9;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >span{
          font-size: 18px;
        }
        >.svg{
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: gray;
          overflow: hidden;
          cursor: pointer;
        }
        >.svg:hover {
          fill:black;
          font-weight:bold;
        }
      }
      >.dialogMain{
        width: 100%;
        //height: 150px;
        padding: 20px 40px;
        //overflow-y: auto;
        font-size: 14px;
      }
      >.dialogFooter{
        padding: 12px 16px;
        border-top: 1px solid #e9e9e9;
        display: flex;
        justify-content: flex-end;
        >.wb-button:nth-child(1){
          margin-right: 10px;
        }
        & >.wb-button:nth-child(2){
          margin-left: 10px;
        }
      }
    }
    //中大
    @media (max-width:1201px) {
      >.dialogWrapper{
        width: 35%;
      }
    }
    //小
    @media (max-width:993px) {
      >.dialogWrapper{
        width: 40%;
      }
    }
    //超小
    @media (max-width:860px) {
      >.dialogWrapper{
        width: 50%;
      }
    }
    @media (max-width:500px) {
      >.dialogWrapper{
        width: 85%;
      }
    }
}
  .isModal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .animation-enter,
  .animation-leave-to {
    opacity: 0;
  }
  .animation-enter-active,
  .animation-leave-active {
    transition: opacity 0.3s;
  }
</style>