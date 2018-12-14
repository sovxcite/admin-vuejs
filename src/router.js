import Vue from "vue";
import Router from "vue-router";
import AuthService from "@/services/AuthService.js";

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/users" },
    {
      path: "/signin",
      name: "signin",
      meta: { navbar: false, auth: false },
      component: () => import("@/views/SignInPage.vue")
    },
    {
      path: "/users",
      name: "users",
      meta: { navbar: true, auth: true },
      component: () => import("@/views/UsersPage.vue")
    },
    {
      path: "/add-user",
      name: "add-user",
      meta: { navbar: true, auth: true },
      component: () => import("@/views/AddUserPage.vue")
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      meta: { navbar: true, auth: true },
      component: () => import("@/views/EditUserPage.vue")
    }
  ]
});

const openRoutes = ["signin"];
router.beforeEach((to, from, next) => {
  const autorized = AuthService.isAuthenticated();

  if (openRoutes.includes(to.name) || autorized) {
    next();
  } else {
    next("/signin");
  }
});

export default router;
