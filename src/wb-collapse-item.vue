<template>
<div class="collapse-item">
  <div class="title" @click="isOpen = !isOpen">
    <wb-icon icon="right" v-show="!isOpen"></wb-icon>
    <wb-icon icon="down" v-show="isOpen"></wb-icon>
    {{title}}
  </div>
  <div class="content" v-if="isOpen">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "wb-collapse-item",
  props:{
    title:{
      type:String,
      require:true
    }
  },
data(){
    return{
      isOpen:false
    }
}
}
</script>

<style scoped lang="scss">
.collapse-item{
  font-size: 14px;
  >.title{
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    margin:-1px;
    margin-bottom: 0;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0.5em;
    cursor: pointer;
    .svg{fill:#ddd;margin-right: 1em}
}
  >.content{
    padding: 1em 0.5em;
  }
  >.title:first-child{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>