import wbMessage from './wb-message'
export default {
    install (Vue, options) {
        Vue.prototype.$message = function (message){
            let Constructor = Vue.extend(wbMessage)
            let vm = new Constructor()
            vm.$slots.default = [message]
            vm.$mount()
            document.body.appendChild(vm.$el)
        }
    }
}
