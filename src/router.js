import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import AddNote from './components/AddNote'
import List from './components/List'
import Note from './components/Note'
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
      path: "/addnote",
      component: AddNote
    },
    {
      path: "/list",
      component: List
    },
    {
      path: "/notes/:id",
      component: Note,
      name: "note"
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})

const getUser = () => {
  return Auth.currentAuthenticatedUser().then((data) => {
    return data;
  }).catch(() => {
    return null;
  });
}

AmplifyEventBus.$on('authState', async(state) => {
  window.console.log(state);
  const result = await getUser();
  window.console.log(result);
  router.push("/");
});

router.beforeEach(async (to, from, next) => {
  const user = await getUser();
  if(!user && (to.path !== '/login')) {
    next('/login');
  } else {
    next();
  }
});

export default router