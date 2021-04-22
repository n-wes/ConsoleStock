import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Listing from "../components/Listing.vue"
import Xbox from "../components/Xbox.vue"
import PlayStation from "../components/PlayStation.vue"
import Nintendo from "../components/Nintendo.vue"

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
  },
  {
    path: "/xbox",
    name: "Xbox",
    component: Xbox
  },
  {
    path: "/playstation",
    name: "PlayStation",
    component: PlayStation
  },
  {
    path: "/nintendo",
    name: "Nintendo",
    component: Nintendo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;