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
                  Meema Client for PHP
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                The most simple way to integrate Meema and your PHP project.
              </p>
              <div class="mt-1 text-lg text-gray-500">
                <h3
                  class="inline-block text-lg font-bold tracking-tight text-gray-700"
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
                  ><span>Features: </span>
                </h3>
                <div class="ml-8">
                  <ul class="list-disc ">
                    <li>Most simple way to implement a fully-functional media management system</li>
                    <li>Thin & minimal package to interact with Meema's API</li>
                    <li>Supports php <span class="code-highlight">^5.*</span></li>
                  </ul>
                </div>
              </div>
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
                  ><span>Guide</span>
                </h2>
                <h3
                  class="flex whitespace-pre-wrap group"
                  id="#"
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
                  ><span>Installation</span>
                </h3>
                <div>
                  <pre v-highlightjs="sourcecode"><code class="bash">composer require meema/meema-client-php</code></pre>
                </div>

                <div>
                  <h3
                    class="flex whitespace-pre-wrap group"
                    id="#"
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
                    ><span>Usage</span>
                  </h3>
                  <div>
                    <p>First, initialize the client.</p>
                    <pre v-highlightjs="sourcecode"><code class="php">use Meema\MeemaClient\Client

$client = new Client($meemaApiKey);</code></pre>
                  </div>
                  <div class="mt-4">
                    Then, you can use the instance as such.
                  </div>
                  
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="php">$client->folders()->get([1, 2, 3]);
$client->folders()->delete(1, 2, 3);
$client->folders(1)->update(['name' = 'New Folder Name']);
$client->folders([1, 2, 3])->media()->get();
$client->tags()->get();
$client->tags()->delete(1, 2, 3);
$client->tags(1)->update(['name' = 'New Tag Name']);
$client->tags([1, 2, 3])->media()->get();

// need to the same for following resources
$client->favorites()->get();
$client->media()->get();
$client->teams()->get();

$client->media()->get(); 
$client->media()->search($q);
$client->media()->metadata()->get();

$client->folders()->get(); 
$client->folders()->search($q);

$client->storage()->upload($path); 
$client->storage()->getMetadata($path);
$client->storage()->setVisibility($path, $visibility);

$media = $client->media()->find(1);
$folder = $client->folders()->find(1);
$tag = $client->tags()->find(1);
$favorite = $client->favorites()->find(1);

// You can then chain after the find method
$media->delete();
$media->update($data);
$media->folders()->get();
$media->tags()->get();

// If you just want to get the array response
$media->toArray();
$folder->toArray();
$tag->toArray();
$favorite->toArray();</code></pre>
                  </div>
                </div>
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
