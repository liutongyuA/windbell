<template>
<div>
  <wb-input value="正常输入"></wb-input>
  <wb-input value="禁止输入" disabled></wb-input>
  <wb-input value="输入错误" error="信息输入错误，请检查"></wb-input>
</div>
</template>

<script>
import wbInput from '../../../src/wb-input'
export default {
  name: "input-view",
  components:{
    'wb-input':wbInput
  }
}
</script>
