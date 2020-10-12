'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "78a18f304b5c81366c13aa54a46109ce",
"/": "78a18f304b5c81366c13aa54a46109ce",
"main.dart.js": "2d318cd71d60f0446682528ecffb7d15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "1b0f3913cd2ef028b3eea8f547f24373",
".git/objects/61/98bb24317931d133b6d3d4c3b4f95589d133d7": "f2b1bd617b1b0f807f0c43c9eedd23f4",
".git/objects/59/4fc90d39f4cd73c1f5b3c8a9ebcf643133a30c": "d632875ee700dd5ef7726ced5f0522bb",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/9e/8a556db5b53813f962cff8ffc01ce6e6c4b3ab": "e10be89d9178f0c8c23fd117b3f11b84",
".git/objects/35/de21019b464b98d092ad5aa35d22d8a61900a9": "5595b825225581ea813feaf51368d16d",
".git/objects/67/d8f27eef5f3c181478c24c66d5ee3dd5cc005d": "f57ac1970ceae3ca5a8ba2c6305d7eba",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9d/f901b49cd0dc9c7ba2acfaba077ac3fd317597": "95c58e25c843247ec140abd54bc810fc",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/bb/a2b2490cfe5f6d023b7b095e69b06731e077ff": "4b3d08ac614b0d5e949beb25b0073755",
".git/objects/be/3678ffe7262b3016d5beec016b76a94da6e99f": "ad6af1bba6efb7ab0a4554a2b448a75f",
".git/objects/b3/51e98ad9bb00af8cfa4b1417d712e315da2067": "eb2f679eaafce41c933a810af07d504a",
".git/objects/ab/22d993603c4cab5f9c5ca0fd9fb5cc93ba5471": "db2f38e16754ea3409d1c35965c14739",
".git/objects/eb/d2b56662db2562054aca6889dfaea8a9199d75": "077d5b95f3c691320affb78f909415b5",
".git/objects/ee/9b1c3ee08a640c1724385d553821572ca612e3": "94a58923a6db487e4b5d0318c7a272b1",
".git/objects/ee/d797dd795f9bf212f0299644819fc34b2d5497": "64e7e3f98baa077a7d6faf6521261e0e",
".git/objects/ee/86b5b4158d58803e16dc8f778d27e7fe4be7c2": "5f1c8c328224263f4d70952fa9cece27",
".git/objects/c9/6f2c4738afa8ecf7637079efd1377855509eef": "90a6b651e44869e97b07caa77806c71c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/70c171c435c5d55d620802aca762e5e2d278e4": "67402d2283a15adb596e0973c65449d1",
".git/objects/42/e16e402c7845586cf4954db5e532db92ba8ab6": "e9f1bc50c5d8e454c3dcffd7a8c6256d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/7801b5df1ddc2d36b62e6ea36e5134ff54ac44": "228a165314d49b589237e85667504bac",
".git/objects/44/b36d73fb3dac67f225ab8330dd8609da89ed9c": "b9bfe751771cd158f172d0eda22ab6fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/1df1dfb45fa843e435c7ec054a1a3de198fec9": "9f6b38f7a2ca31dad3ad0ae45bd5decf",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/6d560d9f7b051c3438d4dd0c1a3879156f12ba": "3c3932f56439cf02f5742f597528d07d",
".git/objects/5e/ee51a4586a1103ade514e4b92a73353c4c7ef5": "34281efe461772896b1760598c44c659",
".git/objects/5e/aa0494b20cd5499e296310047d7198b465778b": "11d46e3b3270294d72b1c41b6dc1257a",
".git/objects/08/1f71488a21d81a4aab9279194fb3360a701b9f": "1fec554b2a84015437b180f2ceec6edb",
".git/objects/6d/7a9a56cf0240238711efdcff11db654aeca991": "1ac9df8b1ef7b4112de611d5ca4ca6fd",
".git/objects/99/2f8ddfecaac15a11fcfab451e90baf731de4d6": "719da55623ce57f1ab41b24d23ac24ae",
".git/objects/55/721980b5f38bc3a22cd03a5d7358349b55f51a": "a476b5150ae6a4884aa4b2512ba907ac",
".git/objects/0a/4ae164cd0218e81a20b7e023819d6785696f26": "bcd1c280ad5c526a2a8cf955433f54b8",
".git/objects/d3/244cac28a23348007df50f09429cb6f9da820d": "e8773e513ab22cbc8c1ba3d863d2b93d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/148e4d970eae1a2ec0050ba4c84e6fc7845972": "ddbe5294109df0ee3a83eee0bb7977e5",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/c3/66b301cffa1cfd189b688535ae708445a2cf9f": "b155c6383b46709e6818ef53d603a9d4",
".git/objects/f7/40a753d901d9da6e565bf3ec8ad02c98a8de4a": "0b19cbd5f2c9778fc5c1288ebc97365c",
".git/objects/e8/e244541515a08bcafe4653d970b2edeca606c5": "d5903aeade7ac37b669d226bf3aa0313",
".git/objects/ff/a41a2cf6e587d5f831b2ca6a5cf7c5aa69fb00": "2adc2c5466c6dfcc5777de9983944266",
".git/objects/c5/0264cc58b2eb95376b47c9e7f661e36d2febfb": "0e4bbcf1ab641e9f0d904d326133b3cf",
".git/objects/e9/a7e125c33dcf88d90a6594e04982772a194e43": "f008493bca0212696b2fc0f5e53cc3af",
".git/objects/ce/a914e42e64f2586623a0e5b7e82d995c7a989c": "79c427390f1f0da7235091917f55fd1c",
".git/objects/48/89399a53967034e031fac714956143518ea88d": "48b29c566c594fbe1d4b704732c65f83",
".git/objects/4a/a48798fc3dfc478a299d194be1a988b33e0a89": "3c21311aaf15b17bb495ee50dbd132be",
".git/objects/23/3c3649711c5d4774cc048d83e3f41024b8a195": "10d21c6f4d48c2551201bd20237fb085",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/73aa083545acc096ababf56767fa43dbfe5691": "fadb8ecbf9808dd7dc9bc2631ad28453",
".git/objects/8c/c2968bbaf0f304ce152ae9d8f01e55d230d4ce": "93cb2de3f7606d5512f86d9e8378b4a6",
".git/objects/1c/7e4a55f29ffaf0fb14af40bee1f18f0326af0c": "77456ac8c8eb30a1c0802ce77c00d8b0",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d91800621becd80c7b6e2e3ae7ef6868",
".git/logs/refs/heads/master": "d91800621becd80c7b6e2e3ae7ef6868",
".git/logs/refs/remotes/origin/master": "52e0f71205895627a3a6410333bf95b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "678711c130d0354cc4f57be3c33088b7",
".git/refs/remotes/origin/master": "678711c130d0354cc4f57be3c33088b7",
".git/index": "3a3f998039e6a14701534271b054b2ff",
".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
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
