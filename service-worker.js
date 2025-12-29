/* =====================================================
   EduCore Service Worker
   ===================================================== */

const CACHE_NAME = "educore-cache-v1";

/* الملفات الأساسية */
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/scholarships.html",
  "/scholarship.html",
  "/style.css",
  "/main.js",
  "/data.js",
  "/manifest.json"
];

/* =====================================================
   Install
   ===================================================== */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("📦 Caching static assets");
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

/* =====================================================
   Activate
   ===================================================== */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("🧹 Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/* =====================================================
   Fetch
   ===================================================== */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then(fetchResponse => {
          /* حفظ النسخة الجديدة */
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        })
        .catch(() => {
          /* fallback لو Offline */
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }
        });
    })
  );
});

/* =====================================================
   Background Sync (مستقبلي)
   ===================================================== */
self.addEventListener("sync", event => {
  if (event.tag === "sync-form") {
    console.log("🔄 Background sync triggered");
  }
});

/* =====================================================
   Push Notifications (مستقبلي)
   ===================================================== */
self.addEventListener("push", event => {
  const data = event.data ? event.data.text() : "إشعار جديد من EduCore";

  event.waitUntil(
    self.registration.showNotification("EduCore", {
      body: data,
      icon: "/assets/icon-192.png",
      badge: "/assets/icon-192.png"
    })
  );
});

