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
          to="/open-source"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source' || $route.path === '/open-source/'
              ? 'text-light-blue-900'
              : 'hover:text-gray-900'
          "
          ><span
            v-if="
              $route.path === '/open-source' || $route.path === '/open-source/'
            "
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Introduction</span></router-link
        >
      </li>
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Meema.js
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/meema-js"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/meema-js'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/meema-js'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Meema Client PHP
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/meema-client-php"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/meema-client-php'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/meema-client-php'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Laravel Meema
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/laravel-meema"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/laravel-meema'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/laravel-meema'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Laravel Media Converter
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/laravel-media-converter"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/laravel-media-converter'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/laravel-media-converter'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Laravel Media Recognition
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/laravel-media-recognition"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/laravel-media-recognition'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/laravel-media-recognition'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Laravel Text-To-Speech
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/laravel-text-to-speech"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/laravel-text-to-speech'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/laravel-text-to-speech'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>

  <li class="mt-8">
    <h5
      class="px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs"
    >
      Flysystem Adapter
    </h5>
    <ul>
      <li>
        <router-link
          active-class="text-light-blue-900"
          to="/open-source/flysystem-adapter"
          class="relative block px-3 py-2 transition-colors duration-200"
          :class="
            $route.path === '/open-source/flysystem-adapter'
              ? ''
              : 'hover:text-gray-900'
          "
          ><span
            v-if="$route.path === '/open-source/flysystem-adapter'"
            class="absolute inset-0 rounded-md opacity-[60%] bg-light-blue-100"
          ></span
          ><span class="relative">Guide</span></router-link
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
    </ul>
  </li>
</template>
