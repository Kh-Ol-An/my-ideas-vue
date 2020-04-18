import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue")
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("@/views/CV.vue")
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
