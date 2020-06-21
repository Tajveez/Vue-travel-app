import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/destination/:slug",
    name: "Destination",

    component: () =>
      import(/* webpackChunkName: "Destination" */ "../views/Destination.vue"),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "Experience",
        component: () =>
          import(
            /* webpackChunkName: "Experience" */ "../views/Experience.vue"
          ),
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
