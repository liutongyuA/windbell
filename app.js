import Vue from 'vue'
import wbButton from "./src/wb-button";
import ButtonGroup from './src/buttonGroup'
import wbInput from './src/wb-input'
import wbRow from './src/wb-row'
import wbCol from './src/wb-col'
Vue.component('wb-button',wbButton)
Vue.component('wb-button-group',ButtonGroup)
Vue.component('wb-input',wbInput)
Vue.component('wb-row',wbRow)
Vue.component('wb-col',wbCol)
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
