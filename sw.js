// Outgoings service worker: caches the app so it opens offline.
// It never sees or stores your data — that lives in the app's own on-device storage.
const VERSION = "outgoings-v8";
const ASSETS = [
  "./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "fonts/bricolage-grotesque-latin-500-normal.woff2", "fonts/bricolage-grotesque-latin-700-normal.woff2",
  "fonts/ibm-plex-sans-latin-400-normal.woff2", "fonts/ibm-plex-sans-latin-500-normal.woff2", "fonts/ibm-plex-sans-latin-600-normal.woff2",
  "fonts/ibm-plex-mono-latin-400-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // The page itself: try the network first so updates arrive, but if it hasn't answered in 3 seconds
  // (weak signal) open the cached copy. The download carries on and the newer copy is used next time.
  if (req.mode === "navigate") {
    const net = fetch(req).then(r => { if (r.ok) { const copy = r.clone(); e.waitUntil(caches.open(VERSION).then(c => c.put("index.html", copy))); } return r; });
    e.waitUntil(net.catch(() => {}));
    e.respondWith(new Promise(resolve => {
      let done = false;
      const finish = r => { if (!done && r) { done = true; resolve(r); } };
      const cached = () => caches.match("index.html");
      const timer = setTimeout(() => cached().then(finish), 3000);
      net.then(r => { clearTimeout(timer); finish(r); })
        .catch(() => { clearTimeout(timer); cached().then(h => finish(h || Response.error())); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
