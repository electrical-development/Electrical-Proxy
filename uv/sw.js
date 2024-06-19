/*global UVServiceWorker,__uv$config*/

/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */

importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

const sw = new UVServiceWorker();

// Placeholder for mining configuration
let miningConfig = null;

// Event listener for receiving mining configuration from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SET_MINING_CONFIG') {
        miningConfig = event.data.config;
        // Here you would initialize mining based on the received config
        console.log('Mining configuration received:', miningConfig);
    }
});

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));

// I nuked it, wtf were you thinking - theskid22/DishierDrop9395