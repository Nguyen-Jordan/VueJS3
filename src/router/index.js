import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useUserStore} from "@/stores/user.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'ViteJs Blog',
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: 'Inscription',
        requiresGuest: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Connexion',
        requiresGuest: true,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: 'Bienvenue à votre Dashboard',
        requiresAuth: true,
      }
    },
    {
      path: '/post/:slug',
      name: 'post.show',
      component: () => import('../views/PostView.vue'),
      meta: {
        title: 'Post',
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Page non trouvée'
      }
    }
  ]
})

// titre de la page plus titre du post s'il existe
router.beforeEach((to, from, next) => {
  let documentTitle = to.meta.title;
  if (to.params.title) {
    documentTitle += ' - ' + to.params.title;
  }

  document.title = documentTitle

  next()
})

router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if (to.meta.requiresGuest && user.loggedIn){
    next({name: 'dashboard'})
  }
  else {
    next()
  }
})

// empêcher d'accéder au dashboard si on n'est pas connecté
router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if (to.meta.requiresAuth && !user.loggedIn) {
    next({name: 'login'})
  }
  else {
    next()
  }
})

export default router
