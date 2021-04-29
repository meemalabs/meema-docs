<template>
  <div
    id="sidebar"
    class="fixed inset-0 z-40 flex-none hidden w-full h-full bg-black bg-opacity-25 lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block"
  >
    <div
      id="navWrapper"
      class="h-full mr-24 overflow-hidden overflow-y-auto scrolling-touch bg-white lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-[4.5rem] lg:mr-0"
    >
      <div
        class="absolute inset-x-0 z-10 hidden h-12 pointer-events-none lg:block bg-gradient-to-b from-white"
      ></div>
      <nav
        id="nav"
        class="px-1 pt-6 pb-10 overflow-y-auto text-base font-medium sm:px-3 xl:px-5 lg:text-sm lg:pt-10 lg:pb-14 lg:h-screen-18"
      >
        <ul class="text-gray-600">
          <docs-static-sidebar />
          <docs-sidebar-otf v-if="$route.path.includes('on-the-fly')" />
          <docs-sidebar-open-source v-if="$route.path.includes('open-source')" />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import DocsSidebarOtf from "./_DocsSidebarOtf.vue";
import DocsSidebarOpenSource from "./_DocsSidebarOpenSource.vue";
import DocsStaticSidebar from "./_DocsStaticSidebar.vue";
</script>
