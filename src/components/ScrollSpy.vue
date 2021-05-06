<template>
  <div
    class="mb-8"
    v-if="$route.path === '/on-the-fly' || $route.path === '/on-the-fly/'"
  >
    <h5
      class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs"
    >
      On this page
    </h5>
    <ul class="overflow-x-hidden font-medium text-gray-500">
      <li>
        <a
          href="#integration-guides"
          class="block py-2 text-gray-900 transition-colors duration-200 transform hover:text-gray-900"
          >Introduction</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 transition-colors duration-200 transform hover:text-gray-900"
          >Useful Information</a
        >
      </li>
      <li class="ml-4">
        <a
          href="#"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Media Delivery</a
        >
      </li>
      <li class="ml-4">
        <a
          href="#add-tailwind-as-a-post-css-plugin"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Storage Costs</a
        >
      </li>
      <li class="ml-4">
        <a
          href="#create-your-configuration-file"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Why are there different "Flavors?"</a
        >
      </li>
    </ul>
  </div>

  <div
    class="mb-8"
    v-if="
      $route.path === '/on-the-fly/video-ops' || $route.path === '/on-the-fly/video-ops/'
    "
  >
    <h5
      class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs"
    >
      On this page
    </h5>
    <ul class="overflow-x-hidden font-medium text-gray-500">
      <li>
        <a
          href="#/on-the-fly/video-ops/#format"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Format</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/video-ops/#recognition"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Recognition</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Thumbnail Sprites</a
        >
      </li>
    </ul>
  </div>

  <div
    class="mb-8"
    v-if="
      $route.path === '/on-the-fly/image-ops' || $route.path === '/on-the-fly/image-ops/'
    "
  >
    <h5
      class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs"
    >
      On this page
    </h5>
    <ul class="overflow-x-hidden font-medium text-gray-500">
      <li>
        <a
          href="#/on-the-fly/image-ops/#adjustments"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Adjustments</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#border-padding"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Border & Padding</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#face-detection"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Face Detection</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#fill"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Fill</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#format"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Format</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#size"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Size</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#stylize"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Stylize</a
        >
      </li>
      <li>
        <a
          href="#/on-the-fly/image-ops/#trim"
          class="block py-2 font-medium transition-colors duration-200 hover:text-gray-900"
          >Trim</a
        >
      </li>
    </ul>
  </div>

  <div
    class="mb-8"
    v-if="
      $route.path === '/open-source' || $route.path === '/open-source/'
    "
  >
    <h5
      class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs"
    >
      On this page
    </h5>
    <ul class="overflow-x-hidden font-medium text-gray-500">
      <li>
        <a
          href="#"
          class="block py-2 transition-colors duration-200 transform hover:text-gray-900"
          >Introduction</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 transition-colors duration-200 transform hover:text-gray-900"
          >Philosophy</a
        >
      </li>
    </ul>
  </div>
</template>
