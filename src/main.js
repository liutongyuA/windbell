import Vue from 'vue'
import App from './app.vue'
import wbIcon from './wb-icon'
import wbButton from "./wb-button";
import ButtonGroup from './buttonGroup'
import wbInput from './wb-input'
import wbRow from './wb-row'
import wbCol from './wb-col'
import wbLayout from './wb-layout'
import wbContent from './wb-content'
import wbHeader from './wb-header'
import wbFooter from './wb-footer'
import wbAside from './wb-aside'
import plugin from "./plugin";
Vue.use(plugin)
import wbTabs from './wb-tabs'
import wbTabsNav from './wb-tabs-nav'
import wbTabsItem from './wb-tabs-item'
import wbTabsContent from './wb-tabs-content'
import wbTabsPane from './wb-tabs-pane'
import wbPopover from './wb-popover'
import wbCollapse from './wb-collapse'
import wbCollapseItem from './wb-collapse-item'
import wbCascader from './wb-cascader'
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
Vue.component('wb-cascader',wbCascader)
Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')
