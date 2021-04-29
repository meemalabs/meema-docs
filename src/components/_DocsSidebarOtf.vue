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
          to="/on-the-fly"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/on-the-fly' || $route.path === '/on-the-fly/'
              ? 'text-light-blue-900'
              : 'hover:text-gray-900'
          "
          ><span
            v-if="
              $route.path === '/on-the-fly' || $route.path === '/on-the-fly/'
            "
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Introduction</span></router-link
        >
      </li>
      <li>
        <a
          class="relative block px-3 py-2 text-gray-500 transition-colors duration-200 hover:text-gray-900"
          href="#"
          ><span class="absolute inset-0 rounded-md opacity-0 bg-cyan-50"></span
          ><span class="relative">Release Notes</span></a
        >
      </li>
      <li>
        <a
          class="relative block px-3 py-2 text-gray-500 transition-colors duration-200 hover:text-gray-900"
          href="#"
          ><span class="absolute inset-0 rounded-md opacity-0 bg-cyan-50"></span
          ><span class="relative">GUI Editor</span></a
        >
      </li>
    </ul>
  </li>
  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Flavors
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/on-the-fly/api"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/on-the-fly/api' ? '' : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/on-the-fly/api'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Complete API</span></router-link
        >
      </li>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/on-the-fly/imgix"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/on-the-fly/imgix' ? '' : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/on-the-fly/imgix'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Imgix</span></router-link
        >
      </li>
      <!-- <li>
                <router-link
                  active-class="text-light-blue-900"
                  to="/on-the-fly/intervention"
                  class="relative block px-3 py-2 transition-colors duration-200"
                  :class="$route.path === '/on-the-fly/intervention' ? '' : 'hover:text-gray-900'"
                  ><span
                    v-if="$route.path === '/on-the-fly/intervention'"
                    class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
                  ></span
                  ><span class="relative">Intervention</span></router-link
                >
              </li> -->
      <router-link
        active-class="text-light-blue-900"
        to="/on-the-fly/sharp"
        class="relative block px-3 py-2 transition-colors duration-200"
        :class="
          $route.path === '/on-the-fly/sharp' ? '' : 'hover:text-gray-900'
        "
        ><span
          v-if="$route.path === '/on-the-fly/sharp'"
          class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
        ></span
        ><span class="relative">Sharp</span></router-link
      >
      <router-link
        active-class="text-light-blue-900"
        to="/on-the-fly/tailwind-css"
        class="relative block px-3 py-2 transition-colors duration-200"
        :class="
          $route.path === '/on-the-fly/tailwind-css'
            ? ''
            : 'hover:text-gray-900'
        "
        ><span
          v-if="$route.path === '/on-the-fly/tailwind-css'"
          class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
        ></span
        ><span class="relative">Tailwind CSS</span></router-link
      >
    </ul>
  </li>
</template>
