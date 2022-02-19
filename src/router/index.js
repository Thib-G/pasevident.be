import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';

Vue.use(VueRouter);

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
    component: () => import(/* webpackChunkName: "sentence" */ '../views/SentenceView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
