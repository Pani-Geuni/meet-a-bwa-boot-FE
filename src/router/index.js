import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '@/views/MainLayout.vue';
import MainView from '@/components/main/MainView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'MainView',
        component: MainView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
