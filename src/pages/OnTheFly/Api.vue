<template>
  <docs-nav />

  <div class="w-full mx-auto max-w-8xl">
    <div class="lg:flex">
      <docs-sidebar />

      <div
        class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
      >
        <div class="flex w-full">
          <div
            class="flex-auto min-w-0 px-4 pt-10 pb-24 sm:px-6 xl:px-8 lg:pb-16"
          >
            <div class="pb-10 mb-10 border-b border-gray-200">
              <div>
                <h1
                  class="inline-block text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  Complete API
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                The list of all available query parameters to choose from.
              </p>
            </div>
            <div>
              <div class="prose">
                <h2
                  class="flex whitespace-pre-wrap group"
                  id=""
                >
                  <a
                    href="#"
                    class="absolute opacity-0 after:hash group-hover:opacity-100"
                    aria-label="Anchor"
                    style="
                      margin-left: -1em;
                      padding-right: 0.5em;
                      box-shadow: none;
                      color: rgb(161, 161, 170);
                    "
                  ></a
                  ><span>Image Operations</span>
                </h2>
                <p>
                  The following list of query paramters you may apply to any image delivered through the Meema Content Delivery Network (CDN).
                </p>
                <p>
                  In case you are struggling to make sense of this,  no worries. Check out our <a href="#">Playground</a> and we are certain any unclarity will start to make sense.
                </p>

                <h3
                  class="flex whitespace-pre-wrap group"
                  id="#"
                >
                  <a
                    href="##"
                    class="absolute opacity-0 after:hash group-hover:opacity-100"
                    aria-label="Anchor"
                    style="
                      margin-left: -1em;
                      padding-right: 0.5em;
                      box-shadow: none;
                      color: rgb(161, 161, 170);
                    "
                  ></a
                  ><span>Media Delivery</span>
                </h3>
                  <p>
                  Ex eiusmod et mollit velit labore excepteur duis exercitation
                  do quis consectetur. Nulla esse occaecat nostrud non voluptate
                  ullamco tempor fugiat minim. Labore consectetur culpa deserunt
                  velit ullamco ullamco. Aute ex sit eu sint ad magna excepteur
                  do labore incididunt irure. Eu elit ex voluptate ea est.
                </p>

                <h3
                  class="flex whitespace-pre-wrap group"
                  id="#"
                >
                  <a
                    href="##"
                    class="absolute opacity-0 after:hash group-hover:opacity-100"
                    aria-label="Anchor"
                    style="
                      margin-left: -1em;
                      padding-right: 0.5em;
                      box-shadow: none;
                      color: rgb(161, 161, 170);
                    "
                  ></a
                  ><span>Storage &amp; Costs</span>
                </h3>
                  <p>
                  Ex eiusmod et mollit velit labore excepteur duis exercitation
                  do quis consectetur. Nulla esse occaecat nostrud non voluptate
                  ullamco tempor fugiat minim. Labore consectetur culpa deserunt
                  velit ullamco ullamco. Aute ex sit eu sint ad magna excepteur
                  do labore incididunt irure. Eu elit ex voluptate ea est.
                </p>

                <h3
                  class="flex whitespace-pre-wrap group"
                  id="#"
                >
                  <a
                    href="##"
                    class="absolute opacity-0 after:hash group-hover:opacity-100"
                    aria-label="Anchor"
                    style="
                      margin-left: -1em;
                      padding-right: 0.5em;
                      box-shadow: none;
                      color: rgb(161, 161, 170);
                    "
                  ></a
                  ><span>Why are there different "Flavors?"</span>
                </h3>
                 <p>
                  Ex eiusmod et mollit velit labore excepteur duis exercitation
                  do quis consectetur. Nulla esse occaecat nostrud non voluptate
                  ullamco tempor fugiat minim. Labore consectetur culpa deserunt
                  velit ullamco ullamco. Aute ex sit eu sint ad magna excepteur
                  do labore incididunt irure. Eu elit ex voluptate ea est.
                </p>
              </div>
            </div>
            <hr class="mt-10 mb-4 border-gray-200" />
            <div class="flex font-medium leading-6">
              <a
                class="flex ml-auto text-right transition-colors duration-200 hover:text-gray-900"
                href="https://github.com/tailwindlabs/tailwindcss/releases"
                >Release Notes<span aria-hidden="true" class="ml-2">→</span></a
              >
            </div>
          </div>
          <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
            <div
              class="sticky flex flex-col justify-between pt-10 pb-6 overflow-y-auto max-h-screen-18 top-[4.5rem]"
            >
              <scroll-spy />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DocsNav from "../../components/DocsNav.vue";
import DocsSidebar from "../../components/DocsSidebar.vue";
import AppFooter from "../../components/AppFooter.vue";
import ScrollSpy from "../../components/ScrollSpy.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
