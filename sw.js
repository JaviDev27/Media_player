const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache()); //espera hastq que el precache se complete
});

//cada vez que corre una peticion
// el service worker hara algo
self.addEventListener("fetch", (event) => {
  const request = event.request; //extraer petición
  //solo quiero los get
  if (request.method !== "GET") {
    return;
  }

  //BUSCAR EN CACHE
  event.respondWith(cachedResponse(request));

  //actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/index.js",
    "/mediaPlayer.js",
    "/plugins/AutoPlay.js",
    "/plugins/AutoPause.js",
    "/css/styles.css",
    "/assets/BigBuckBunny_512kb.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request); //verifica si ya tienen copia del cache
  return response || fetch(request); //en el caso de que se solicita un archivo que no esta cacheado
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request); // pedido al servidor
  return cache.put(request, response); //actualizo
}
