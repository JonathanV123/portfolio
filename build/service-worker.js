"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","628b5b34b91da41dd6b9b04de72af113"],["/static/css/main.02e9e15c.css","cb58a76b22ff804748087df807a5f961"],["/static/js/main.ab305fee.js","71bc223a57e0d22f828da490135eed04"],["/static/media/Jonathan_Voxland_Resume.a8293ee4.pdf","a8293ee45e4807674f92633be115c8c7"],["/static/media/ajaxSplash.8f8ffec1.png","8f8ffec1860ac838988b24df951fc90f"],["/static/media/backdrop.2562fae4.png","2562fae4cde8198497f9be2c91d5e21a"],["/static/media/bottomBrushStroke.155321a9.png","155321a9bcf2ffa290d5fd81bd926957"],["/static/media/brushStrokeTop.18ed9d4b.png","18ed9d4b97f9dd484f3bf3cfceeef8da"],["/static/media/calcSplash.92efc105.png","92efc105ad5f4dd0878ccd77aa6c9ba5"],["/static/media/congruent_pentagon.d52fda2b.png","d52fda2bf468f3e5aef4d303c74d800c"],["/static/media/darkBG.13eb467a.png","13eb467a99992d6744b5096899306056"],["/static/media/memMatchSplash.1a560b4e.png","1a560b4ed73f45c47b525824b33a074d"],["/static/media/movieAppSplash.19257e09.png","19257e095e55b00e2a30363cefd379a3"],["/static/media/nodeSplashTiny.55616f23.png","55616f23c31a13b47a223cff2d04591a"],["/static/media/patternPaintSplotch.480af274.png","480af274e5521db4317835c7fc0767bf"],["/static/media/patternSplash.e549df76.png","e549df76189b2c6347087cd4c2063c16"],["/static/media/profilePic.95fa8648.jpg","95fa86488e98b1d1fe948a2868aced91"],["/static/media/toDoAppSplash.515bb435.png","515bb435e663b17b0ec6ddfdf1e421b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});