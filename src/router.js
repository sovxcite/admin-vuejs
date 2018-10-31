import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/UsersPage.vue")
    },
    {
      path: "/add-user",
      name: "add-user",
      component: () => import("@/views/AddUserPage.vue")
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      component: () => import("@/views/EditUserPage.vue")
    }
  ]
});
