import wbButton from '../../src/wb-button'
import wbButtonGroup from '../../src/buttonGroup'
export default  ({ Vue}) => {
        Vue.mixin({
            mounted() {
                Vue.component(wbButton.name, wbButton);
                Vue.component(wbButtonGroup.name, wbButtonGroup);
            }
        })
}