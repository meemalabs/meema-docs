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
                  Flysystem adapter for Meema.io
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                This package contains a <a href="https://flysystem.thephpleague.com/" class="underline">Flysystem</a> adapter for Meema. Under the hood, the Meema API is used.
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
                  <pre v-highlightjs="sourcecode"><code class="bash">composer require meemaio/flysystem-meema</code></pre>
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
                    <div>
                      The first thing you need to do is get an authorization token at Meema.io. A token can be generated in the <a target="_new" href="https://meema.io">App Console</a> for any Meema API app.
                    </div>
                    <pre v-highlightjs="sourcecode"><code class="php">use League\Flysystem\Filesystem;
use Meema\Client;
use Meema\FlysystemMeema\MeemaAdapter;

$client = new Client($authorizationToken);

$adapter = new MeemaAdapter($client);

$filesystem = new Filesystem($adapter);</code></pre>
                  </div>
                  <div>
                    <div>For extending the storage, you have to put this in your service provider.</div>
                    <pre v-highlightjs="sourcecode"><code class="php">use League\Flysystem\Filesystem;
use Meema\Client as MeemaClient;
use Meema\FlysystemMeema\MeemaAdapter;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    Storage::extend('meema', function ($app, $config) {
        $client = new MeemaClient(
            $config['api_secret']
        );

        return new Filesystem(new MeemaAdapter($client));
    });
}</code></pre>
                  </div>
                  <div class="mt-4">
                    After extending the storage you will have to put the meema driver in your config/filesystems.php

                    <p>Read more about custom filesystems <a href="https://laravel.com/docs/8.x/filesystem#custom-filesystems">here</a>.</p>
                  </div>
                  
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="php">'disks' => [
    ...
    'meema' => [
        'driver' => 'meema',
        'api_seceret' => env('MEEMA_API_SECRET'),
    ],
]</code></pre>
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
