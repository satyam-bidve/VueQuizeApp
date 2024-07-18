import { createRouter,createWebHistory } from "vue-router";
import Quiezes from '../views/QuizeView.vue'
import QuizMain from '../views/QuizMainView.vue'

const router = createRouter({
   history:createWebHistory(import.meta.env.BASE_URL),
   routes:[
      {
         path:"/",
         name:"Quieze",
         component:Quiezes
      },
      {
         path:"/quiez/:id",
         name:"QuizMain",
         component:QuizMain
      }
   ]
})

export default router