import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'muse-ui/dist/muse-ui.css';
import 'common/stylus/index.styl'

Vue.use(MuseUI);
fastclick.attach(document.body)

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
