<template>
  <app-nav />

  <div class="mx-auto max-w-8xl">
    <div class="px-4 sm:px-6 lg:px-8">
      <h1 class="mt-24 text-2xl font-extrabold md:max-w-4xl sm:text-3xl">
        The easy way to manage, distribute &amp; scale your media across
        platforms. Quick image &amp; video editing? We got ya.
      </h1>
    </div>
  </div>

  <div class="mx-auto max-w-8xl">
    <div class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-flow-col grid-rows-3 gap-4 h-96">
        <router-link
          to="/affiliates"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Affiliates
        </router-link>
        <router-link
          to="/cloud"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Cloud
        </router-link>
        <router-link
          to="/images"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Images
        </router-link>
        <router-link
          to="/media-manager"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Media Manager
        </router-link>
        <router-link
          to="/on-the-fly"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema On-The-Fly
        </router-link>
        <router-link
          to="/open-source"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Open Source
        </router-link>
        <router-link
          to="/privacy"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Privacy
        </router-link>
        <router-link
          to="/video"
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-light-blue-600 to-light-blue-500"
          >Meema Video
        </router-link>
        <div
          class="flex items-center justify-center text-2xl font-extrabold text-white rounded-md bg-gradient-to-r from-yellow-600 to-yellow-500"
        >
          Just here to look pretty.
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-8xl">
    <div class="px-4 py-16 sm:px-6 lg:px-8">
      <app-footer />
    </div>
  </div>
</template>

<script setup>
import AppNav from "../components/AppNav.vue";
import AppFooter from "../components/AppFooter.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
