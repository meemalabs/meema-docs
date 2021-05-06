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
                  Terms &amp; Conditions
                </h1>
              </div>
              <p class="mt-1 text-lg text-gray-500">
                Share the love &amp; earn money by telling your friends &amp;
                colleagues about Meema!
              </p>
            </div>
            <div>
              <div class="prose">
                <p>
                  By signing up for the Meema (“Program”) you are agreeing to be
                  bound by the following terms and conditions (“Terms of
                  Service”).
                </p>
                <ul class="ml-8 list-disc">
                  <li>No self-referrals</li>
                  <li>
                    No coupon, deal, loyalty, cash-back, rewards or virtual mall
                    websites
                  </li>
                  <li>
                    No infringing on our or any anyone else’s intellectual
                    property, publicity, privacy or other rights
                  </li>
                  <li>No cookie stuffing or altering</li>
                  <li>No adware, spyware, loyalty-ware or any such software</li>
                  <li>
                    All referring links must be verifiable/traceable (pretty
                    links permitted)
                  </li>
                  <li>No violate any laws, rules or regulations</li>
                  <li>
                    Do not include our affiliate links or program in any content
                    that is defamatory, obscene, threatening, harassing, harmful
                    to minors, or contains nudity, pornography or sexually
                    explicit materials
                  </li>
                </ul>

                <p>
                  Paid Search Policy: Affiliates MAY NOT bid on company name,
                  product name +, or misspelled keywords ("Meema") for the
                  purpose of PPC on the search engines (Google, Yahoo, MSN, Ask,
                  etc).
                </p>

                <p>
                  <strong
                    >When linking to our website/your affiliate link:</strong
                  >
                </p>

                <ul class="ml-8 list-disc">
                  <li>
                    Your website can not in any way copy, resemble, or mirror
                    the look and feel of our website or brand. You will also not
                    use any means to create the impression that your website is
                    our website or any part of our website including, without
                    limitation, framing of our Website in any manner.
                  </li>
                  <li>
                    You may not engage in cookie stuffing or include pop-ups,
                    false or misleading links on your website. In addition,
                    wherever possible, you will not attempt to mask the
                    referring url information (i.e. the page from where the
                    click is originating). All referring links must be
                    verifiable/traceable (pretty links permitted).
                  </li>
                  <li>
                    Using redirects to bounce a click off of a domain from which
                    the click did not originate in order to give the appearance
                    that it came from that domain is prohibited.
                  </li>
                  <li>
                    You may not make use of any of our company or product terms
                    as part of the domain or sub-domain for your website. In
                    other words, the following domain names are prohibited in
                    use with the Program meema.website.com,
                    www.meema-discount.com
                  </li>
                  <li>
                    Using of any of our terms ("Meema") as part of your social
                    media handle is strictly prohibited, i.e.
                    facebook.com/Meema-coupons
                  </li>
                </ul>

                <p>
                  <strong
                    >If you intend to promote our affiliate program via email
                    campaigns or newsletters, you must adhere to the following:
                  </strong>
                </p>

                <ul class="ml-8 list-disc">
                  <li>
                    Abide by the CAN-SPAM Act of 2003 (Public Law No. 108-187)
                    with respect to our affiliate program.
                  </li>
                  <li>
                    Email must be sent on your behalf and must not imply that
                    the email is being sent on behalf of Meema.
                  </li>
                </ul>

                <p>
                  We reserve the right to reverse affiliate payouts due to order
                  cancellations, duplicate tracking, returns, disputed charges,
                  and program violations as outlined in these terms and
                  conditions.
                </p>
              </div>
            </div>
            <hr class="mt-10 mb-4 border-gray-200" />
            <div class="flex font-medium leading-6">
              <a
                class="flex ml-auto text-right transition-colors duration-200 hover:text-gray-900"
                href="https://github.com/tailwindlabs/tailwindcss/releases"
                >Terms &amp; Conditions<span aria-hidden="true" class="ml-2"
                  >→</span
                ></a
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
