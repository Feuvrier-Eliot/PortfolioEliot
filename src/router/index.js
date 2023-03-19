import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import LegalNoticeView from '../views/LegalNoticesView.vue'
import FestivalView from '../views/projects/FestivalView.vue';
import NasaView from '../views/projects/NasaView.vue';
import DahutView from '../views/projects/DahutView.vue';
import TiktakView from '../views/projects/TiktakView.vue';
import OsakaView from '../views/projects/OsakaView.vue';
import CassandreView from '../views/projects/CassandreView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/about', name: 'AboutView', component: AboutView },
    { path: '/legals', name: 'LegalNoticeView', component: LegalNoticeView },

    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/nasa', name: 'NasaView', component: NasaView },
    { path: '/dahut', name: 'DahutView', component: DahutView },
    { path: '/tiktak', name: 'TiktakView', component: TiktakView },
    { path: '/osaka', name: 'OsakaView', component: OsakaView },
    { path: '/cassandre', name: 'CassandreView', component: CassandreView },





  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  next();
});
export default router
