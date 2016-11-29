/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","b1cecf87b010e3d33a02a39672d2e711"],["/data/en/resources.json","0456ecf85cf9b609a95b83e3995af664"],["/data/hoverboard.config.json","42c22cd78fb989b3de0f3f657f4362f0"],["/data/partners.json","410c8c3154650b852a99502d2679ce95"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","f477b176ec73f1e16309de9295db2fa1"],["/data/schedule.json","bd1fed83953727109dbb2d565d36e737"],["/data/sessions.json","5a465e8146e44226d2b810727816c61c"],["/data/speakers.json","538606ebb750047c133844a98ea43a0d"],["/data/team.json","ce296fd5a639861b71bf35ca811062f2"],["/data/videos.json","70835f15aed0181e809f4c3e1eb47bd0"],["/images/backgrounds/2015_1.jpg","7cededa6d693346d35b8b4a7943a9268"],["/images/backgrounds/2015_2.jpg","ebe0e7fec5c89bb648e44ec579b47467"],["/images/backgrounds/2015_3.jpg","ead6b58490abbc02724daec48a9695b6"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/home.png","79613b26f727a8e4d220c2e587053302"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","2a0c02e0f75a79baff885f997e2ddccd"],["/images/backgrounds/location_2.jpg","a9c7cf0d1d9977c1d478a74ac38ffa3c"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.png","cee9810e7a6d3902d1ab19307df08ca4"],["/images/gdg-logo.svg","489e8b40c0bcedbca45b2038c4d9adba"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/Archilogic_logo.png","ceb863dfc0bbb74485215af3796b2a67"],["/images/logos/BAUINCUBATION.jpg","c1e5ec643a69b4c68c0d65fc66bbd04e"],["/images/logos/GDG_Istanbul_logo.svg","2d7012c7ac2a4ceb98464e7e89fa1626"],["/images/logos/IBX_Logo.png","4a0ad7175b468dd49a71e7ad7c7e0c52"],["/images/logos/Pixplicity.png","6272652d27b4d9e17f76b4591a09a560"],["/images/logos/acm_logo.png","8a61ca38852c705da7da146a091c1350"],["/images/logos/amazon.jpg","e221f1494b5c528076d2e398918bf7cd"],["/images/logos/anadolu_uni.png","8bc9cbe5daa3d24d1310c207abb64679"],["/images/logos/appfoundry_logo.png","c7d665257da72fce149617e3f1f74183"],["/images/logos/aselsan_logo.png","665f1c55d5fd4d6683997e0d644864f1"],["/images/logos/bautto.jpg","a394815922b299d48c38dcfc07fdbddb"],["/images/logos/countly_logo_vector.svg","b6b8481fdf0e446ff3c0d3730b2449f9"],["/images/logos/dolap_logo.png","8d4a9d5d5c7c72f6a2ea648a9c7b524e"],["/images/logos/ebay.png","b8fc1ec3c8d2d888b3e77b3622e40f58"],["/images/logos/eteration_logo.png","871e9ea5762a8da82cc3567f1e922614"],["/images/logos/etkinnlik.jpg","df2d2eabcadc4d9c5f16871f9b6660d4"],["/images/logos/garantiteknoloji.png","7d0da381723da9783d68820131c7797e"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.png","f44de062d42c2b9f3c53cb55233b1c47"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/ing_bank_logo.png","3b980b7752a7e7e8a11406e3189317d6"],["/images/logos/innovationbox.png","b282fdf8749d0013801a206857799f51"],["/images/logos/kodcu_logo.png","fa9ef9a37c38d5767829bc6a1c9a2eb3"],["/images/logos/microsoft.png","9f14c20150a003d7ce4de57c298f0fba"],["/images/logos/monitise_logo.svg","e185a9a9c0b48a9fb1dca46b5fe2d88f"],["/images/logos/nix_website_logo.svg","c9d02020a0dad3625507d89988f0eddb"],["/images/logos/novoda.png","14bb04b76af9a4c245b97e63513a4e71"],["/images/logos/primefaces.png","efb30751e060f8df9b9723a45803eb8c"],["/images/logos/vaadin.png","0386f2f02fa77e1a52e4f6e591a9985c"],["/images/people/amahdyabdelaziz.png","98dfe9e7f997ec01922c15c0195543fe"],["/images/people/bahadirakin.jpg","538df749a635635df1189d409eaa01c2"],["/images/people/baris_yesugey.jpg","3a278f12fa521407044f2c7c1a6aac39"],["/images/people/busradeniz.jpg","62e41f28f110940ba3bc87f0627efc49"],["/images/people/cagatay_civici.jpg","299b7df6534755dd417a4ace04f4bf0f"],["/images/people/caneryildirim.jpg","b2a83006e7af2bb817277425d74e28de"],["/images/people/elifboncuk.png","8bca6a05a8a58dd28b3714c67fa1f965"],["/images/people/eliza_camberogiannis.png","4da3e2d0a690ee4a92aed7ffda837d78"],["/images/people/erolkaftanoglu.jpg","7e45461666127c2a03caa69525938976"],["/images/people/esin_isik.png","2f8213cce46aa58f6c6ea612f262ad91"],["/images/people/esma_meral.jpg","d923b656a73b62eb1dd9e616df1f28cf"],["/images/people/filip_maelbrancke.jpg","9af676f9a752d132a6c15fa7aec9b379"],["/images/people/florian.jpg","db06127d007cd82fb5d70224fc4015be"],["/images/people/furkan_ikiz.jpg","a4279aff81dbd9d91df727405c488245"],["/images/people/george_kortsaridis.png","5991178eade4f96489ac341e3ca0106d"],["/images/people/gorkem_cetin.jpg","876dda2e164675fb699e92abec7803ba"],["/images/people/huseyinbabal.jpeg","33dd19050c3160899c1e1e04c9af4cb0"],["/images/people/ibrahim_kivanc.jpg","bdc8485b8ad515311a5d3f6667c7ba87"],["/images/people/lemi_orhan_ergin.jpg","c6f4fe3b91e48dc32694d9b8a55f6054"],["/images/people/muratcan_bur.jpg","dc4e88a02595a9507f44b6f32e528c0e"],["/images/people/mustafa_kurtuldu.png","7e0edc4b824b89d17add12a0b56f3a22"],["/images/people/oguzcelik.jpg","9fa141d39b7927517a90b540ad9dcf75"],["/images/people/oleh_zasadnyy.jpg","6f197bc92b41cbfa37fbe2d1c8ed86af"],["/images/people/rahman_usta.jpg","3f970e91abf866d11cf3289576248880"],["/images/people/resul_caner_yildirim.jpg","cc8cfb34921892bbedde00756a7495b7"],["/images/people/salim_kayabasi.png","aa77ed9d38bbbfb1845c1b358ea85394"],["/images/people/semih_bozdemir.jpg","b27c0182d90224e2bccfa6801335b540"],["/images/people/sercan_yusuf.jpg","fd406e4eb83a80d22ed4c59839ea720f"],["/images/people/simon_vergauwen.jpg","04a5287d9d3f0c9318c65a35181cd64d"],["/images/people/tankut_koray.JPG","3ec3f6ed22c9a6d8a7f85964970a4372"],["/images/people/utku_eren.jpg","497d86b6f1eae57d671adea7f8d2c380"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/118.JPG","e1ae8a05cfe3e5795a62b4f386b0adf9"],["/images/sessions/121.JPG","cdfc6717707557b9ef9e3aed3649d1ff"],["/images/sessions/baris-guler.jpg","8b540ee6b05fc255dea9df52db571563"],["/images/sessions/baris-yesugey.jpg","1f7a442b9831e9625c1eed764f32cb98"],["/images/sessions/burak-aydin.jpg","993600af9338c7515453b578db92abef"],["/images/sessions/burak-cakil.jpg","53256f04f6a9c3744d2cefb5ec15d072"],["/images/sessions/burcu-turkmen.jpg","7402fcdfe6f1713ada94aa06574d6623"],["/images/sessions/busra-deniz.jpg","df9a85511ccd2b913d48f1df6e9936bb"],["/images/sessions/closing.jpg","ffb1134da156669181d17167783a4dbb"],["/images/sessions/elif-boncuk.jpg","8a8314034aa2989a1e1301beaa68a8b7"],["/images/sessions/enrique-lopez-manas.jpg","94c3c265e77052d9e4fbc2bf4df18dc9"],["/images/sessions/esin-isik.jpg","79ffccb7d207e19a9e20bd7141f787e1"],["/images/sessions/filip-maelbrancke.jpg","7f798457d89efd027a1e11776e8444b2"],["/images/sessions/gdg.jpg","ffb1134da156669181d17167783a4dbb"],["/images/sessions/geertjan-wielenga.jpg","09276158a93a6ecefa20a8f81ba72916"],["/images/sessions/hallade-xavier.jpg","32e3585d872bb3706b2b9239e5b84c90"],["/images/sessions/hasan-hosgel.jpg","1608e83f8c90f3f04cca452457b319fb"],["/images/sessions/huseyin-babal.jpg","6da424ada7e392a6c647f4ba49067af4"],["/images/sessions/ihor-dvoretskyi.jpg","199f5be03d61d6c6ce572b394d314ecb"],["/images/sessions/jana-moudra.jpg","549e7bb8735a2e19bf7229047ccc6c64"],["/images/sessions/jonathan-leblanc.jpg","e1ae8a05cfe3e5795a62b4f386b0adf9"],["/images/sessions/libre-office-kizlar.jpg","2eb749375ef4583d852f280e216d56ae"],["/images/sessions/marie-schweiz.jpg","0368fb865b9fc37dab7b9c88abcca8be"],["/images/sessions/mark-stephens.jpg","6cc9594aaf98bda5f61051fe77555742"],["/images/sessions/martin-liersch.jpg","030ee1b0f371331f5daf46821623b826"],["/images/sessions/murat-gurel.jpg","50f1034444638e697063abb02e23ac16"],["/images/sessions/orhan-obut.jpg","bc1e8bf814ec4661ac8ae7b8e264cf00"],["/images/sessions/pietro-alberto-rossi.jpg","ad6554dfb3be31a0d66228d75e3c317b"],["/images/sessions/resul-caner-yildirim.jpg","a9e0a6a67dc50e7e01e85230b2d4ba48"],["/images/sessions/sahin-yalabik.jpg","993453149671578016fe425333de3933"],["/images/sessions/said-tahsin-dane.jpg","6e7921ff86ab9e62034043560d6b1627"],["/images/sessions/salim-kayabasi.jpg","cdfc6717707557b9ef9e3aed3649d1ff"],["/images/social-share.png","d3693bb39ed9c93486c88a63203d27f7"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","6740033b0e0d48448c3597e7e98789c3"],["/manifest.json","e920346dc5247ddd29ade3a287abda89"],["/scripts/analytics.js","39a279965b3729554db6e099077786e7"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/app-localize-behavior.html","4985ccfe73034a4c10fdb6a08621069a"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","700124b63a38e8259386647c701c8d23"],["/src/elements/animatable-content.html","eefc85f4b367f5276169a1a622c3a2d4"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","76ace4083bb4e4ab353dd0ce9e0a3f92"],["/src/elements/drawer-block.html","f31d71a429f5fca27053fadbda3fbfc9"],["/src/elements/featured-people.html","90856919cc72b81a9b49f9e2ee9c3fda"],["/src/elements/featured-videos.html","f3639e97130772c319b12e9c0309aab6"],["/src/elements/footer-block.html","33d693287bf29e3db38a5f09dd29d41a"],["/src/elements/header-content.html","783ea09600ce5efe1c28aaa83f70f600"],["/src/elements/latest-posts.html","1a13eafa0f25540df4b25e9fe76ca61a"],["/src/elements/logos-block.html","a1e5aecb2f31635e84dda54d775248e0"],["/src/elements/mailchimp-subscribe.html","fab801882025b1a9d4ef9847f1a6cd27"],["/src/elements/map-block.html","50a7850bdee27f2526e2655bfc7b4479"],["/src/elements/photo-block.html","49c803d0fb3ffd24354535e57daada26"],["/src/elements/schedule-day.html","497f362f95aa1a757c2183e7be7a63d0"],["/src/elements/schedule-subnav.html","c26588b3ea009e3ae0a9d9cb3c02ae12"],["/src/elements/session-details.html","4ddeabbff0e5f37e91166c7eb7e0afea"],["/src/elements/social-feed.html","bfa43dd1457e18b51d841fadb55d23fa"],["/src/elements/social-post.html","f90f6ed696c2b4e84b4ea8b397feb5eb"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","05b2f7be0678dc734d38abcacf546419"],["/src/elements/ticket-element.html","133e2db0030161b75c6e9e41c7ecb408"],["/src/elements/tickets-block.html","b8abcd513802f7b3fe95eb97893e97a1"],["/src/elements/toast-element.html","47ae65f5c8907528a134d3ed6364d417"],["/src/elements/toolbar-block.html","a2052dbfceafa6d26febbcc7df9d0fc1"],["/src/elements/truncate-marked-text.html","f8b933d872155a7d75dc34ed5d9c951b"],["/src/elements/video-dialog.html","b09a93f3121f8b394f8b5476afbc5e77"],["/src/hoverboard-app.html","fea3e53b455593bd4ea9d96525e62fa8"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","891efc6fd87312315815c9352afb3498"],["/src/pages/blog-page.html","d652896db64b164d5f054681c6518355"],["/src/pages/cod-page.html","3e14ab3d8061307e07ac5b9999f19666"],["/src/pages/home-page.html","3ddc68594d9a2dd23d41a45832c9c136"],["/src/pages/post-page.html","4c76b296c34f41f4871227d0c78c78ce"],["/src/pages/schedule-page.html","7f1be440e286882e849679c51225bfda"],["/src/pages/speakers-page.html","3d3f209de765a23e16079f7a7fcf9968"],["/src/pages/team-page.html","5a81e6134e8296c5b4bdfb4c52fd30a2"],["/src/styles/dialog-styles.html","f4f3f7d8ea725d086a9f70eaea49d548"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","5e9fd71785b723f45e28fef871231e73"],["/src/styles/shared-styles.html","811b3efd9ee645c64128158fc087c0c1"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




