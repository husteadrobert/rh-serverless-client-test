import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})

export default router