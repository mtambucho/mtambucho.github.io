'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "5f3f538fd3542c80db32a9a8823f2620",
"/": "5f3f538fd3542c80db32a9a8823f2620",
"main.dart.js": "5e41a317b04a41ce6714ef147cee32ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "1b0f3913cd2ef028b3eea8f547f24373",
".git/objects/61/98bb24317931d133b6d3d4c3b4f95589d133d7": "f2b1bd617b1b0f807f0c43c9eedd23f4",
".git/objects/59/4fc90d39f4cd73c1f5b3c8a9ebcf643133a30c": "d632875ee700dd5ef7726ced5f0522bb",
".git/objects/0c/b551fb9721a50675bb174b42e9fadccc20f682": "407b9f3b619675dc5cbf6fdb59c26d0a",
".git/objects/66/34a21ce8b5b00fbd9579afcacf57d737bac3ac": "94d86e08067b763fd316b9a961bd2c45",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6f/bc6664132b2a24b6f5eb526467dc4b19df415e": "0ced14fa37f3e357b104c7e74b021e65",
".git/objects/6f/1e6a9c843f5fe80ccb3ccf101992a8bd2612eb": "fb9fe899fdf2e8645fbc265fffd18754",
".git/objects/9e/8a556db5b53813f962cff8ffc01ce6e6c4b3ab": "e10be89d9178f0c8c23fd117b3f11b84",
".git/objects/35/de21019b464b98d092ad5aa35d22d8a61900a9": "5595b825225581ea813feaf51368d16d",
".git/objects/58/cb1c924d24b69c6010a85462406ed4fd8cf5b2": "2e15ddbdb3743800ed60950f799e3b4c",
".git/objects/67/d8f27eef5f3c181478c24c66d5ee3dd5cc005d": "f57ac1970ceae3ca5a8ba2c6305d7eba",
".git/objects/67/0186570c21f1f4e0b506e44394ff192a357c10": "fa6174bebd63fe3022d9402764d8703b",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9d/f901b49cd0dc9c7ba2acfaba077ac3fd317597": "95c58e25c843247ec140abd54bc810fc",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/bb/a2b2490cfe5f6d023b7b095e69b06731e077ff": "4b3d08ac614b0d5e949beb25b0073755",
".git/objects/be/3678ffe7262b3016d5beec016b76a94da6e99f": "ad6af1bba6efb7ab0a4554a2b448a75f",
".git/objects/b3/51e98ad9bb00af8cfa4b1417d712e315da2067": "eb2f679eaafce41c933a810af07d504a",
".git/objects/d1/5b4e4735b0e3a715fefcb46f73f5b53b666ed5": "fa519564603e618ed14fc49a626009a0",
".git/objects/ab/22d993603c4cab5f9c5ca0fd9fb5cc93ba5471": "db2f38e16754ea3409d1c35965c14739",
".git/objects/eb/d2b56662db2562054aca6889dfaea8a9199d75": "077d5b95f3c691320affb78f909415b5",
".git/objects/ee/9b1c3ee08a640c1724385d553821572ca612e3": "94a58923a6db487e4b5d0318c7a272b1",
".git/objects/ee/d797dd795f9bf212f0299644819fc34b2d5497": "64e7e3f98baa077a7d6faf6521261e0e",
".git/objects/ee/86b5b4158d58803e16dc8f778d27e7fe4be7c2": "5f1c8c328224263f4d70952fa9cece27",
".git/objects/c9/6f2c4738afa8ecf7637079efd1377855509eef": "90a6b651e44869e97b07caa77806c71c",
".git/objects/fc/5c2b5276457a363656fce28559c29a34e39bd2": "11b7d7b8dead1682e7588e06840344ea",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/cc3e31cda405602276e28c1506268de0f3fb92": "64a6c1d76e3e91860288e57df4b3219c",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/2724df59bde0f1ae569873c148e860ce3378ac": "cae23d6367ad603930e9256bdb73e75c",
".git/objects/18/70c171c435c5d55d620802aca762e5e2d278e4": "67402d2283a15adb596e0973c65449d1",
".git/objects/18/9aeda83e0d24a2e58ca3274b0df65b7bad39de": "0a18c6639ed9a0a288120adeb0e3f23e",
".git/objects/7d/c3b9173706719a8a2a74f88906fe6b7d150103": "ec0eb3886bcf189887764b2a0d63d3b4",
".git/objects/42/e16e402c7845586cf4954db5e532db92ba8ab6": "e9f1bc50c5d8e454c3dcffd7a8c6256d",
".git/objects/45/b467e420cbc2cc63eac631bab18897b0f1f7a2": "da4589ba7c3b12c43150dbd2a20b69df",
".git/objects/28/ed5da3973e53524e9aed349e89cc0cd2fed88e": "f690b0f8bb4ad40bfb448cfe46f20a4f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/e2f0c5fef4447a55e8e511634c1f0ce9af3cdf": "98f4129dfd5bc30614d0836b67fa3416",
".git/objects/21/7801b5df1ddc2d36b62e6ea36e5134ff54ac44": "228a165314d49b589237e85667504bac",
".git/objects/44/b36d73fb3dac67f225ab8330dd8609da89ed9c": "b9bfe751771cd158f172d0eda22ab6fe",
".git/objects/88/ac1d08d8d8058d4da5314b277df3d7df5d9bc9": "fd1074a97c5133b5c5bd9f540abdafcd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/99ccb3b1a5534f5c1162528dfe2a03ca2d1254": "70a3ea81eb019a5f0797d7e849d7fdc9",
".git/objects/5c/1df1dfb45fa843e435c7ec054a1a3de198fec9": "9f6b38f7a2ca31dad3ad0ae45bd5decf",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/6d560d9f7b051c3438d4dd0c1a3879156f12ba": "3c3932f56439cf02f5742f597528d07d",
".git/objects/53/4c1cba66214578dd6486725152754d3e7294a8": "cdc2d8ea5ca4a1f886bced93f0a4a7fa",
".git/objects/5e/ee51a4586a1103ade514e4b92a73353c4c7ef5": "34281efe461772896b1760598c44c659",
".git/objects/5e/aa0494b20cd5499e296310047d7198b465778b": "11d46e3b3270294d72b1c41b6dc1257a",
".git/objects/5b/160f75d107195945fe7d5e0f605a454ea8d4ab": "bd2338d3a7fbd083e9679af58708c608",
".git/objects/08/1f71488a21d81a4aab9279194fb3360a701b9f": "1fec554b2a84015437b180f2ceec6edb",
".git/objects/08/e0d6fdad8cb8d8b66fa59bfe5eea0b0169350c": "3f8fc9257eece7150aecb207916d67bb",
".git/objects/6d/7a9a56cf0240238711efdcff11db654aeca991": "1ac9df8b1ef7b4112de611d5ca4ca6fd",
".git/objects/99/2f8ddfecaac15a11fcfab451e90baf731de4d6": "719da55623ce57f1ab41b24d23ac24ae",
".git/objects/99/a61a9060c6ac1cc0b0231bc1d59cbe5979aa27": "1d62fc739c45225d1ca2cab7906f0bb2",
".git/objects/52/bdc681dd0e722c81af7306213344624e620429": "31b6dc84338f826097b1e874a742fb18",
".git/objects/55/721980b5f38bc3a22cd03a5d7358349b55f51a": "a476b5150ae6a4884aa4b2512ba907ac",
".git/objects/0f/979673f3dec409dea0850c41098a2697e9c775": "856afe2458c6768c93719bbd51b42620",
".git/objects/0a/4ae164cd0218e81a20b7e023819d6785696f26": "bcd1c280ad5c526a2a8cf955433f54b8",
".git/objects/90/84bb149285675c3aa02fd852a6dceeacf429d9": "683b2bc9c901f0bdff3193810c3f14a0",
".git/objects/d3/244cac28a23348007df50f09429cb6f9da820d": "e8773e513ab22cbc8c1ba3d863d2b93d",
".git/objects/b1/4435c7de06cea13998269ff1e4f2f6b48bcf17": "e2a3881a90461fea38a27756995e0943",
".git/objects/a9/5374c16ace797ffdc3b492267fa221a8a01025": "2aba784f5d6c4d75f56f8c491170caaa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/148e4d970eae1a2ec0050ba4c84e6fc7845972": "ddbe5294109df0ee3a83eee0bb7977e5",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/b9/b577e281961b996e1dc45e9b548a9405bf5866": "20e481b9e094eb6525bf3599c5b41cef",
".git/objects/c3/66b301cffa1cfd189b688535ae708445a2cf9f": "b155c6383b46709e6818ef53d603a9d4",
".git/objects/f7/40a753d901d9da6e565bf3ec8ad02c98a8de4a": "0b19cbd5f2c9778fc5c1288ebc97365c",
".git/objects/e8/e244541515a08bcafe4653d970b2edeca606c5": "d5903aeade7ac37b669d226bf3aa0313",
".git/objects/ff/a41a2cf6e587d5f831b2ca6a5cf7c5aa69fb00": "2adc2c5466c6dfcc5777de9983944266",
".git/objects/c5/0264cc58b2eb95376b47c9e7f661e36d2febfb": "0e4bbcf1ab641e9f0d904d326133b3cf",
".git/objects/e9/a7e125c33dcf88d90a6594e04982772a194e43": "f008493bca0212696b2fc0f5e53cc3af",
".git/objects/e9/726a5009ae027721241c79878c035d6fd8b028": "f5f77a41be3699c590d0231c2488c391",
".git/objects/f1/0a89ca2e4a0f69e0253f4f24d903da9c726792": "5b1dce5e7508060e37dbc6ad133af33f",
".git/objects/cb/4e26e186edab606fcb6aa8a719a66347a3725b": "5b736f11da7cdb7426193c977bd540f5",
".git/objects/ce/a914e42e64f2586623a0e5b7e82d995c7a989c": "79c427390f1f0da7235091917f55fd1c",
".git/objects/e0/ce94d9f4ff6792fa3d153b5e38ac60f08207c7": "617277e9532ea6f8ab54c79a25ed38ca",
".git/objects/48/89399a53967034e031fac714956143518ea88d": "48b29c566c594fbe1d4b704732c65f83",
".git/objects/4a/a48798fc3dfc478a299d194be1a988b33e0a89": "3c21311aaf15b17bb495ee50dbd132be",
".git/objects/23/b43c984b00b311167b84a8afd05888bcf8d4b7": "f3192dfe33d2029b18880c8d2d259cbb",
".git/objects/23/3c3649711c5d4774cc048d83e3f41024b8a195": "10d21c6f4d48c2551201bd20237fb085",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/73aa083545acc096ababf56767fa43dbfe5691": "fadb8ecbf9808dd7dc9bc2631ad28453",
".git/objects/12/8c8d16f947a718cec707f5e0f586d6f51bbf57": "ae23ec0895238e3d85aa423d09049524",
".git/objects/8c/c2968bbaf0f304ce152ae9d8f01e55d230d4ce": "93cb2de3f7606d5512f86d9e8378b4a6",
".git/objects/1c/7e4a55f29ffaf0fb14af40bee1f18f0326af0c": "77456ac8c8eb30a1c0802ce77c00d8b0",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd62f9d2949ca53313016ffbf714edca",
".git/logs/refs/heads/master": "bd62f9d2949ca53313016ffbf714edca",
".git/logs/refs/remotes/origin/master": "da597300c804d88395d710c7d93bff21",
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
".git/refs/heads/master": "e8aa259e02d06fed37314e4930c02a5e",
".git/refs/remotes/origin/master": "e8aa259e02d06fed37314e4930c02a5e",
".git/index": "1109046f81b1d07c65bf0a38ea098f7b",
".git/COMMIT_EDITMSG": "603543b82741baacefa00dd8592c5fe5",
".git/FETCH_HEAD": "3aa2ca949f70e211b0fdf34e791df735",
"assets/AssetManifest.json": "1e64a2c45965312c2f963cdec07b0604",
"assets/NOTICES": "cb62e68e7958bccf39e78f32b85af911",
"assets/FontManifest.json": "3b823b0740895e67b6f8e1361d502a8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/tutti_1.png": "7a17324824186ff1a5ce590e45fe89c5",
"assets/assets/googleplay.png": "d39f30a8910b6f38bd1edb0e68e9ad0d",
"assets/assets/tutti_2.png": "f340b650bd9c00d67bd20f793f1d6f0c",
"assets/assets/tutti_3.png": "a9aa8ab526193645c3b014154fca6ee2",
"assets/assets/gurifamilia_8.png": "fd8d2d4ce4e821671ae53b6b4b80af76",
"assets/assets/tutti_4.png": "efc93f3fd6588a25a41faaeb90d824ad",
"assets/assets/tutti_5.png": "1e213864e3c8b3c5624ac33a304fc746",
"assets/assets/guridocentes_3.png": "91e41050425249d78fb38db9c6ae0ed6",
"assets/assets/guridocentes_2.png": "5931dd9c034316e0185be43e04915d03",
"assets/assets/resitech_4.png": "50a137f57f170fe254440a2602e2170d",
"assets/assets/guridocentes_1.png": "21f10a668472a85ba6d671f9a41c0290",
"assets/assets/resitech_5.png": "8fc087a05159d6d9f441bb7e21589b3a",
"assets/assets/resitech_1.png": "21f2806ac6a2b045682f8edf4164a3b6",
"assets/assets/guridocentes_5.png": "3ad7b0a5f5e7f1c7682d97cd77162465",
"assets/assets/guridocentes_4.png": "1f33571a5c4771e68c6382de0fe0e02b",
"assets/assets/resitech_2.png": "7e5ef84419e721469de7992fb4d9d019",
"assets/assets/guridocentes_6.png": "d257901b1a26187721964e71da981302",
"assets/assets/appstore.png": "c8730d496755cfe4d603f5f3cb950e7c",
"assets/assets/guridocentes_7.png": "f32c869482cff437e00e12c5ac1fc263",
"assets/assets/background.jpg": "c299c92cbfa73148f52685e25ca6229f",
"assets/assets/resitech_3.png": "847a36abfd1b2b92b5bd3d8a3792531f",
"assets/assets/guridocentes_8.png": "3d66a167c8fdf82c00c0140098639c7f",
"assets/assets/phone.png": "7e332d09d1286e7d42be8b401e44fdfb",
"assets/assets/gurifamilia_6.png": "da4667cb3f3d5c4f3d12ea0e12881a5e",
"assets/assets/gurifamilia_7.png": "e2483142ddade19d42ba39b1de81cfef",
"assets/assets/my_picture.png": "ce59d760f476276be595b67b1381cf43",
"assets/assets/gurifamilia_5.png": "56f528ccf7b3448741caf18649f20ce1",
"assets/assets/gurifamilia_4.png": "c3833050c46e6ff2c16c5fc6a0a8eaad",
"assets/assets/fonts/Stolzl-Medium.ttf": "b524de2311d3b5ccef8530f07d0b6a3d",
"assets/assets/fonts/limelight.ttf": "6bfb81ad133135f43d9f6cc2367ef156",
"assets/assets/fonts/Stolzl-Light.ttf": "57d9f3db04293312b978e38d560290bf",
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
