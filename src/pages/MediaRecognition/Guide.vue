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
                  Meema Laravel Media Recognition
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                At the current state, this is a wrapper package for AWS Rekognition with some extra handy methods.
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
                  <pre v-highlightjs="sourcecode"><code class="bash">composer require meema/laravel-media-recognition</code></pre>
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
                    <pre v-highlightjs="sourcecode"><code class="php">use Meema\MediaRecognition\Facades\Recognize;

// run any of the following methods:
// note: any of the detect*() method parameters are optional and will default to config values

// "image operations"
$recognize = Recognize::path('images/persons.jpg', 'image/jpeg'); // while the $mimeType parameter is optional, it is recommended for performance reasons
$recognize->detectLabels($minConfidence = null, $maxLabels = null)
$recognize->detectFaces($attributes = ['DEFAULT'])
$recognize->detectModeration($minConfidence = null)
$recognize->detectText()
    
// "video operations"
$recognize = Recognize::path('videos/amazing-video.mp4', 'video/mp4');
$recognize->startLabelDetection($minConfidence = null, $maxResults = 1000)
$recognize->startFaceDetection(string $faceAttribute = 'DEFAULT')
$recognize->startContentModeration(int $minConfidence = null)
$recognize->startTextDetection(array $filters = null)

// get the analysis/status of your jobs
$recognize->getLabelsByJobId(string $jobId)
$recognize->getFacesByJobId(string $jobId)
$recognize->getContentModerationByJobId(string $jobId)
$recognize->getTextDetectionByJobId(string $jobId)

// if you want to track your media recognitions, use the Recognizable trait on your media model && run the included migration
$media = Media::first();
$media->recognize($path)->detectFaces(); // you may chain any of the detection methods</code></pre>
                  </div>
                  <div class="mt-4">
                    Next, publish the config file with:
                  </div>
                  
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="bash">php artisan vendor:publish --provider="Meema\MediaRecognition\Providers\MediaRecognitionServiceProvider" --tag="config"</code></pre>
                  </div>

                  <div class="mt-4">
                    Next, please add the following keys their values to your .env file.
                  </div>

                  <div>
                    <pre v-highlightjs="sourcecode"><code class="plaintext">AWS_ACCESS_KEY_ID=xxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxx
AWS_DEFAULT_REGION=us-east-1
AWS_SNS_TOPIC_ARN=arn:aws:sns:us-east-1:000000000000:RekognitionUpdate
AWS_S3_BUCKET=bucket-name</code></pre>
                  </div>

                  <div class="mt-4">
                    The following is the content of the published config file:
                  </div>
                  <div>
                    <pre v-highlightjs="sourcecode"><code class="php">return [
    /**
     * The fully qualified class name of the "media" model.
     */
    'media_model' => \App\Models\Media::class,

    /**
     * IAM Credentials from AWS.
     */
    'credentials' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
    ],

    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),

    /**
     * Specify the version of the Rekognition API you would like to use.
     * Please only adjust this value if you know what you are doing.
     */
    'version' => 'latest',

    /**
     * The S3 bucket name where the image/video to be analyzed is stored.
     */
    'bucket' => env('AWS_S3_BUCKET'),

    /**
     * Specify the IAM Role ARN.
     *
     * You can find the Role ARN visiting the following URL:
     * https://console.aws.amazon.com/iam/home?region=us-east-1#/roles
     * Please note to adjust the "region" in the URL above.
     * Tip: in case you need to create a new Role, you may name it `Rekognition_Default_Role`
     * by making use of this name, AWS Rekognition will default to using this IAM Role.
     */
    'iam_arn' => env('AWS_IAM_ARN'),

    /**
     * Specify the AWS SNS Topic ARN.
     * This triggers the webhook to be sent.
     *
     * It can be found by selecting your "Topic" when visiting the following URL:
     * https://console.aws.amazon.com/sns/v3/home?region=us-east-1#/topics
     * Please note to adjust the "region" in the URL above.
     */
    'sns_topic_arn' => env('AWS_SNS_TOPIC_ARN'),
];</code></pre>
                  </div>
                </div>
                
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
                  ><span>Preparing Your Media Model (optional)</span>
                </h3>

                <div class="mt-4">
                  This package includes a trait for your "Media model" that you may use to define the relationship of your media model with the tracked recognitions.
                  <div>
                    Simply use it as follows:
                  </div>

                  <div>
                    <pre v-highlightjs="sourcecode"><code class="php">namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Meema\MediaRecognition\Traits\Recognizable;

class Media extends Model
{
    use Recognizable;

    // ...
}</code></pre>
                  </div>
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
                    ><span>Set Up Webhooks (optional)</span>
                  </h3>
                  <p>
                    This package makes use of webhooks in order to communicate the updates of the AWS Rekognition job.
                    Please follow the following steps to enable webhooks for yourself.
                  </p>
                  <p>
                    Please note, this is only optional, and you should only enable this if you want to track the
                    Rekognition job's results for long-lasting processes (e.g. analyzing video).
                  </p>

                  <h4 class="flex whitespace-pre-wrap group">
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
                    ><span>Setup Expose</span>
                  </h4>

                  <div>
                    <p>First, let's use <a target="_new" href="https://beyondco.de/docs/expose/getting-started/installation">Expose</a> 
                    to "expose" / generate a URL for our local API.
                    Follow the Expose documentation on how you can get started and generate a "live" & sharable
                    URL for within your development environment.</p>
                    <p>It should be as simple as <span class="text-sm code-highlight">cd my-laravel-api && expose.</span></p>
                  </div>
                </div>

                <div>
                  <h4 class="flex whitespace-pre-wrap group">
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
                    ><span>Setup AWS SNS Topic & Subscription</span>
                  </h4>

                  <div>
                    <p>Second, let's create an AWS SNS Topic which will notify our "exposed" API endpoint:</p>
                    <div class="ml-8">
                      <ul class="list-decimal">
                        <li>Open the Amazon SNS console at <a target="_new" href="https://console.aws.amazon.com/sns/v3/home">https://console.aws.amazon.com/sns/v3/home</a></li>
                        <li>In the navigation pane, choose Topics, and then choose "Create new topic".</li>
                        <li>
                          For Topic name, enter <span class="code-highlight">RekognitionUpdate</span>, and then choose "Create topic".
                          <img src="https://camo.githubusercontent.com/c9b27bdaf29b6a2f58625246d6bad2bcc1c53ae95e159a130ed5daa3dad1cf47/68747470733a2f2f692e696d6775722e636f6d2f344d4b746675592e706e67" alt="" />
                        </li>
                        <li>
                          Choose the topic ARN link for the topic that you just created. It looks something like this:
                          <span class="code-highlight">arn:aws:sns:region:123456789012:RekognitionUpdate</span>
                        </li>
                        <li>
                          On the Topic details:
                          <span class="code-highlight">RekognitionUpdate</span> page,  
                          in the Subscriptions section, choose "Create subscription".
                        </li>
                        <li>
                          For Protocol, choose "HTTPS". For Endpoint, enter your "exposed" API URL which you generated in a previous step.
                          <p>For example,</p>
                          <p>
                            <pre v-highlightjs="sourcecode"><code class="plaintext">https://meema-api.sharedwithexpose.com/api/webhooks/media-recognition</code></pre>
                          </p>
                        </li>
                        <li>Choose "Create subscription".</li>
                      </ul>
                    </div>
                  </div>

                  <h4 class="flex whitespace-pre-wrap group">
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
                    ><span>Confirming Your Subscription</span>
                  </h4>

                  <div class="mt-4">
                    <p>
                      Finally, we need to confirm the subscription which is easily done by
                      navigating to the <span class="code-highlight">RekognitionUpdate</span> Topic page.
                      There, you should see the following section:
                      <img src="https://camo.githubusercontent.com/f33c59d1a50c81b1091b5b7147f2fc8bbeded5607a2cd5326a06caab3cfbf660/68747470733a2f2f692e696d6775722e636f6d2f6f5450774e656e2e706e67" alt="">
                    </p>
                    <p>
                      By default, AWS will have sent a post request to URL you defined in your "Subscription" setup.
                      This package automatically handles the "confirmation" part.
                      In case there is an issue and it is not confirmed yet,
                      please click on the "Request confirmation" button as seen in the screenshot above.
                    </p>
                    <p>
                      You can also view the request in the Expose interface,
                      by visiting the "Dashboard Url", which should be similar to:
                      <span class="code-highlight">http://127.0.0.1:4040</span>
                    </p>
                    <p>Once the status reflects "Confirmed", your API will receive webhooks as AWS provides updates.</p>
                  </div>

                  <h4 class="flex whitespace-pre-wrap group">
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
                    ><span>Create CloudWatch Event</span>
                  </h4>

                  <div class="mt-4">
                    <ul class="list-decimal">
                      <li>Open the CloudWatch console at <a href="https://console.aws.amazon.com/cloudwatch/.">https://console.aws.amazon.com/cloudwatch/.</a></li>
                      <li>In the navigation pane, choose Events, and then choose "Create rule".</li>
                      <li>
                        Make sure the inputs match the following screenshots:

                        <img src="https://camo.githubusercontent.com/1241c1ab666a20af35d1ed1719b0749e7eed3cafea28a4ea49573ff65fef04ca/68747470733a2f2f692e696d6775722e636f6d2f3263385345664e2e706e67" alt="">
                      </li>
                    </ul>
                    <p>As you can see in above screenshot, we needed to select the "Service Name", "Event Type", and the "Target" which is referencing our SNS Topic we earlier created.</p>
                    <p>
                      Lastly, the second & final step of the "Rule creation" prompts you to enter a name and an optional description.
                      You may use any name, e.g. <span class="code-highligh">mediaconvert-job-updates</span> .
                    </p>
                  </div>

                  <h3 class="flex whitespace-pre-wrap group">
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
                    ><span>Deploying to Laravel Vapor</span>
                  </h3>

                  <div class="mt-4">
                    <p>Please note, as of right now, you cannot reuse the AWS credentials stored in your "environment file". The "workaround" for this is to adjust the media-converter.php-config file by renaming</p>
                    <div>
                      <div>
                        From: <span class="text-sm code-highlight">AWS_ACCESS_KEY_ID</span> - To: e.g. <span class="text-sm code-highlight">VAPOR_ACCESS_KEY_ID</span>
                      </div>
                      <div>
                        From: <span class="text-sm code-highlight">AWS_SECRET_ACCESS_KEY</span> - To: e.g. <span class="text-sm code-highlight">VAPOR_SECRET_ACCESS_KEY</span>
                      </div>
                    </div>

                    <p>and, lastly, please ensure that your Vapor environment has these values defined.</p>
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
