<template>
  <div>
    <wb-button :loading="false">默认按钮</wb-button>
    <wb-button  icon-position="right" :loading="true">默认按钮</wb-button>
    <wb-button icon="download">默认按钮</wb-button>
    <wb-button disabled>默认按钮</wb-button>
    <pre><code>{{conent}}</code></pre>
  </div>
</template>

<script>
import wbButton from '../../../src/wb-button'

export default {
  name: 'button-view',
  components: {
    'wb-button': wbButton
  },
  data(){
    return{
      conent:`
    <wb-button :loading="false">默认按钮</wb-button>
    <wb-button  icon-position="right" :loading="true">默认按钮</wb-button>
    <wb-button icon="download">默认按钮</wb-button>
    <wb-button disabled>默认按钮</wb-button>`.replace(/\t+| +/g,'').trim()
    }
  }
}
</script>