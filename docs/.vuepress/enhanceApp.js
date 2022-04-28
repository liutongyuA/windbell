import wbButton from '../../src/wb-button'
export default  ({ Vue}) => {
        Vue.mixin({
            mounted() {
                    Vue.component(wbButton.name, wbButton);
            }
        })
}