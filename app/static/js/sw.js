self.addEventListener('install', function(event) {
	console.log('installing...');
	event.waitUntil(
		caches.open('test').then(function(cache) {
			cache.addAll([
				"/",
				"/static/img/sw.jpg"
			]);
			console.log('cached')
		})
	)
});

self.addEventListener('fetch', function(event) {
	console.log('Caught a fetch');
	event.respondWith(
		caches.open('test').then(function(cache) {
			return cache.match(event.request);
		})
	)
});