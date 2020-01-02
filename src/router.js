import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify'



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})

const getUser = () => {
  return Auth.currentAuthenticatedUser().then((data) => {
    window.console.log("getUser Function");
    window.console.log(data);
    return data;
  }).catch(() => {
    window.console.log("No user");
    return null;
  });
}


AmplifyEventBus.$on('authState', async(state) => {
  window.console.log(state);
  const result = await getUser();
  window.console.log(result);
  router.push("/");
});

router.beforeResolve(async (to, from, next) => {
  const user = await getUser();
  window.console.log("Before Resolve");
  window.console.log(user);
  next();
});

export default router