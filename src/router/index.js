import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'Pas évident.be - Accueil',
    },
  },
  {
    path: '/:id',
    name: 'SentenceView',
    meta: {
      title: 'Pas évident.be',
    },
    component: () => import(/* webpackChunkName: "sentence-view" */ '../views/SentenceView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
