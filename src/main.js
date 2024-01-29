import Vue from 'vue'
import App from './App.vue'
import router from './router/Index.js'
import './assets/main.css'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
