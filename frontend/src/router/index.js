import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Example component
import About from '../components/AutobotCount.vue'; // Example component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
