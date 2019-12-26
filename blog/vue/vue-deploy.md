# vue deploy

## common way  `publicPath:'/'`

```nginx
#user  nobody;

worker_processes  2;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    gzip on;
    gzip_static on;
    gzip_min_length 1024;
    gzip_buffers 4 16k;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;
    gzip_vary off;
    gzip_disable "MSIE [1-6]\.";

    server {
        listen      80;
        charset utf-8;

        location / {
	        root  /usr/src/app;
          index index.html index.htm;
          try_files $uri $uri/ @rewrites;
        }

        location ~ /api {
            # proxy_pass ....;
        }

        # 配置如果匹配不到资源，将url指向 index.html， 在 vue-router 的 history 模式下使用，就不会显示404
        location @rewrites {
            rewrite ^(.*)$ /index.html last;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```
Dockerfile 
```dockerfile
FROM nginx:1.17.3-alpine
COPY nginx.conf /etc/nginx
COPY /dist /usr/src/app
EXPOSE 80
```

vue.config.js
```js
module.exports = {
  publicPath:'/',
}
```

## subfolder way

### tips (vue-router mode can not be `history`)

vue.config.js
```js
module.exports = {
  publicPath:'/my-app/',
}
```

Dockerfile 
```dockerfile
FROM nginx:1.17.3-alpine
COPY nginx.conf /etc/nginx
COPY /dist /usr/src/app
EXPOSE 80
```

nginx.conf

- nginx.conf (parent)

```nginx
location ~ ^/my-app/ {
    rewrite ^/my-app/(.*)$ /$1 break;
    proxy_pass http://localhost:8080;
}
```

- nginx.conf (docker inner)
```nginx
location / {
    root                 /usr/src/app;
    index                index.html index.htm;
    try_files            $uri $uri/ @rewrites;
}
```


## docker nginx conf merge error

```nginx
location ~ /aihomeApi {
    rewrite ^/aihomeApi/(.*)$ /$1 break;
    proxy_pass https://test.saas.nexhome.cn;
    proxy_pass https://saas.nexhome.cn;
}
```

