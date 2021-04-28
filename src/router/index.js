import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/Index.vue"),
  },
  {
    path: "/affiliates",
    component: () =>
      import(/* webpackChunkName: "affiliates" */ "../pages/Affiliates.vue"),
  },
  {
    path: "/cloud",
    component: () =>
      import(/* webpackChunkName: "cloud" */ "../pages/Cloud.vue"),
  },
  {
    path: "/images",
    component: () =>
      import(/* webpackChunkName: "images" */ "../pages/Images.vue"),
  },
  {
    path: "/media-manager",
    component: () =>
      import(
        /* webpackChunkName: "media-manager" */ "../pages/MediaManager.vue"
      ),
  },
  {
    path: "/on-the-fly",
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "otf" */ "../pages/OnTheFly/index.vue"),
      },
      {
        path: "api",
        component: () =>
          import(/* webpackChunkName: "api" */ "../pages/OnTheFly/Api.vue"),
      },
      {
        path: "imgix",
        component: () =>
          import(/* webpackChunkName: "imgix" */ "../pages/OnTheFly/Imgix.vue"),
      },
      {
        path: "sharp",
        component: () =>
          import(/* webpackChunkName: "sharp" */ "../pages/OnTheFly/Sharp.vue"),
      },
      {
        path: "tailwind-css",
        component: () =>
          import(
            /* webpackChunkName: "tailwind-css" */ "../pages/OnTheFly/TailwindCss.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source",
    component: () =>
      import(/* webpackChunkName: "open-source" */ "../pages/OpenSource.vue"),
  },
  {
    path: "/privacy",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../pages/Privacy.vue"),
  },
  {
    path: "/video",
    component: () =>
      import(/* webpackChunkName: "video" */ "../pages/Video.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
