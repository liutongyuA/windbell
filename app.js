import Vue from 'vue'
import wbIcon from './src/wb-icon'
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
import wbTabs from './src/wb-tabs'
import wbTabsNav from './src/wb-tabs-nav'
import wbTabsItem from './src/wb-tabs-item'
import wbTabsContent from './src/wb-tabs-content'
import wbTabsPane from './src/wb-tabs-pane'
import wbPopover from './src/wb-popover'
import wbCollapse from './src/wb-collapse'
import wbCollapseItem from './src/wb-collapse-item'
Vue.component('wb-icon',wbIcon)
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
Vue.component('wb-tabs',wbTabs)
Vue.component('wb-tabs-nav',wbTabsNav)
Vue.component('wb-tabs-item',wbTabsItem)
Vue.component('wb-tabs-content',wbTabsContent)
Vue.component('wb-tabs-pane',wbTabsPane)
Vue.component('wb-popover',wbPopover)
Vue.component('wb-collapse',wbCollapse)
Vue.component('wb-collapse-item',wbCollapseItem)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:"你的名字",
    //    tabs
        selectedTab:'user'
    },
    methods:{
        back(value){
            console.log(value);
        },
        show(){
            this.$message('<strong>这是 <i>HTML</i> 片段</strong>',
                {duration:0,showClose:true,enableHtml:false,position:'bottom',onclose:function(){alert('回调函数想干嘛')}})
        }
    }
})
