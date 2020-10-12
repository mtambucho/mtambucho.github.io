'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "00acbc2102467db98f71b3886fb6f42a",
"/": "00acbc2102467db98f71b3886fb6f42a",
"main.dart.js": "d577aafea468ac7bb65b5c1daeca3f7a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"assets/AssetManifest.json": "e6819b8b9628759b3b9082a887808e47",
"assets/NOTICES": "c7f723ad09e2c366effb474870015577",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/tutti_1.png": "378261f91a362d06fdf77cf3b50d567c",
"assets/assets/googleplay.png": "d39f30a8910b6f38bd1edb0e68e9ad0d",
"assets/assets/tutti_2.png": "4d2baba4c85d0f7d474d0477b95b3e9c",
"assets/assets/tutti_3.png": "9ced6ef7cf1ef798a1c3d008c3b9dcea",
"assets/assets/gurifamilia_8.png": "fd8d2d4ce4e821671ae53b6b4b80af76",
"assets/assets/tutti_4.png": "856d78ce9fa5cb1b6ade898ec2d36db8",
"assets/assets/tutti_5.png": "e52f7b5aec1951306109689b90f133e9",
"assets/assets/guridocentes_3.png": "1fbe2ef4df46f3cb925241c4967ee9fa",
"assets/assets/guridocentes_2.png": "68402bc8a2e5259390aa2e3cb2f03985",
"assets/assets/resitech_4.png": "50a137f57f170fe254440a2602e2170d",
"assets/assets/guridocentes_1.png": "c8091dee3f2d10ff0224f812a7c7a4e0",
"assets/assets/resitech_5.png": "8fc087a05159d6d9f441bb7e21589b3a",
"assets/assets/resitech_1.png": "8b0160c6608c9d169d8c4f1fa37f7ce8",
"assets/assets/guridocentes_5.png": "3ad7b0a5f5e7f1c7682d97cd77162465",
"assets/assets/guridocentes_4.png": "94cc5c060397756493e28fbb2d11e54f",
"assets/assets/resitech_2.png": "7e5ef84419e721469de7992fb4d9d019",
"assets/assets/guridocentes_6.png": "d257901b1a26187721964e71da981302",
"assets/assets/appstore.png": "c8730d496755cfe4d603f5f3cb950e7c",
"assets/assets/guridocentes_7.png": "65c3ed9117b3919b0bcc6d5912b6dd10",
"assets/assets/background.jpg": "c299c92cbfa73148f52685e25ca6229f",
"assets/assets/resitech_3.png": "847a36abfd1b2b92b5bd3d8a3792531f",
"assets/assets/guridocentes_8.png": "3d66a167c8fdf82c00c0140098639c7f",
"assets/assets/phone.png": "7e332d09d1286e7d42be8b401e44fdfb",
"assets/assets/gurifamilia_6.png": "da4667cb3f3d5c4f3d12ea0e12881a5e",
"assets/assets/gurifamilia_7.png": "e2483142ddade19d42ba39b1de81cfef",
"assets/assets/my_picture.png": "4bac92236df481494e88afd2754f9283",
"assets/assets/gurifamilia_5.png": "56f528ccf7b3448741caf18649f20ce1",
"assets/assets/gurifamilia_4.png": "c3833050c46e6ff2c16c5fc6a0a8eaad",
"assets/assets/gurifamilia_1.png": "d18b21ea6a7b19726df47af9274950eb",
"assets/assets/gurifamilia_3.png": "a082ff59d6807b544faae50ce2c54df4",
"assets/assets/gurifamilia_2.png": "ec96125fcfd05cfe851a12cfb28e537c"
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
