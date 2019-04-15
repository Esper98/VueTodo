import VueRouter from 'vue-router';

import About from './pages/About.vue';


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;