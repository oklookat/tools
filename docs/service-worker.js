const u = [
  "/tools/_app/immutable/start-fce075de.js",
  "/tools/_app/immutable/components/pages/_layout.svelte-d3fd8a77.js",
  "/tools/_app/immutable/assets/_layout-20cb823a.css",
  "/tools/_app/immutable/components/error.svelte-c50dfe59.js",
  "/tools/_app/immutable/components/pages/_page.svelte-09b08adb.js",
  "/tools/_app/immutable/assets/_page-41a0aa2a.css",
  "/tools/_app/immutable/components/pages/demgen/_page.svelte-9546cd94.js",
  "/tools/_app/immutable/assets/_page-08a705ea.css",
  "/tools/_app/immutable/components/pages/michael/_page.svelte-9b7f6f64.js",
  "/tools/_app/immutable/assets/_page-e577cc68.css",
  "/tools/_app/immutable/components/pages/zapletaker/_page.svelte-ee1d0b81.js",
  "/tools/_app/immutable/assets/_page-6fdadb64.css",
  "/tools/_app/immutable/modules/pages/_layout.ts-38c5afc3.js",
  "/tools/_app/immutable/chunks/singletons-b5b88cd2.js",
  "/tools/_app/immutable/chunks/index-314c1f20.js",
  "/tools/_app/immutable/chunks/navigation-e4ea60f2.js",
  "/tools/_app/immutable/chunks/index-8c5aca60.js",
  "/tools/_app/immutable/chunks/_layout-dc66c3fb.js",
  "/tools/_app/immutable/chunks/button-283a2017.js",
  "/tools/_app/immutable/assets/button-64717cd1.css",
  "/tools/_app/immutable/chunks/about_overlay-da8a3528.js",
  "/tools/_app/immutable/assets/about_overlay-f07cfc3d.css",
  "/tools/_app/immutable/chunks/0-f755438e.js",
  "/tools/_app/immutable/chunks/1-68fd2a43.js",
  "/tools/_app/immutable/chunks/2-cd44fe10.js",
  "/tools/_app/immutable/chunks/3-b59d06e1.js",
  "/tools/_app/immutable/chunks/4-b4523cec.js",
  "/tools/_app/immutable/chunks/5-9214d6f5.js"
], m = "1662412991249", c = m;
function o(s, ...e) {
  console.log(`[worker] ${s}`, ...e);
}
function p(s, ...e) {
  console.error(`[worker] ${s}`, ...e);
}
self.addEventListener("install", (s) => {
  o("install"), s.waitUntil(
    caches.open(c).then((e) => e.addAll(u))
  );
});
self.addEventListener("activate", (s) => {
  o("activate"), s.waitUntil(
    caches.keys().then((e) => new Promise((t) => {
      for (let a = 0; a < e.length; a++) {
        const l = e[a];
        l !== c && (o("removing outdated:", l), caches.delete(e[a]));
      }
      t(!0);
    }))
  );
});
self.addEventListener("fetch", (s) => {
  o("fetch:", s.request.url), s.respondWith(
    caches.match(s.request).then((e) => e ? (o(`fetching from cache: ${s.request.url}`), e) : (o(`trying to fetch from server: ${s.request.url}`), fetch(s.request).then(async (t) => {
      const a = await caches.open(c);
      try {
        t.status !== 206 && a.put(s.request.url, t.clone());
      } catch (l) {
        p(l);
      }
      return t;
    }).catch((t) => (p(`${t}: ${s.request.url}`), t))))
  );
});
