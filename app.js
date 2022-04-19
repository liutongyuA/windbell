import Vue from 'vue'
import wbButton from "./src/wb-button";
import ButtonGroup from './src/buttonGroup'
import wbInput from './src/wb-input'
import wbRow from './src/wb-row'
import wbCol from './src/wb-col'
import wbLayout from './src/wb-layout'
import wbContent from './src/wb-content'
import wbHeader from './src/wb-header'
import wbFooter from './src/wb-footer'
import wbAside from './src/wb-aside'
import plugin from "./src/plugin";
Vue.use(plugin)
Vue.component('wb-button',wbButton)
Vue.component('wb-button-group',ButtonGroup)
Vue.component('wb-input',wbInput)
Vue.component('wb-row',wbRow)
Vue.component('wb-col',wbCol)
Vue.component('wb-layout',wbLayout)
Vue.component('wb-content',wbContent)
Vue.component('wb-header',wbHeader)
Vue.component('wb-footer',wbFooter)
Vue.component('wb-aside',wbAside)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:"你的名字"
    },
    methods:{
        back(value){
            console.log(value);
        },
        show(){
            this.$message('<strong>这是 <i>HTML</i> 片段</strong>',
                {duration:0,showClose:true,enableHtml:false,position:'middle',onclose:function(){alert('回调函数想干嘛')}})
        }
    }
})
