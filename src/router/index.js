import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { storeToRefs, createPinia } from "pinia";
import { useAuthStore } from "../stores/auth";
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  Router.beforeEach(function (to, _, next) {
    const authStore = useAuthStore();
    const { isAuth } = storeToRefs(authStore);
    if (localStorage.getItem("token")) {
      isAuth.value = true;
    } else {
      isAuth.value = false;
    }

    if (to.meta.requiresAuth && !isAuth.value) {
      next("/auth");
    } else if (to.meta.requiresUnauth && isAuth.value) {
      next("/");
    } else {
      next();
    }
  });

  return Router;
});
