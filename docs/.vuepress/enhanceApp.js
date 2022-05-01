import wbButton from '../../src/wb-button'
import wbButtonGroup from '../../src/buttonGroup'
import wbInput from '../../src/wb-input'
import wbRow from '../../src/wb-row'
import wbCol from '../../src/wb-col'
export default  ({ Vue}) => {
        Vue.mixin({
            mounted() {
                Vue.component(wbButton.name, wbButton);
                Vue.component(wbButtonGroup.name, wbButtonGroup);
                Vue.component(wbInput.name, wbInput);
                Vue.component(wbRow.name, wbRow);
                Vue.component(wbCol.name, wbCol);
            }
        })
}