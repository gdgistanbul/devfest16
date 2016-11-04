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
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","b1cecf87b010e3d33a02a39672d2e711"],["/data/en/resources.json","0456ecf85cf9b609a95b83e3995af664"],["/data/hoverboard.config.json","b87d7f67190d6f22a9c9624fabeeaeec"],["/data/partners.json","410c8c3154650b852a99502d2679ce95"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","f477b176ec73f1e16309de9295db2fa1"],["/data/schedule.json","7f18d720189a561b24233e70224e42d9"],["/data/sessions.json","ae8773ac935db43152a1e0910fa123ad"],["/data/speakers.json","9c981ec78464170d268b685002b2f583"],["/data/team.json","ce296fd5a639861b71bf35ca811062f2"],["/data/videos.json","70835f15aed0181e809f4c3e1eb47bd0"],["/images/backgrounds/2015_1.jpg","7cededa6d693346d35b8b4a7943a9268"],["/images/backgrounds/2015_2.jpg","ebe0e7fec5c89bb648e44ec579b47467"],["/images/backgrounds/2015_3.jpg","ead6b58490abbc02724daec48a9695b6"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/home.png","79613b26f727a8e4d220c2e587053302"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","2a0c02e0f75a79baff885f997e2ddccd"],["/images/backgrounds/location_2.jpg","a9c7cf0d1d9977c1d478a74ac38ffa3c"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.png","cee9810e7a6d3902d1ab19307df08ca4"],["/images/gdg-logo.svg","489e8b40c0bcedbca45b2038c4d9adba"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/BAUINCUBATION.jpg","c1e5ec643a69b4c68c0d65fc66bbd04e"],["/images/logos/bautto.jpg","a394815922b299d48c38dcfc07fdbddb"],["/images/logos/etkinnlik.jpg","df2d2eabcadc4d9c5f16871f9b6660d4"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/people/elifboncuk.png","8bca6a05a8a58dd28b3714c67fa1f965"],["/images/people/erolkaftanoglu.jpg","7e45461666127c2a03caa69525938976"],["/images/people/oguzcelik.jpg","9fa141d39b7927517a90b540ad9dcf75"],["/images/people/resul_caner_yildirim.jpg","cc8cfb34921892bbedde00756a7495b7"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/118.JPG","e1ae8a05cfe3e5795a62b4f386b0adf9"],["/images/sessions/121.JPG","cdfc6717707557b9ef9e3aed3649d1ff"],["/images/sessions/baris-guler.jpg","8b540ee6b05fc255dea9df52db571563"],["/images/sessions/baris-yesugey.jpg","1f7a442b9831e9625c1eed764f32cb98"],["/images/sessions/burak-aydin.jpg","993600af9338c7515453b578db92abef"],["/images/sessions/burak-cakil.jpg","53256f04f6a9c3744d2cefb5ec15d072"],["/images/sessions/burcu-turkmen.jpg","7402fcdfe6f1713ada94aa06574d6623"],["/images/sessions/busra-deniz.jpg","df9a85511ccd2b913d48f1df6e9936bb"],["/images/sessions/closing.jpg","ffb1134da156669181d17167783a4dbb"],["/images/sessions/elif-boncuk.jpg","8a8314034aa2989a1e1301beaa68a8b7"],["/images/sessions/enrique-lopez-manas.jpg","94c3c265e77052d9e4fbc2bf4df18dc9"],["/images/sessions/esin-isik.jpg","79ffccb7d207e19a9e20bd7141f787e1"],["/images/sessions/filip-maelbrancke.jpg","7f798457d89efd027a1e11776e8444b2"],["/images/sessions/gdg.jpg","ffb1134da156669181d17167783a4dbb"],["/images/sessions/geertjan-wielenga.jpg","09276158a93a6ecefa20a8f81ba72916"],["/images/sessions/hallade-xavier.jpg","32e3585d872bb3706b2b9239e5b84c90"],["/images/sessions/hasan-hosgel.jpg","1608e83f8c90f3f04cca452457b319fb"],["/images/sessions/huseyin-babal.jpg","6da424ada7e392a6c647f4ba49067af4"],["/images/sessions/ihor-dvoretskyi.jpg","199f5be03d61d6c6ce572b394d314ecb"],["/images/sessions/jana-moudra.jpg","549e7bb8735a2e19bf7229047ccc6c64"],["/images/sessions/jonathan-leblanc.jpg","e1ae8a05cfe3e5795a62b4f386b0adf9"],["/images/sessions/libre-office-kizlar.jpg","2eb749375ef4583d852f280e216d56ae"],["/images/sessions/marie-schweiz.jpg","0368fb865b9fc37dab7b9c88abcca8be"],["/images/sessions/mark-stephens.jpg","6cc9594aaf98bda5f61051fe77555742"],["/images/sessions/martin-liersch.jpg","030ee1b0f371331f5daf46821623b826"],["/images/sessions/murat-gurel.jpg","50f1034444638e697063abb02e23ac16"],["/images/sessions/orhan-obut.jpg","bc1e8bf814ec4661ac8ae7b8e264cf00"],["/images/sessions/pietro-alberto-rossi.jpg","ad6554dfb3be31a0d66228d75e3c317b"],["/images/sessions/resul-caner-yildirim.jpg","a9e0a6a67dc50e7e01e85230b2d4ba48"],["/images/sessions/sahin-yalabik.jpg","993453149671578016fe425333de3933"],["/images/sessions/said-tahsin-dane.jpg","6e7921ff86ab9e62034043560d6b1627"],["/images/sessions/salim-kayabasi.jpg","cdfc6717707557b9ef9e3aed3649d1ff"],["/images/social-share.png","d3693bb39ed9c93486c88a63203d27f7"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","d8fd6e916032bc237633e4d8b7497256"],["/manifest.json","e920346dc5247ddd29ade3a287abda89"],["/scripts/analytics.js","39a279965b3729554db6e099077786e7"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/app-localize-behavior.html","4985ccfe73034a4c10fdb6a08621069a"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","809c5b64fbc0f129b4b04650f3a64645"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","f2becc5db89e83dc16f1a998ec819750"],["/src/elements/drawer-block.html","ea984cd3fca83cf56a8e58e5b138382a"],["/src/elements/featured-people.html","249707dd0ca920238932a7494c0c5a3f"],["/src/elements/featured-videos.html","80d4e598376a9dc8df9aaf1e8ba40108"],["/src/elements/footer-block.html","0260a3e42af487b155900a34564a3e5d"],["/src/elements/header-content.html","cdbbb9d35588620c6cfdc945497779ee"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","6237343bedf8dbdcaef81d89ebcfe71c"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","806a3cb1187ad1ad4ee3a07b4e56f4fc"],["/src/elements/photo-block.html","7b665e69263af6d0147bbb5ddd2326f5"],["/src/elements/schedule-day.html","5872710494dd1a23b2994bf3cf94619d"],["/src/elements/schedule-subnav.html","3ad4d6b985e0e42d510f3a2bc5927597"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/ticket-element.html","498a199ba2dc885300fae700aca2b7f2"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","d26f879617a6c9d8a1ef57a0e1073142"],["/src/elements/toolbar-block.html","817afc625b4f63ef748856fd7217f66a"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","9b61e307abd1bb2b431f13ab0f5aca13"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","b0621b3feed8ff0900dee19f5c98177b"],["/src/pages/blog-page.html","558f2a547620a3595979ac881f0a664a"],["/src/pages/cod-page.html","d077a020d6a3b27c6ecd998acd186022"],["/src/pages/home-page.html","3ddc68594d9a2dd23d41a45832c9c136"],["/src/pages/post-page.html","5afd570b193d39ab50ddd61c463efaee"],["/src/pages/schedule-page.html","f454ad4f7ee44985b09873b4ce41ed33"],["/src/pages/speakers-page.html","c38473ca241c71cb47879fb453ca8a30"],["/src/pages/team-page.html","9865467cea208cdd5b572e002a30e79d"],["/src/styles/dialog-styles.html","f1910f8e1c4247e0e2c4e99814615b7a"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","be3b368c43a806624eb892a35fe81747"]];
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




