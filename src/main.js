import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Custom from 'base/install'
import { showToast, hideToast } from 'base/toast'

import 'muse-ui/dist/muse-ui.css';
import 'common/stylus/index.styl'

Vue.use(MuseUI);
Vue.use(Custom)
fastclick.attach(document.body)

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
})

Vue.prototype.$showToast = showToast
Vue.prototype.$hideToast = hideToast

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
