import Vue from 'vue'
import wbButton from "./src/wb-button";
import ButtonGroup from './src/buttonGroup'
import wbInput from './src/wb-input'
Vue.component('wb-button',wbButton)
Vue.component('wb-button-group',ButtonGroup)
Vue.component('wb-input',wbInput)
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
        }
    }
})
