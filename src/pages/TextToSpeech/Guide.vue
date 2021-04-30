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
                  Meema Text-To-Speech Package for Laravel
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                This is a Text-To-Speech package for Laravel. Its primary intention is to use a shared API to easily convert text to speech.
              </p>
              <p class="mt-1 text-lg text-gray-500">
                Currently, the only supported driver is Amazon Polly. We are exploring the option to soon support Google WaveNet. Feel free to start a discussion on any possible driver.
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
                  <pre v-highlightjs="sourcecode"><code class="bash">composer require cion/laravel-text-to-speech</code></pre>
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
                    <pre v-highlightjs="sourcecode"><code class="php">use Cion\TextToSpeech\Facades\TextToSpeech;

// convert text from a text file
$path = TextToSpeech::source('path')
    ->convert('/path/to/text/file');

// you may also pass the string directly to convert() method
$path = TextToSpeech::convert('Convert this string.');

// configure where to save the converted output. In this case, it would save the output file in the storage/output.mp3
$path = TextToSpeech::saveTo('output.mp3')
    ->convert('Hi this is a test.');

// store the converted output directly to S3
$path = TextToSpeech::disk('s3')
    ->saveTo('output.mp3')
    ->convert('Store me to S3.');

// convert website articles & blog posts to an audio file
$path = TextToSpeech::source('website')
    ->convert('https://medium.com/cloud-academy-inc/an-introduction-to-aws-polly-s3-and-php-479490bffcbd');

/**
 * Change the language to be used for the conversion.
 * Note: every language has a specific voice_id.
 * For example in ja-JP language we need to use either Mizuki or Takumi.
 *
 * We can pass an option array in convert to change the voice_id to be used
 **/
$options = ['voice' => 'Takumi'];
$path = TextToSpeech::language('ja-JP')
    ->convert('これはテストです', $options);

// using speech marks.
$output = TextToSpeech::speechMarks(['sentence', 'word', 'viseme', 'ssml'])
    ->convert('This is a test'); // This will return an array.</code></pre>
                  </div>
                  <div class="mt-4">
                    Next, publish the config file with:
                  </div>
                  
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="bash">php artisan vendor:publish --provider="Cion\TextToSpeech\Providers\TextToSpeechServiceProvider" --tag="config"</code></pre>
                  </div>

                  <div class="mt-4">
                    Next, please add the following keys their values to your .env file.
                  </div>

                  <div>
                    <pre v-highlightjs="sourcecode"><code class="plaintext">TTS_DRIVER=polly
TTS_DISK=local
TTS_OUTPUT_FORMAT=mp3
TTS_LANGUAGE=en-US
TTS_TEXT_TYPE=text

AWS_VOICE_ID=Amy
AWS_ACCESS_KEY_ID=xxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxx
AWS_DEFAULT_REGION=us-east-1</code></pre>
                  </div>

                  <div class="mt-4">
                    The following is the content of the published config file:
                  </div>
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="php">return [
    /*
     * The disk on which to store converted mp3 files by default. Choose
     * one of the disks you've configured in config/filesystems.php.
     */
    'disk' => env('TTS_DISK', 'local'),

    /**
     * The default audio format of the converted text-to-speech audio file.
     * Currently, mp3 is the only supported format.
     */
    'output_format' => env('TTS_OUTPUT_FORMAT', 'mp3'),

    /**
     * The driver to be used for converting text-to-speech
     * You can choose polly, or null as of now.
     */
    'driver' => env('TTS_DRIVER', 'polly'),

    /**
     * The default language to be used.
     *
     * You may use any of the following:
     *
     * arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US,
     * es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO,
     * nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR
     */
    'language' => env('TTS_LANGUAGE', 'en-US'),

    'audio' => [
        /**
         * Default path to store the output file.
         */
        'path' => 'TTS',

        /**
         * Default filename formatter.
         */
        'formatter' => \Cion\TextToSpeech\Formatters\DefaultFilenameFormatter::class,
    ],

    /**
     * The default source that will be used.
     */
    'default_source' => 'text',

    /**
     * The default text type to be used.
     * You can use either text or ssml.
     */
    'text_type' => env('TTS_TEXT_TYPE', 'text'),

    /**
     * The source that can be used.
     * You can create your own source by implementing the Source interface.
     *
     * @see \Cion\TextToSpeech\Contracts\Source
     */
    'sources' => [
        'text'    => \Cion\TextToSpeech\Sources\TextSource::class,
        'path'    => \Cion\TextToSpeech\Sources\PathSource::class,
        'website' => \Cion\TextToSpeech\Sources\WebsiteSource::class,
    ],

    'services' => [
        'polly' => [
            /**
             * Voice ID to use for the synthesis.
             * You may use any of the following:.
             *
             * Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine,
             * Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz,
             * Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna,
             * Joey, Justin, Karl, Kendra, Kimberly, Lea, Liv, Lotte, Lucia,
             * Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel,
             * Mizuki, Naja, Nicole, Penelope, Raveena, Ricardo, Ruben, Russell,
             * Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu.
             */
            'voice_id' => env('AWS_VOICE_ID', 'Amy'),

            /**
             * You can request any or all of the speech mark types, but leave it empty if you don't use speech marks.
             * You may add any of the following:.
             *
             * sentence, word, viseme, ssml
             */
            'speech_marks' => [],

            /**
             * IAM Credentials from AWS.
             */
            'credentials' => [
                'key'     => env('AWS_ACCESS_KEY_ID', ''),
                'secret'  => env('AWS_SECRET_ACCESS_KEY', ''),
            ],

            'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
            'version' => 'latest',
        ],
    ],
];</code></pre>
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
