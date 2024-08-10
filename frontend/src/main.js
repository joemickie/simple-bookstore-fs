// import { createApp } from 'vue';
// import App from './App.vue';
// import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:5000/api';

// const app = createApp(App);

// // You can also set axios as a global property if you need it throughout your app
// app.config.globalProperties.$axios = axios;

// app.mount('#app');


import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router'; // Import the router

// Set up axios default base URL using Vite environment variables
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

const app = createApp(App);

// Provide axios to all components
app.config.globalProperties.$axios = axios;

// Use the router
app.use(router);

app.mount('#app');

