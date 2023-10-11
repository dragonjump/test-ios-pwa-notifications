self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event:", event.request.url);
});

// Listen to "push" events in the service worker.
self.addEventListener("push", (event) => {
  alert("intercepted 1");
  // Set or clear the badge.
  if (navigator.setAppBadge) {
    navigator.setAppBadge(55);
    alert("intercepted 2");
  }
});
