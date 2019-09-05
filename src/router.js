import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dash from './views/Dash.vue';
import Calendar from './views/Calendar.vue';
import ShoppingList from './views/ShoppingList.vue';
import Recipes from './views/Recipes.vue';
import Friends from './views/Recipes.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dash,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/shopping-list',
      name: 'ShoppingList',
      component: ShoppingList,
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes,
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends,
    }
  ],
});
