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

self.addEventListener('notificationclick', function (event)
{
    //For root applications: just change "'./'" to "'/'"
    //Very important having the last forward slash on "new URL('./', location)..."
    const rootUrl = new URL('./', location).href; 
    event.notification.close();
    event.waitUntil(
        clients.matchAll().then(matchedClients =>
        {
            for (let client of matchedClients)
            {
                if (client.url.indexOf(rootUrl) >= 0)
                {
                    return client.focus();
                }
            }
            alert('yes')
            return clients.openWindow(rootUrl+'/aa').then(function (client) { client.focus(); });
        })
    );

    alert('yes')
    clients.openWindow('https://google.com');
});