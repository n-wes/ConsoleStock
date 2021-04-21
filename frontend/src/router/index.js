import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Listing from "../components/Listing.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/listing",
    name: "Listing",
    component: Listing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;