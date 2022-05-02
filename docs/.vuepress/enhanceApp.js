import wbButton from '../../src/wb-button'
import wbButtonGroup from '../../src/buttonGroup'
import wbInput from '../../src/wb-input'
import wbRow from '../../src/wb-row'
import wbCol from '../../src/wb-col'
import wbLayout from '../../src/wb-layout'
import wbContent from '../../src/wb-content'
import wbHeader from '../../src/wb-header'
import wbFooter from '../../src/wb-footer'
import wbAside from '../../src/wb-aside'
import plugin from '../../src/plugin'
import wbTabs from '../../src/wb-tabs'
import wbTabsNav from '../../src/wb-tabs-nav'
import wbTabsItem from '../../src/wb-tabs-item'
import wbTabsContent from '../../src/wb-tabs-content'
import wbTabsPane from '../../src/wb-tabs-pane'
import wbPopover from '../../src/wb-popover'
export default  ({ Vue}) => {
        Vue.mixin({
            mounted() {
                Vue.component(wbButton.name, wbButton);
                Vue.component(wbButtonGroup.name, wbButtonGroup);
                Vue.component(wbInput.name, wbInput);
                Vue.component(wbRow.name, wbRow);
                Vue.component(wbCol.name, wbCol);
                Vue.component(wbLayout.name, wbLayout);
                Vue.component(wbContent.name, wbContent);
                Vue.component(wbHeader.name, wbHeader);
                Vue.component(wbFooter.name, wbFooter);
                Vue.component(wbAside.name, wbAside);
                Vue.use(plugin);
                Vue.component(wbTabs.name, wbTabs);
                Vue.component(wbTabsNav.name, wbTabsNav);
                Vue.component(wbTabsItem.name, wbTabsItem);
                Vue.component(wbTabsContent.name, wbTabsContent);
                Vue.component(wbTabsPane.name, wbTabsPane);
                Vue.component(wbPopover.name, wbPopover);
            }
        })
}