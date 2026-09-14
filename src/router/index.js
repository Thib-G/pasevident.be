import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SentenceView from '../views/SentenceView.vue';

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
    component: SentenceView,
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
