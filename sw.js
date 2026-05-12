const CACHE = 'water-attack-v2';
const ASSETS = [
  '/jb-tracker/',
  '/jb-tracker/index.html',
  '/jb-tracker/manifest.json',
  '/jb-tracker/icons/icon-192.png',
  '/jb-tracker/icons/icon-512.png',
  '/jb-tracker/icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
