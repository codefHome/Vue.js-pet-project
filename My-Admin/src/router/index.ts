import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  ()=> import ('../views/LoginView.vue')
    },{
      path:'/dashboard',
      name:'dashboard',
      component: ()=> import ('../views/DashboardView.vue'),
      // meta:{requiresAuth:true}
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const isAuthenticated=localStorage.getItem('accessToken')
  if(to.matched.some(record =>record.meta.requiresAuth) && !isAuthenticated){
    next('/')
  }else{
    next()
  }
})
export default router
