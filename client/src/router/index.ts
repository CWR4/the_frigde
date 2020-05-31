import Vue from 'vue';
import VueRouter from 'vue-router';
import EnterFridgeName from '../views/EnterFridgeName.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: EnterFridgeName,
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: EnterFridgeName,
  },
  {
    path: '/shoppinglist',
    name: 'shopping-list',
    component: EnterFridgeName,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
