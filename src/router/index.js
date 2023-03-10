import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue';
import View404 from '../views/View404.vue';
import ProjectsView from '../views/projets/ListeView.vue';
import FestivalView from '../views/projets/FestivalView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/admin', name: 'AdminView', component: AdminView },
    { path: '/projects', name: 'ProjectsView', component: ProjectsView },

    { path: '/festival', name: 'FestivalView', component: FestivalView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },



  ]
})


export default router