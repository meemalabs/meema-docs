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
                  Meema Cloud
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                Our infrastructure is set up in a way, so your media delivers as
                quickly as possible.
              </p>
            </div>
            <div>
              <div class="prose">
                <h2 class="flex whitespace-pre-wrap group" id="introduction">
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
                  ><span>Introduction</span>
                </h2>
                <p>
                  When talking about "Meema Cloud," it is a direct reference to
                  our Edge infrastructure that delivers &amp; handles your media
                  on-the-fly. Each media you upload through our API will be
                  distributed inside the Meema Cloud.
                </p>
                <p>
                  Unfortuantely, it is not as simple to create a
                  highly-available &amp; scalable CDN, which is why we took the
                  effort on to ourselves.
                </p>

                <h2 class="flex whitespace-pre-wrap group" id="features">
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
                  ><span>Features</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ipsum sunt corporis nostrum in eligendi accusamus, deserunt
                  accusantium earum cumque similique asperiores minima, numquam
                  eveniet laudantium? Accusantium autem quasi obcaecati?
                </p>

                <h3 class="flex whitespace-pre-wrap group" id="features">
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
                  ><span>Global Scaled Network for Fast Content Delivery</span>
                </h3>
                <p>
                  Meema Cloud makes use of a massively scaled and globally
                  distributed network. The CloudFront network has 225+ points of
                  presence (PoPs) that are interconnected via the AWS backbone
                  delivering ultra-low latency performance and high availability
                  to your end users. The AWS backbone is a private network built
                  on a global, fully redundant, parallel 100 GbE metro fiber
                  network linked via trans-oceanic cables across the Atlantic,
                  Pacific, and Indian Oceans, as well as, the Mediterranean, Red
                  Sea, and South China Seas. Amazon CloudFront automatically
                  maps network conditions and intelligently routes your user’s
                  traffic to the most performant AWS edge location to serve up
                  cached or dynamic content. CloudFront comes default with a
                  multi-tiered caching architecture that offers you improved
                  cache width and origin protection
                </p>

                <h3 class="flex whitespace-pre-wrap group" id="features">
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
                  ><span>Live &amp; On-demand Video Streaming</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ipsum sunt corporis nostrum in eligendi accusamus, deserunt
                  accusantium earum cumque similique asperiores minima, numquam
                  eveniet laudantium? Accusantium autem quasi obcaecati?
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
