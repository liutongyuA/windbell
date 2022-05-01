import wbButton from '../../src/wb-button'
import wbButtonGroup from '../../src/buttonGroup'
import wbInput from '../../src/wb-input'
export default  ({ Vue}) => {
        Vue.mixin({
            mounted() {
                Vue.component(wbButton.name, wbButton);
                Vue.component(wbButtonGroup.name, wbButtonGroup);
                Vue.component(wbInput.name, wbInput);
            }
        })
}