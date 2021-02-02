// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Richtext from '~/components/shared/Richtext.vue'
import BnButton from '~/components/shared/BnButton.vue'
import BlogItem from '~/components/shared/BlogItem.vue'
import BnH1 from '~/components/shared/BnH1.vue'
import BnH2 from '~/components/shared/BnH2.vue'
import BnH3 from '~/components/shared/BnH3.vue'
import BnP from '~/components/shared/BnP.vue'
import BnContent from '~/components/shared/BnContent.vue'
import OffsetSection from '~/components/shared/OffsetSection.vue'
import VScrollLock from 'v-scroll-lock'
import { WindowWidthMixin } from '~/mixins'
import moment from 'moment'


require('typeface-open-sans');
require('typeface-playfair-display');
export default function (Vue, { router, head, isClient }) {

  Vue.use(VScrollLock)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Richtext', Richtext)
  Vue.component('BnButton', BnButton)
  Vue.component('BlogItem', BlogItem)
  Vue.component('BnH1', BnH1)
  Vue.component('BnH2', BnH2)
  Vue.component('BnH3', BnH3)
  Vue.component('BnP', BnP)
  Vue.component('BnContent', BnContent)
  Vue.component('OffsetSection', OffsetSection)

  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MMM do, YYYY')
    }
  })
  Vue.mixin(WindowWidthMixin);
  
}
