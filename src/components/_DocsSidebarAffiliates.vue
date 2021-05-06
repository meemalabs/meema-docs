<template>
  <li class="mt-10">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Getting started
    </h5>
    <ul>
      <li>
        <router-link
          to="/affiliates"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/affiliates' || $route.path === '/affiliates/'
              ? 'text-light-blue-900'
              : 'hover:text-gray-900'
          "
          ><span
            v-if="
              $route.path === '/affiliates' || $route.path === '/affiliates/'
            "
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Introduction</span></router-link
        >
      </li>
      <li>
        <router-link
          to="/affiliates/terms"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/affiliates/terms' || $route.path === '/affiliates/terms/'
              ? 'text-light-blue-900'
              : 'hover:text-gray-900'
          "
          ><span
            v-if="
              $route.path === '/affiliates/terms' || $route.path === '/affiliates/terms/'
            "
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Terms &amp; Conditions</span></router-link
        >
      </li>
    </ul>
  </li>
</template>
