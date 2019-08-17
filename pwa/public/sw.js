var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/sw.js',
  '/manifest.json',
  '/favicon.ico'
];

/* Mulai service worker dan simpan semua cache */ 
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Ambil cache ketiopenka offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
        .catch(function() {
            console.log(e);
            return e.default;
        })
    );
});
