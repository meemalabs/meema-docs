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
      import(
        /* webpackChunkName: "affiliates" */ "../pages/Affiliates/Introduction.vue"
      ),
  },
  {
    path: "/affiliates",
    component: () =>
      import(
        /* webpackChunkName: "affiliates" */ "../pages/Affiliates/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "affiliates-intro" */ "../pages/Affiliates/Introduction.vue"
          ),
      },
      {
        path: "terms-conditions",
        component: () =>
          import(
            /* webpackChunkName: "terms-conditions" */ "../pages/Affiliates/Terms.vue"
          ),
      },
    ],
  },
  {
    path: "/cloud",
    component: () =>
      import(/* webpackChunkName: "cloud" */ "../pages/Cloud/index.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "cloud-intro" */ "../pages/Cloud/Introduction.vue"
          ),
      },
    ],
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
    component: () =>
      import(/* webpackChunkName: "otf" */ "../pages/OnTheFly/index.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "otf-intro" */ "../pages/OnTheFly/Introduction.vue"
          ),
      },
      {
        path: "image-ops",
        component: () =>
          import(
            /* webpackChunkName: "image-ops" */ "../pages/OnTheFly/ImageOps.vue"
          ),
      },
      {
        path: "video-ops",
        component: () =>
          import(
            /* webpackChunkName: "video-ops" */ "../pages/OnTheFly/VideoOps.vue"
          ),
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
    path: "/open-source/laravel-media-converter",
    component: () =>
      import(
        /* webpackChunkName: "laravel-media-converter" */ "../pages/MediaConverter/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "media-converter-guide" */ "../pages/MediaConverter/Guide.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source/laravel-media-recognition",
    component: () =>
      import(
        /* webpackChunkName: "media-recognition" */ "../pages/MediaRecognition/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "media-recognition-guide" */ "../pages/MediaRecognition/Guide.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source/laravel-text-to-speech",
    component: () =>
      import(
        /* webpackChunkName: "laravel-text-to-speech" */ "../pages/TextToSpeech/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "laravel-text-to-speech-guide" */ "../pages/TextToSpeech/Guide.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source/meema-client-php",
    component: () =>
      import(
        /* webpackChunkName: "meema-client-php" */ "../pages/MeemaClient/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "meema-client-php-guide" */ "../pages/MeemaClient/Guide.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source/laravel-meema",
    component: () =>
      import(
        /* webpackChunkName: "laravel-meema" */ "../pages/LaravelMeema/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "laravel-meema-guide" */ "../pages/LaravelMeema/Guide.vue"
          ),
      },
    ],
  },
  {
    path: "/open-source/flysystem-adapter",
    component: () =>
      import(
        /* webpackChunkName: "flysystem-meema" */ "../pages/Flysystem/index.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "flysystem-meema-guide" */ "../pages/Flysystem/Guide.vue"
          ),
      },
    ],
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
