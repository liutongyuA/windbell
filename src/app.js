import Vue from 'vue'
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from './buttonGroup'
Vue.component('wb-button',Button)
Vue.component('wb-icon',Icon)
Vue.component('wb-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})
