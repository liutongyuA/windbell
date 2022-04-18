<template>
  <div class="message">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wb-message"
}
</script>

<style scoped lang="scss">
.message{
  font-size: 14px;
  height: 40px;
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
}
</style>