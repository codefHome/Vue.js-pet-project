import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('../views/MyHome.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path:'/experience',
      name:'experience',
      component:()=> import('../views/MyExperience.vue')
    },
    {
      path:'/work',
      name:'work',
      component:()=> import('../views/MyWork.vue')
    },
    {
      path:'/contact',
      name:'contact',
      component:()=> import('../views/ContactMe.vue')
    },
    {
      path:'/resume',
      name:'resume',
      component:()=> import('../views/MyResume.vue')
    },

  ]
})

export default router
