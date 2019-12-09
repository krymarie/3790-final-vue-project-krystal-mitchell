import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'
// import { routes } from './routes'

// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
