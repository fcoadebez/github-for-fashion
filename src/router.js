import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import GarmentDetail from './components/pages/GarmentDetail.vue';
import Login from './components/pages/Login.vue';
import Create from './components/pages/Create.vue';
import Profil from './components/pages/Profil.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/garment/:user/:repo',
      component: GarmentDetail,
      name: 'Garment Detail',
      props: true,
    },
    {
      path: '/create',
      component: Create,
      name: 'create',
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },
    {
      path: '/:user',
      component: Profil,
      name: 'Profil',
    },
    {
      /* This one must stay in last place as it handles all unknown routes */
      /* TO DO : Page not found template */
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;
