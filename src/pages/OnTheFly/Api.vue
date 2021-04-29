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
                  ><span>Image Operations</span>
                </h2>
                <p>
                  The following list of query paramters you may apply to any
                  image delivered through the Meema Content Delivery Network
                  (CDN).
                </p>
                <p>
                  In case you are struggling to make sense of this, no worries.
                  Check out our <a href="#">Playground</a> and we are certain
                  any unclarity will start to make sense.
                </p>

                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Adjustments</span>
                  </h3>
                  <div>
                    <div>
                      Adjustment parameters do basic retouching operations similar to those in image-editing applications like Adobe® Photoshop®.
                      You can use them to fix common issues such as under- or over-exposure,
                      blurriness, and color range, or alter your images artistically.
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">bri</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Adjusts the overall brightness of the image.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">-100 – 100</span>.
                        The default value is <span class="code-highlight">0</span>, which leaves the image unchanged.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?bri=50
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">sat</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Adjusts the saturation of the image.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">-100 – 100</span>.
                        The default value is <span class="code-highlight">0</span>.
                        A value of -100 will convert the image to grayscale.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Aliases</div>
                      <div class="param-desc-body">
                        <ul>
                          <li><span class="code-highlight">saturation</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?sat=100
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">sharp</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Sharpens the image using luminance (which only affects the black and white values), providing crisp detail with minimal color artifacts.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">0 – 100</span>.
                        The default value is <span class="code-highlight">0</span>, which leaves the image unchanged.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?sharp=20
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">hue</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Changes the hue, or tint, of each pixel in the image.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        The value is an angle along a hue color wheel,
                        with the pixel's starting color at <span class="code-highlight">0</span>.
                        Valid values are in the range <span class="code-highlight">0 – 359</span>.
                        The default value is <span class="code-highlight">0</span>, which leaves the image unchanged.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?hue=100
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Border & Padding</span>
                  </h3>
                  <div>
                    <div>
                      Add a border, rounded corners, and/or padding to your image.
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">pad</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Pads the image by the number of pixels specified. Must be a positive integer.
                        <p>If the image is requested without a specified width and height, padding will be added to the dimensions of the image. If the image is cropped or resized, the image (including the padding) will be sized to fit within the requested dimensions.</p>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">0 – 500</span>.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?pad=100
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Face Detection</span>
                  </h3>
                  <div>
                    <div>
                      Add a border, rounded corners, and/or padding to your image.
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">faceindex</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The faceindex parameter selects a face on which to center an image when <span class="code-highlight">fit=facearea</span>.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        The faceindex parameter must be an integer.
                        It can be set to any value from <span class="code-highlight">1 to N</span>,
                        where <span class="code-highlight">N</span> is the total number of detected faces in the image. 
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Aliases</div>
                      <div class="param-desc-body">
                        <ul>
                          <li><span class="code-highlight">face-index</span></li>
                          <li><span class="code-highlight">focus-face</span></li>
                          <li><span class="code-highlight">focussed-face</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?faceindex=2
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Fill</span>
                  </h3>
                  <div>
                    <div>
                      Fill parameters describe how blank or partially transparent pixels in an image will be filled.
                    </div>
                  </div>
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">bg</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The bg parameter allows you to fill in any transparent areas in your image with a color of your choice.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid color values are a color keyword or 3- (RGB), 4- (ARGB) 6- (RRGGBB) or 8-digit (AARRGGBB) hexadecimal values.
                        The "A" in a 4- or 8-digit hex value represents the color's alpha transparency.
                        The default is transparent white, <span class="code-highlight">0FFF</span>.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?bg=FF00FF
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">fill-color</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The <span class="code-highlight">fill-color</span> parameter specifies
                        the solid color applied to the excess space of animage resized with
                        <span class="code-highlight">fit=fill</span> or <span class="code-highlight">fit=fillmax</span>.
                        The parameter is dependent on the fill=solid mode.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid color values are either a color keyword or 3- (RGB), 4- (ARGB) 6- (RRGGBB) or 8-digit (AARRGGBB) hexadecimal values.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Aliases</div>
                      <div class="param-desc-body">
                        <ul>
                          <li><span class="code-highlight">fillcolor</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?fill-color=FF00FF
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?fillcolor=FF00FF
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">fill</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The <span class="code-highlight">fill</span> parameter determines how the excess space in an image resized with
                        <span class="code-highlight">fit=fill</span> or <span class="code-highlight">fit=fillmax</span>
                        should be filled.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Possible values are <span class="code-highlight">solid</span> and <span class="code-highlight">blur</span>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?fill=solid
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?fill=blur
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Format</span>
                  </h3>
                  <div>
                    <div>
                      This set of parameters gives you control over the output properties of your image across several aspects:
                    </div>
                    <div>
                      - Quality: (q, lossless) Set the quality level for compression, and enable lossless compression for formats that support it.
                    </div>
                  </div>
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">q</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Controls the output quality of lossy file formats (jpg, pjpg, or webp).
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">0 – 100</span> 
                        and the default is  <span class="code-highlight">75</span>. 
                        Quality can often be set much lower than the default, especially when serving high-DPR images.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?q=50
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">cs</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The cs parameter specifies the color space of the output image.
                        Changing or removing the color space metadata can help decrease file size,
                        especially for smaller images such as thumbnails where it's a
                        larger percentage of the total file size.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        <span class="code-highlight">cs</span> has several possible values that allow for different tradeoffs between color fidelity and file size.
                        For higher fidelity, <span class="code-highlight">srgb</span> (the default) will set the image to the sRGB color space,
                        which is the Internet standard. <span class="code-highlight">adobergb1998</span> refers to the Adobe RGB (1998) color space,
                        which provides accurate color reproduction from screen to print.

                        <p>For better file size savings, <span class="code-highlight">tinysrgb</span> reduces the color space metadata but may cause a slight shift in color values,
                        and strip removes it completely for maximum size reduction.</p>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?cs=srgb
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Size</span>
                  </h3>
                  <p>
                    These size parameters allow you to easily adjust the size
                    (resizing &amp; cropping), aspect ratio and the fit-to-crop
                    behavior.
                  </p>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">ar</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Resizes and crops the original image to match a specified aspect ratio.
                        This parameter will work only when fit=crop is set.
                        Values for ar are expressed as W:H.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Possible values are:
                        <span class="code-highlight">9:1</span>
                        <span class="code-highlight">16:10</span>
                        <span class="code-highlight">16:9</span>
                        <span class="code-highlight">3:2</span>

                        and any valid aspect ratios.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?ar=9:1&fit=crop
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?ar=16:10&fit=crop
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">w</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The width of the output image. Primary mode is a positive integer, interpreted as pixel height. The resulting image will be w pixels wide.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Values can range from <span class="code-highlight">2</span> to <span class="code-highlight">8192</span>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Aliases</div>
                      <div class="param-desc-body">
                        <ul>
                          <li><span class="code-highlight">width</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?w=200
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?width=200
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">h</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The height of the output image. Primary mode is a positive integer, interpreted as pixel height. The resulting image will be h pixels tall.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Values can range from <span class="code-highlight">2</span> to <span class="code-highlight">8192</span>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div> http://cdn.mee.ma/path/to/image.jpg?h=200 </div>
                        <div> http://cdn.mee.ma/path/to/image.jpg?height=200 </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">max-h</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        The maximum allowed height of the output image.
                        <p>
                          Must be an integer greater than 0.
                          This parameter will only work if <span class="code-highlight">fit=crop</span> is present.
                        </p>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Values can range from <span class="code-highlight">2</span> to <span class="code-highlight">8192</span>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Aliases</div>
                      <div class="param-desc-body">
                        <ul>
                          <li><span class="code-highlight">maxheight</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div> http://cdn.mee.ma/path/to/image.jpg?max-h=500 </div>
                        <div> http://cdn.mee.ma/path/to/image.jpg?maxheight=500 </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">crop</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Crop mode controls how the image is aligned when <span class="code-highlight">fit=crop</span> is set.
                        The <span class="code-highlight">w</span> and <span class="code-highlight">h</span> parameters should also be set,
                        so that the crop behavior is defined within specific image dimensions.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are <span class="code-highlight">top</span>,
                        <span class="code-highlight">bottom</span>, <span class="code-highlight">left</span>,
                        <span class="code-highlight">right</span>, <span class="code-highlight">faces</span>,
                        <span class="code-highlight">focalpoint</span>, <span class="code-highlight">edges</span>,
                        and <span class="code-highlight">entropy</span>.
                        Multiple values can be used by separating them with a comma ,.
                        If no value is explicitly set, the default behavior is to crop from the center of the image.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>http://cdn.mee.ma/path/to/image.jpg?crop=top</div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Stylize</span>
                  </h3>
                  <div>
                    <div>
                      The stylize parameters allow you to apply basic artistic effects to your images.
                    </div>
                  </div>
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">blur</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Applies a Gaussian style blur to your image, smoothing out image noise
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are in the range <span class="code-highlight">0 – 2000</span> 
                        and the default is  <span class="code-highlight">0</span>,
                        which leaves the image unchanged.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?blur=500
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>

                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">greyscale</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Convert to 8-bit greyscale; 256 shades of grey.
                        This is a linear operation.
                        If the input image is in a non-linear colour space such as sRGB,
                        use <span class="code-highlight">gamma()</span> with <span class="code-highlight">greyscale()</span> for the best results.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Possible values are <span class="code-highlight">true|false</span> 
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?greyscale=true
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">nsfw</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Applies a Gaussian style blur to your an image if it's Not Safe for Work(NSFW)
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        Valid values are <span class="code-highlight">true|false</span>
                        or <span class="code-highlight">0|1</span> 
                        or in the range from <span class="code-highlight">0 – 100</span>
                        which is a min confidence,
                        values that are higher than <span class="code-highlight">70</span> 
                        will ensure the image will be blurred.
                        Default value is <span class="code-highlight">false</span>,
                        which leaves the image unchanged.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?nsfw=true
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?nsfw=1
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?nsfw=70
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="flex whitespace-pre-wrap group" id="#">
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
                    ><span>Trim</span>
                  </h3>
                  <div>
                    <div>
                      Add a border, rounded corners, and/or padding to your image.
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="flex whitespace-pre-wrap group" id="#">
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
                      ><span class="code-highlight">trim</span>
                    </h4>
                    <div class="param-sections">
                      <div class="param-desc">Description</div>
                      <div class="param-desc-body">
                        Trims the image to remove a uniform border around the image. This operation must be set for the other trim parameters to work, and it will change the size of the image.
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Possible values</div>
                      <div class="param-desc-body">
                        There are 2 available values: <span class="code-highlight">auto</span> and <span class="code-highlight">color</span>.
                        <ul>
                          <li>
                            When the trim parameter is set to auto,
                            the image is trimmed automatically based on the border color.
                            You can adjust the tolerance using trim-md and trim-sd.
                          </li>
                          <li>
                            When the trim parameter is set to color,
                            the image will trim the away the color specified by trim-color,
                            as long as it is within the trim-tol threshold .
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Sample Usage</div>
                      <div class="param-desc-body">
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?trim=color
                        </div>
                        <div>
                          http://cdn.mee.ma/path/to/image.jpg?trim=auto
                        </div>
                      </div>
                    </div>
                    <div class="param-sections">
                      <div class="param-desc">Link to the playground</div>
                    </div>
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
          <div class="flex-none hidden w-64 pl-8 mr-8 xl:xl:block">
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
