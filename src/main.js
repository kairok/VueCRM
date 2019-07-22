import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


firebase.initializeApp({
    apiKey: "AIzaSyCP5JivQe0CETbfiqo7F0J58uHhk6EAtlk",
    authDomain: "vue-crm-e5665.firebaseapp.com",
    databaseURL: "https://vue-crm-e5665.firebaseio.com",
    projectId: "vue-crm-e5665",
    storageBucket: "",
    messagingSenderId: "842808264550",
    appId: "1:842808264550:web:61e93b0c825446a6"
  });

  let app 

  firebase.auth().onAuthStateChanged(() => {
if (!app) {
  app =new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
  }
   
})

