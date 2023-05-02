import { triggerRef } from "vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/shop",
        component: () => import("pages/ShopPage.vue"),
      },
      {
        path: "/genres",
        component: () => import("pages/GenresPage.vue"),
      },
      {
        path: "/genres/:id",
        props: true,
        component: () => import("pages/GenrePage.vue"),
      },
      {
        path: "/products/:id",
        props: true,
        component: () => import("pages/ProductPage.vue"),
      },
      {
        path: "/cart",
        component: () => import("pages/CartPage.vue"),
      },
      {
        path: "/vendors",
        component: () => import("pages/VendorsPage.vue"),
      },
      {
        path: "/vendors/:id",
        component: () => import("pages/VendorPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
