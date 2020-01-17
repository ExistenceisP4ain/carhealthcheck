import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import prijavakvara from '../components/prijavakvara'
import promjenalozinke from '@/components/promjenalozinke.vue'
import useradd from '@/components/useradd.vue'
import stanje from '@/components/stanje.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/admin.vue')
  },
  {
    path: '/rijeseno',
    name: 'rijeseno',
    component: () => import( '../views/rijeseno.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import('../views/prijava.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import('../views/registracija.vue')
  },
  {
    path: '/prijavakvara',
    name: 'prijavakvara',
    component: prijavakvara
  },
  {
    path: '/promjenalozinke',
    name: 'promjenalozinke',
    component: promjenalozinke
  },
  {
    path: '/useradd',
    name: 'useradd',
    component: useradd
  },
  {
    path: '/stanje',
    name: 'stanje',
    component: stanje
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import('../components/pocetna.vue')
  },
  {
    path: '/recenzije',
    name: 'recenzije',
    component: () => import('../components/recenzije.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
