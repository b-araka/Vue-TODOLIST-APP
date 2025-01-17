import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Task from '../components/Task.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
