<template>
  <div class="message" ref="message" :class="`pos-${position}`">
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
    },
    //展示位置
    position:{
      type:String,
      default:'top',
      validator(value){
          return ['top','middle','bottom'].indexOf(value) >=0
      }
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
        if(this.$refs.line)
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
@keyframes fade-down {
  from{top:-200px}
  to{top: 0}
}
@keyframes fade {
  from{opacity: 0}
  to{opacity: 1}
}
@keyframes fade-up {
  from{bottom:-200px}
  to{bottom: 0}
}
$duration:0.3s;
.message{
  font-size: 14px;
  min-height: 40px;
  background-color: #EEF3FC;
  color: #909399;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1.8;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding:0 16px;
  box-shadow: 0 0 3px 0 #EEF3FC;
  .line{
    border-left: 1px solid #999;
    margin-left: 16px;
  }
  .close{
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
  &.pos-top{
    z-index: 999;
    top: 0;
    animation: fade-down $duration;
  }
  &.pos-middle{
    top: 50%;
    transform:translateX(-50%) translateY(-50%);
    animation: fade $duration;
  }
  &.pos-bottom{
    bottom: 0;
    animation: fade-up $duration;
  }
}
</style>