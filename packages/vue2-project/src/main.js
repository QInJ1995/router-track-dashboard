import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {createRouterTrack} from 'router-track-vue2'
console.log("🚀 ~ createRouterTrack:", createRouterTrack)

Vue.use(createRouterTrack({router}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
