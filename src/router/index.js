import { createRouter, createWebHistory } from 'vue-router'
import homePage from './../components/homepage.vue'
import Restaurantlist from './../components/Restaurantlist.vue'
import menu from './../components/menu.vue'
//import App from './../components/App.vue'
import feedback from './../components/feedback.vue'
import order from './../components/order.vue'
import booking from './../components/booking.vue'
import contact from './../components/contact.vue'
import about from './../components/about.vue'
const routes = [
  {
    path:'/',
    component: homePage
  },
  {
    path:'/Restaurantlist',
    component: Restaurantlist
  },
  {
    path:'/menu',
    component: menu
  },
  
  {
    path:'/feedback',
    component: feedback
  },
  {
    path:'/order',
    component: order
  },
  {
    path:'/booking',
    component: booking
  },
  {
    path:'/contact',
    component: contact
  },
  {
    path:'/about',
    component: about
  }
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
