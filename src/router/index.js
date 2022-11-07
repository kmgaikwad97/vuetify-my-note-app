import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "../views/Todo.vue";
import About from "../views/About.vue";
import Photos from "../views/Photos.vue";
import Axios from "../views/Axios.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
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

export default router
