<template>
  <div class="message" ref="message">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <template v-if="showClose">
      <div class="line" ref="line"></div>
      <div class="close" @click="clickClose">关闭</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "wb-message",
  props:{
    //时间 毫秒 默认不关闭
    duration:{
      type:Number,
      default:0
    },
    //是否展示关闭
    showClose:{
      type:Boolean,
      default: false
    },
    //关闭回调函数
    onclose:{
      type:Function
     },
    //使用html文字
    enableHtml:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    close(){
      this.$el.remove()
      this.$destroy()
    },
    clickClose(){
      this.close();
      if( typeof this.onclose === "function"){
        this.onclose()
      }
    },
    autoClose(){
      if(this.duration !== 0){
        setTimeout(()=>{
          this.close()
        },this.duration)
      }
    },
    updateStyle(){
      this.$nextTick(()=>{
        this.$refs.line.style.height=this.$refs.message.getBoundingClientRect().height+'px'
      })
    }
  },
  mounted() {
    this.autoClose()
    this.updateStyle()
  }
}
</script>

<style scoped lang="scss">
.message{
  font-size: 14px;
  min-height: 40px;
  background-color: rgba(0,0,0,0.75);
  color: white;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  line-height: 1.8;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding:0 16px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
  .line{
    border-left: 1px solid #666;
  }
  .close{
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>