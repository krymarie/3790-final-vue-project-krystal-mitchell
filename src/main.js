import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'
// import { routes } from './routes'

// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes
// })

new Vue({
  el: '#app',
  vuetify,
  // router,

  render: h => h(App)
}).$mount('#app')
