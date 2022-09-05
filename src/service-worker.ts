/// <reference lib="webworker" />
// based on https://myrmod.de/how-to-make-a-sveltekit-app-work-offline
import { build, files, prerendered, version } from '$service-worker';
declare const self: ServiceWorkerGlobalScope;

// Update cache names any time any of the cached files change.
const CACHE_NAME = version;

function log(text: any, ...args: any) {
    console.log(`[worker] ${text}`, ...args)
}

function logError(text: any, ...args: any) {
    console.error(`[worker] ${text}`, ...args)
}

// cache
self.addEventListener('install', (event) => {
    log('install')
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(build);
        })
    );
});

// delete outdated caches
self.addEventListener('activate', (event) => {
    log('activate')
    event.waitUntil(
        caches.keys().then((keyList) => {
            return new Promise((resolve) => {
                for (let i = 0; i < keyList.length; i++) {
                    const cacheName = keyList[i]
                    if (cacheName !== CACHE_NAME) {
                        log('removing outdated:', cacheName)
                        caches.delete(keyList[i])
                    }
                }
                resolve(true)
            })
        })
    )
})

// cache respond / fetch and save in cache if no cached
self.addEventListener('fetch', (event) => {
    log('fetch:', event.request.url)
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            if (cacheResponse) {
                log(`fetching from cache: ${event.request.url}`);
                return cacheResponse;
            }
            log(`trying to fetch from server: ${event.request.url}`);
            return fetch(event.request)
                .then(async (fetchResponse): Promise<Response> => {
                    const cache = await caches.open(CACHE_NAME);
                    try {
                        // filter what to add to the cache
                        if (fetchResponse.status !== 206) {
                            cache.put(event.request.url, fetchResponse.clone());
                        }
                    } catch (error) {
                        logError(error);
                    }
                    return fetchResponse;
                })
                .catch(((error) => {
                    logError(`${error}: ${event.request.url}`)
                    return error;
                }));
        }),
    );

});