import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './pages/HomePage.vue';
import DashPage from './pages/DashPage.vue';
import CalendarPage from './pages/CalendarPage.vue';
import ShoppingListPage from './pages/ShoppingListPage.vue';
import RecipeDashPage from './pages/RecipeDashPage.vue';
import FriendsPage from './pages/FriendsPage.vue';
import RecipePage from './pages/RecipePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/dash',
      name: 'DashboardPage',
      component: DashPage,
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
      component: CalendarPage,
    },
    {
      path: '/shopping-list',
      name: 'ShoppingListPage',
      component: ShoppingListPage,
    },
    {
      path: '/recipe-dash',
      name: 'RecipeDashPage',
      component: RecipeDashPage,
    },
    {
      path: '/friends',
      name: 'FriendsPage',
      component: FriendsPage,
    },
    {
      path: '/recipe/:id',
      name: 'RecipePage',
      component: RecipePage,
      props: true,
    },
  ],
});
