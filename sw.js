const CACHE_NAME = 'glassloft-v1.0';
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
  './cat_icon_shower.png',
  './cat_icon_loft.png'
];

// Install: pre-cache all application assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
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

// Fetch: serve from cache first, fall back to network
self.addEventListener('fetch', event => {
  // Ignore external API counter requests (they have their own offline fallback)
  if (event.request.url.includes('counterapi') || event.request.url.includes('countapi') || event.request.url.includes('wa.me')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Fetch in background to update cache if online
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // Fallback to cached index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});