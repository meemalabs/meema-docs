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
                  Meema Affiliates
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                Share the love &amp; earn money by telling your friends &amp;
                colleagues about Meema!
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
                  For every paying customer you refer with your unique referral
                  code, you'll get a 15% lifetime commission and the referred
                  user receives a $10 discount on their first invoice.
                </p>

                <p>
                  Our affiliate program is instantly available to all Meema
                  customers. You can find more details about your Affiliate
                  account &amp; statistics inside your Meema dashboard.
                </p>

                <h2 class="flex whitespace-pre-wrap group" id="">
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
                  ><span>Why Meema?</span>
                </h2>

                <p>
                  There are many reasons why we think it is worth it for every
                  developer to invest into Meema. The following are a few
                  reasons you may use "to share the love."
                </p>
                <ul class="ml-8 list-disc">
                  <li>
                    <strong>An incredibly powerful Edge/CDN.</strong> We strive
                    to optimize your media delivery to the fullest extend. "The
                    faster your ecommerce store loads, the more sales you will
                    have." Let a slow website experience not be the issue
                    anymore as we deliver your media all throughout the world.
                  </li>
                  <li>
                    <strong
                      >The most beautiful Media Manager in the industry.</strong
                    >
                    Media Management has never been simpler. You may easily
                    implement our Media Manager into your ecosystem by simply
                    injecting a JavaScript snippet.
                  </li>
                  <li>
                    <strong
                      >Implementing responsive images as simple as can
                      be.</strong
                    >
                    You're not making use of this practice already? Let us help
                    you, because you should. 😉
                  </li>
                  <li>
                    <strong
                      >Optimizing video for the best streaming experience is
                      complicated.</strong
                    >
                    Very complicated, in fact. We take over this headache for
                    you to ensure your users encounter as little buffering as
                    possible. In the meantime, following Meema best practices
                    will ensure you create a pretty &amp; powerful "video
                    experience" for your users.
                  </li>
                  <li>
                    <strong
                      >Integrates easily into your favorite programming
                      environments.</strong
                    >
                    Whether it is native integrations into the Laravel framework
                    or into the JavaScript ecosystem, we got you covered.
                  </li>
                  <li>
                    <strong>Privacy-focussed.</strong> We encrypt all of your
                    files &amp; data and will never share or sell your
                    information. Period.
                  </li>
                  <li>
                    <strong
                      >Fostering Open Source work is an integral focus in our
                      daily workflows.</strong
                    >
                    We believe the "media management" space has much room for
                    improvement &amp; we are here to deliver it for you.
                  </li>
                </ul>
                <p>
                  These are just a few of the reasons why our customers love
                  using Meema. Feel free to let us know via email or Twitter why
                  you enjoy using Meema. We would love to hear from you!
                </p>
                <p>
                  In the next section, you will read about the Affiliate
                  Program's "Terms &amp; Conditions" which are based on the same
                  concepts as
                  <a href="https://usefathom.com"
                    >Fathom Analytic's referral program.</a
                  >
                </p>
              </div>
            </div>
            <hr class="mt-10 mb-4 border-gray-200" />
            <div class="flex font-medium leading-6">
              <a
                class="flex ml-auto text-right transition-colors duration-200 hover:text-gray-900"
                href="https://github.com/tailwindlabs/tailwindcss/releases"
                >Terms &amp; Conditions<span aria-hidden="true" class="ml-2">→</span></a
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
