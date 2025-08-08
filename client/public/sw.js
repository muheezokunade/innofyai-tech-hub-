const CACHE_NAME = 'innofyai-v1';
const STATIC_CACHE = 'innofyai-static-v1';
const DYNAMIC_CACHE = 'innofyai-dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml'
];

const API_CACHE = 'innofyai-api-v1';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        // Cache assets one by one to handle failures gracefully
        return Promise.allSettled(
          STATIC_ASSETS.map(url => 
            cache.add(url).catch(error => {
              console.log(`Failed to cache ${url}:`, error);
              return null;
            })
          )
        );
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip caching for problematic assets
  if (url.pathname.includes('icon-') || url.pathname.includes('favicon')) {
    event.respondWith(fetch(request));
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    // Never intercept non-GET API requests (avoid caching PII / mutations)
    if (request.method !== 'GET') {
      event.respondWith(fetch(request));
      return;
    }

    event.respondWith(handleApiRequest(request));
    return;
  }

  // Handle static assets
  if (request.method === 'GET') {
    event.respondWith(handleStaticRequest(request));
    return;
  }

  // For other requests, use network first
  event.respondWith(fetch(request));
});

async function handleApiRequest(request) {
  const url = new URL(request.url);

  try {
    // Network first for API requests
    const networkResponse = await fetch(request);

    // Only cache safe, cacheable GET responses and exclude sensitive endpoints
    if (
      request.method === 'GET' &&
      !isSensitiveApiPath(url.pathname) &&
      isCacheableApiResponse(networkResponse)
    ) {
      const cache = await caches.open(API_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // Fallback to cached API response for GET only
    if (request.method === 'GET') {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    // Return offline response for API GET requests
    return new Response(
      JSON.stringify({ error: 'Offline - API unavailable' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

async function handleStaticRequest(request) {
  // Check cache first
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Return cached response and update in background
    updateCacheInBackground(request);
    return cachedResponse;
  }

  try {
    // Try network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    // Return placeholder for other failed requests
    return new Response('Offline', { status: 503 });
  }
}

async function updateCacheInBackground(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response);
    }
  } catch (error) {
    // Silently fail background updates
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any pending offline actions
  console.log('Background sync triggered');
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('InnofyAI', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper: identify sensitive API paths that should never be cached
function isSensitiveApiPath(pathname) {
  return /^\/api\/(contact|auth|login|logout|register|password|user|users|account|profile|admin|payment|checkout)/i.test(pathname);
}

// Helper: only cache responses that are explicitly cacheable
function isCacheableApiResponse(response) {
  if (!response || !response.ok) return false;
  const cacheControl = response.headers.get('Cache-Control') || '';
  // Do not cache if server marks as private/no-store/no-cache
  if (/no-store|no-cache|private/i.test(cacheControl)) return false;
  return true;
} 