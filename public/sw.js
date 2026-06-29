// public/sw.js
// Service Worker — Dulygo
// Strategy:
//   - index.html  → Network first (luôn lấy version mới nhất)
//   - /assets/*   → Cache first  (Vite đã hash tên file, tự cache bust)
//   - mascot.png  → Cache first
//   - skipWaiting → Kích hoạt SW mới NGAY khi cài xong (không chờ tab đóng)
//   - clients.claim → SW mới kiểm soát tất cả tab ngay lập tức

const CACHE_VERSION = 'dulygo-v3';
const STATIC_ASSETS = [
  '/dulygo/',
  '/dulygo/index.html',
  '/dulygo/mascot.png',
  '/dulygo/manifest.json',
];

// ── INSTALL ────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  // Kích hoạt SW mới ngay, không chờ tab cũ đóng
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.addAll(STATIC_ASSETS)
    )
  );
});

// ── ACTIVATE ───────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Xóa cache cũ (version cũ hơn)
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => {
      // Kiểm soát tất cả tab ngay lập tức (không cần reload)
      return self.clients.claim();
    })
  );
});

// ── FETCH ──────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Bỏ qua request không phải GET
  if (request.method !== 'GET') return;

  // index.html — Network first (để app luôn mới nhất khi mở lại)
  if (
    request.mode === 'navigate' ||
    url.pathname === '/dulygo/' ||
    url.pathname === '/dulygo/index.html'
  ) {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  // /assets/* — Cache first (Vite hash tên file nên cache an toàn)
  if (url.pathname.startsWith('/dulygo/assets/')) {
    event.respondWith(cacheFirstWithNetwork(request));
    return;
  }

  // Các file khác (mascot, manifest...) — Cache first
  event.respondWith(cacheFirstWithNetwork(request));
});

// ── Strategies ─────────────────────────────────────────────────

// Network first: thử mạng, fail thì dùng cache
async function networkFirstWithCache(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Offline — vui lòng kết nối mạng', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

// Cache first: dùng cache, không có thì lấy từ mạng
async function cacheFirstWithNetwork(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 404 });
  }
}
