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
                  Laravel Meema
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                Coming soon. This package is under current work in progress and it will be a wrapper around Meema's API.
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
                  <pre v-highlightjs="sourcecode"><code class="bash">composer require meema/laravel-meema</code></pre>
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
                    <pre v-highlightjs="sourcecode"><code class="php">use Meema\LaravelMeema\Facades\Meema;

Meema::media()->get();
Meema::folders()->get();
Meema::tags()->get();
Meema::favorites()->get();
Meema::storage()->upload($path);

Meema::media()->get(1,2,3);
Meema::folders()->get(1,2,3);
Meema::tags()->get(1,2,3);
Meema::favorites()->get(1,2,3);

Meema::media()->delete(1,2,3);
Meema::folders()->delete(1,2,3);
Meema::tags()->delete(1,2,3);
Meema::favorites()->delete(1,2,3);

Meema::media()->update(1, $data);
Meema::folders()->update(1, $data);
Meema::tags()->update(1, $data);
Meema::favorites()->update(1, $data);

$media = Meema::media()->find(1);
$folder = Meema::folders()->find(1);
$tag = Meema::tags()->find(1);
$favorite = Meema::favorites()->find(1);

// You can then chain after the find method
$media->delete();
$media->update($data);
$media->folders()->get();
$media->tags()->get();

$folder->delete();
$folder->update($data);
$folder->media()->get();
$folder->tags()->get();

$tag->delete();
$tag->update($data);
$favorite->delete();
$favorite->update($data);

// If you just want to get the array response
$media->toArray();
$folder->toArray();
$tag->toArray();
$favorite->toArray();</code></pre>
                  </div>
                  <div>
                    <div>You can also use the specific Models</div>
                    <pre v-highlightjs="sourcecode"><code class="php">use Meema\LaravelMeema\Facades\Media;
use Meema\LaravelMeema\Facades\Folder;
use Meema\LaravelMeema\Facades\Favorite;
use Meema\LaravelMeema\Facades\Tags;

// You can then use the models as such, and you can use the functions used above.
Media::get();
Folder::get();
Favorite::get();
Tags::get();</code></pre>
                  </div>
                  <div class="mt-4">
                    Next, publish the config file with:
                  </div>
                  
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="bash">php artisan vendor:publish --provider="Meema\LaravelMeema\Providers\MeemaServiceProvider" --tag="config"</code></pre>
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
