import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/HomePage.vue';
import Dash from './pages/DashPage.vue';
import Calendar from './pages/CalendarPage.vue';
import ShoppingList from './pages/ShoppingListPage.vue';
import Recipes from './pages/RecipeDashPage.vue';
import Friends from './pages/FriendsPage.vue';
import Recipe from './pages/RecipePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
    },
    {
      path: '/dash',
      name: 'DashboardPage',
      component: Dash,
    },
    {
      path: '/about',
      name: 'AboutPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/AboutPage.vue'),
    },
    {
      path: '/calendar',
      name: 'CalendarPage',
      component: Calendar,
    },
    {
      path: '/shopping-list',
      name: 'ShoppingListPage',
      component: ShoppingList,
    },
    {
      path: '/recipe-dash',
      name: 'RecipeDashPage',
      component: Recipes,
    },
    {
      path: '/friends',
      name: 'FriendsPage',
      component: Friends,
    },
    {
      path: '/recipe',
      name: 'RecipePage',
      component: Recipe,
    },
  ],
});
