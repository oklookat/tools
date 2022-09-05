const u = [
  "/tools/_app/immutable/start-6e3ce26c.js",
  "/tools/_app/immutable/components/pages/_layout.svelte-90dfe48d.js",
  "/tools/_app/immutable/assets/_layout-20cb823a.css",
  "/tools/_app/immutable/components/error.svelte-f3e348e8.js",
  "/tools/_app/immutable/components/pages/_page.svelte-009b25db.js",
  "/tools/_app/immutable/assets/_page-41a0aa2a.css",
  "/tools/_app/immutable/components/pages/demgen/_page.svelte-9546cd94.js",
  "/tools/_app/immutable/assets/_page-08a705ea.css",
  "/tools/_app/immutable/components/pages/michael/_page.svelte-dc3d5a69.js",
  "/tools/_app/immutable/assets/_page-e577cc68.css",
  "/tools/_app/immutable/components/pages/zapletaker/_page.svelte-ee1d0b81.js",
  "/tools/_app/immutable/assets/_page-6fdadb64.css",
  "/tools/_app/immutable/modules/pages/_layout.ts-38c5afc3.js",
  "/tools/_app/immutable/chunks/singletons-fe7240df.js",
  "/tools/_app/immutable/chunks/index-314c1f20.js",
  "/tools/_app/immutable/chunks/navigation-bc88fec5.js",
  "/tools/_app/immutable/chunks/index-8c5aca60.js",
  "/tools/_app/immutable/chunks/_layout-dc66c3fb.js",
  "/tools/_app/immutable/chunks/button-283a2017.js",
  "/tools/_app/immutable/assets/button-64717cd1.css",
  "/tools/_app/immutable/chunks/about_overlay-da8a3528.js",
  "/tools/_app/immutable/assets/about_overlay-f07cfc3d.css",
  "/tools/_app/immutable/chunks/0-984039a4.js",
  "/tools/_app/immutable/chunks/1-d9d115a8.js",
  "/tools/_app/immutable/chunks/2-352d908b.js",
  "/tools/_app/immutable/chunks/3-b59d06e1.js",
  "/tools/_app/immutable/chunks/4-04b99569.js",
  "/tools/_app/immutable/chunks/5-9214d6f5.js"
], m = "1662413457779", c = m;
function o(s, ...t) {
  console.log(`[worker] ${s}`, ...t);
}
function p(s, ...t) {
  console.error(`[worker] ${s}`, ...t);
}
self.addEventListener("install", (s) => {
  o("install"), s.waitUntil(
    caches.open(c).then((t) => t.addAll(u))
  );
});
self.addEventListener("activate", (s) => {
  o("activate"), s.waitUntil(
    caches.keys().then((t) => new Promise((e) => {
      for (let a = 0; a < t.length; a++) {
        const l = t[a];
        l !== c && (o("removing outdated:", l), caches.delete(t[a]));
      }
      e(!0);
    }))
  );
});
self.addEventListener("fetch", (s) => {
  o("fetch:", s.request.url), s.respondWith(
    caches.match(s.request).then((t) => t ? (o(`fetching from cache: ${s.request.url}`), t) : (o(`trying to fetch from server: ${s.request.url}`), fetch(s.request).then(async (e) => {
      const a = await caches.open(c);
      try {
        e.status !== 206 && a.put(s.request.url, e.clone());
      } catch (l) {
        p(l);
      }
      return e;
    }).catch((e) => (p(`${e}: ${s.request.url}`), e))))
  );
});
