'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f19f4888354d2557151b20c668cc82d9",
"/": "f19f4888354d2557151b20c668cc82d9",
"main.dart.js": "0e67605bb36bab6866143bcd9c79e223",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "6990461d880589b92ce7a2cae969d8ec",
".git/objects/pack/pack-cb3ecf48ab3cdaca5c09e85235e8417bf6a7ab8d.idx": "ff8f6c4975d24847fa47534865603355",
".git/objects/pack/pack-cb3ecf48ab3cdaca5c09e85235e8417bf6a7ab8d.pack": "74bd732bd0a950f872749fd2cddc3397",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "f6359e330b6be5a5b5acac413caa1251",
".git/logs/refs/heads/master": "f6359e330b6be5a5b5acac413caa1251",
".git/logs/refs/remotes/origin/HEAD": "f6359e330b6be5a5b5acac413caa1251",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e36917bad6ff95d0c57326971dbfaaff",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "e24f3a9ff3af55e6371207fc7c804568",
".git/packed-refs": "e297d7dcd3338f5f8e1aeced25ea95fa",
"assets/AssetManifest.json": "afd32f7ffcb419f25bb1f665137b4a6a",
"assets/NOTICES": "cb62e68e7958bccf39e78f32b85af911",
"assets/FontManifest.json": "3b823b0740895e67b6f8e1361d502a8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/tutti_1.png": "980a2fd04e3d7c1841b90cc6f5d48866",
"assets/assets/googleplay.png": "f7c965b2475b99fa827e7a00bffde786",
"assets/assets/tutti_2.png": "2c7f1db2e498489877cc11380ebf92f2",
"assets/assets/tutti_3.png": "6f7fdde5f7457c7eee9cbb1729b6bacd",
"assets/assets/gurifamilia_8.png": "088dd5a957be613a7fb725aba0448c73",
"assets/assets/tutti_4.png": "6fa7efc51c48d17331355247d4bc2183",
"assets/assets/tutti_5.png": "2322b1c57bcb7ce30940fe6b519be11e",
"assets/assets/guridocentes_3.png": "2538a1080147649947c068db0a151bf2",
"assets/assets/guridocentes_2.png": "49363a6b478aff502633723b4399c882",
"assets/assets/resitech_4.png": "a602dbfe9a5550e0f64aac348440208e",
"assets/assets/guridocentes_1.png": "20b32d62934b12e0cac8888ad68b2a4f",
"assets/assets/resitech_5.png": "976cff9de53ad09efebb7e911c876a78",
"assets/assets/resitech_1.png": "02febc49f450b2da87fd7b3f3dca75d7",
"assets/assets/guridocentes_5.png": "b96d13d1d737a61c2f851bbe5b7f35d6",
"assets/assets/guridocentes_4.png": "bba6a26620e6bddc05091a51b9e99c6d",
"assets/assets/resitech_2.png": "a666cccfb388efcab22cb57e91a562ab",
"assets/assets/guridocentes_6.png": "53933af721ecf454ae0bea2783078dea",
"assets/assets/appstore.png": "d69425725728d51ffa1438301d8ee247",
"assets/assets/guridocentes_7.png": "a07e6478c6b4d38a8b75ac2d59515bf3",
"assets/assets/resitech_3.png": "fda6c94c8f1eaf03010d835c071d5b1d",
"assets/assets/guridocentes_8.png": "0c8f3a3332b1c326ab3d52a76440046a",
"assets/assets/phone.png": "7e332d09d1286e7d42be8b401e44fdfb",
"assets/assets/gurifamilia_6.png": "b518e8b16d78215819e7fcfcfc60a4a4",
"assets/assets/gurifamilia_7.png": "e90390b62e152c9c1ce86f3d8096080f",
"assets/assets/my_picture.png": "31a3990daf7b60cc039dbb3d2ec1eaa7",
"assets/assets/gurifamilia_5.png": "af0ac1cb53c34c7c632510db2d03d7a5",
"assets/assets/gurifamilia_4.png": "3520e2ea8f3f9bc708d4cfd6f965acc1",
"assets/assets/fonts/Stolzl-Medium.ttf": "b524de2311d3b5ccef8530f07d0b6a3d",
"assets/assets/fonts/limelight.ttf": "6bfb81ad133135f43d9f6cc2367ef156",
"assets/assets/fonts/Stolzl-Light.ttf": "57d9f3db04293312b978e38d560290bf",
"assets/assets/gurifamilia_1.png": "111395d3650d2d85c38baa89d1d92962",
"assets/assets/gurifamilia_3.png": "395d166840a7d9e43539c483bc8828ae",
"assets/assets/gurifamilia_2.png": "4bca66e29b2f4d1d5fb531ae3a1ea22e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
