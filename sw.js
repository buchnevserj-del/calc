const CACHE_NAME = 'glassloft-v1.4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './favicon.svg',
  './favicon.png',
  './icon-192.png',
  './icon-512.png',
  './html2canvas.min.js',
  './jspdf.umd.min.js',
  './logo.png',
  './kp_benefits.png',
  './kp_photo_1.jpg',
  './kp_photo_2.jpg',
  './kp_photo_3.jpg',
  './kp_icon_address.png',
  './kp_icon_email.png',
  './kp_icon_tel.png',
  './kp_watermark.png',
  './cat_icon_stairs.png',
  './cat_icon_balcony.png',
  './cat_icon_shower.png',
  './cat_icon_loft.png'
];

// Install: pre-cache all application assets immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate: clean up all old caches immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first for all app files, cache fallback when offline
self.addEventListener('fetch', event => {
  // Ignore external API counter requests (they have their own offline fallback)
  if (event.request.url.includes('counterapi') || event.request.url.includes('countapi') || event.request.url.includes('wa.me')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache when offline
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
        });
      })
  );
});