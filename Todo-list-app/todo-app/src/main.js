 import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
// import Vue from 'vue';
// import App from './App.vue';
// import router from './router'; // Import the router

// Vue.config.productionTip = false;

// new Vue({
//   router, // Register the router
//   render: h => h(App),
// }).$mount('#app');
// import Vue from 'vue';
// import App from './App.vue';
// import router from './router'; // Import the router configuration

// Vue.config.productionTip = false;

// new Vue({
//   router, // Use the router instance
//   render: h => h(App)
// }).$mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration

const app = createApp(App);

app.use(router); // Use the router instance
app.mount('#app');