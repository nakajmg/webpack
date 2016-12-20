import Vue from 'vue'
import App from './App'
{{#router}}
Vue.use(VueRouter)
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  routes,
  mode: 'history'
})

{{/router}}

{{#vuex}}
import store from './store'
{{/vuex}}

{{#lint}}
/* eslint-disable no-new */
{{/lint}}
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }{{#router}},
  router{{/router}}{{#vuex}},
  store{{/vuex}}
})
