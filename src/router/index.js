import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'
import Todo from "../views/Todo.vue";
import About from "../views/About.vue";
import Photos from "../views/Photos.vue";
import Axios from "../views/Axios.vue";
import Login from "../views/Auth/Login.vue";
import Signup from "../views/Auth/Signup.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/axios",
    name: "Axios",
    component: Axios,
  },
  {
    path: '*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = new VueRouter({
  routes
})



router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = auth.currentUser;

  auth.onAuthStateChanged(user => {
    if (requiresAuth && !user) {
      next('/login');
    } else if (user && (to.path === '/signup' || to.path === '/login')) {
      next('/');
    } else {
      next();
    }

    document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  });
})

export default router
