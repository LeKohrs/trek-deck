import Vue from 'vue'
import App from './App.vue'
import VueClazyLoad from 'vue-clazy-load';
import VueResource from 'vue-resource'
// import VueFire from 'vuefire'
// import VueLazyload from 'vue-lazyload'

// Vue.use(VueFire);
Vue.use(VueResource);
Vue.use(VueClazyLoad);
// Vue.use(VueLazyload);

// Initialize Firebase

new Vue({
  el: '#app',
  render: h => h(App)
})
