# Quickstart

```
$ npm install
$ npm run build
$ npm run start
Listen 9000
```

```
$ curl -v 127.0.0.1:9000

* Rebuilt URL to: 127.0.0.1:9000/
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 9000 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1:9000
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 4
< ETag: W/"4-MfMN28sb+ERldvDmSqTIip8FXjw"
< Date: Fri, 20 Dec 2019 12:11:54 GMT
< Connection: keep-alive
< 
* Connection #0 to host 127.0.0.1 left intact
hoge
```

```
$ curl -v 127.0.0.1:9000/bad

*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 9000 (#0)
> GET /bad HTTP/1.1
> Host: 127.0.0.1:9000
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 4
< ETag: W/"4-BlYONiHJ2LYKKyjnVKWhUyqIg/M"
< Date: Fri, 20 Dec 2019 12:12:54 GMT
< Connection: keep-alive
< 
* Connection #0 to host 127.0.0.1 left intact
huga
```
