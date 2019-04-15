import VueRouter from 'vue-router';

import App from './App.vue'
import About from './pages/About.vue';


const routes = [
  { path: '/', component: App },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;