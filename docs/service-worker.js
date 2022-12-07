const p = [
  "/tools/_app/immutable/start-242cdf85.js",
  "/tools/_app/immutable/components/pages/_layout.svelte-087ac1b7.js",
  "/tools/_app/immutable/assets/_layout-26e40cc8.css",
  "/tools/_app/immutable/components/error.svelte-c2653838.js",
  "/tools/_app/immutable/components/pages/_page.svelte-305f06b1.js",
  "/tools/_app/immutable/assets/_page-41a0aa2a.css",
  "/tools/_app/immutable/components/pages/demgen/_page.svelte-35269cd9.js",
  "/tools/_app/immutable/assets/_page-4f855dda.css",
  "/tools/_app/immutable/components/pages/zapletaker/_page.svelte-72ef7cef.js",
  "/tools/_app/immutable/assets/_page-6fdadb64.css",
  "/tools/_app/immutable/modules/pages/_layout.ts-38c5afc3.js",
  "/tools/_app/immutable/chunks/singletons-1c2973e4.js",
  "/tools/_app/immutable/chunks/index-dd855060.js",
  "/tools/_app/immutable/chunks/navigation-1ca11fe8.js",
  "/tools/_app/immutable/chunks/index-8c5aca60.js",
  "/tools/_app/immutable/chunks/_layout-dc66c3fb.js",
  "/tools/_app/immutable/chunks/button-8279e48a.js",
  "/tools/_app/immutable/assets/button-64717cd1.css",
  "/tools/_app/immutable/chunks/0-fa4793e4.js",
  "/tools/_app/immutable/chunks/1-a5747560.js",
  "/tools/_app/immutable/chunks/2-c0bb2311.js",
  "/tools/_app/immutable/chunks/3-4f6af969.js",
  "/tools/_app/immutable/chunks/4-9daeab2d.js"
], n = "1670372429110", c = n;
function o(t, ...s) {
  console.log(`[worker] ${t}`, ...s);
}
function u(t, ...s) {
  console.error(`[worker] ${t}`, ...s);
}
self.addEventListener("install", (t) => {
  o("install"), t.waitUntil(
    caches.open(c).then((s) => s.addAll(p))
  );
});
self.addEventListener("activate", (t) => {
  o("activate"), t.waitUntil(
    caches.keys().then((s) => new Promise((e) => {
      for (let a = 0; a < s.length; a++) {
        const l = s[a];
        l !== c && (o("removing outdated:", l), caches.delete(s[a]));
      }
      e(!0);
    }))
  );
});
self.addEventListener("fetch", (t) => {
  o("fetch:", t.request.url), t.respondWith(
    caches.match(t.request).then((s) => s ? (o(`fetching from cache: ${t.request.url}`), s) : (o(`trying to fetch from server: ${t.request.url}`), fetch(t.request).then(async (e) => {
      const a = await caches.open(c);
      try {
        e.status !== 206 && a.put(t.request.url, e.clone());
      } catch (l) {
        u(l);
      }
      return e;
    }).catch((e) => (u(`${e}: ${t.request.url}`), e))))
  );
});
