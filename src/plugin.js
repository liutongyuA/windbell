import wbMessage from './wb-message'
let currentToast
export default {
    install (Vue) {
        Vue.prototype.$message = function (message,propsData){
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData})
        }
    }
}
function createToast ({Vue, message, propsData}){
    let Constructor = Vue.extend(wbMessage)
    let vm = new Constructor({
            propsData
        }
    )
    vm.$slots.default = [message]
    vm.$mount()
    document.body.appendChild(vm.$el)
    return vm
}