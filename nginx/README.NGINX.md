
# Nginx

```bash

$ docker run -d --restart unless-stopped --name viv-nginx -h web -p 44440:80

$ docker cp viv-nginx:/etc/nginx/nginx.conf /Users/vivakr/Docker/EginX/44440/nginx/
$ docker cp viv-nginx:/etc/nginx/conf.d/default.conf /Users/vivakr/Docker/EginX/44440/nginx/confd/

$ docker run -d --restart unless-stopped --name viv-nginx -h web -p 44440:80 -v /Users/vivakr/Docker/EginX/44440/nginx/confd/:/etc/nginx/conf.d/ -v /Users/vivakr/Docker/EginX/44440/html:/usr/share/nginx/html:ro -v /Users/vivakr/Docker/EginX/44440/nginx/nginx.conf:/etc/nginx/nginx.conf:ro -v /Users/vivakr/Docker/WebData:/usr/share/nginx/html/webdata:ro viv-nginx:latest

```

## Command

```bash
    nginx -t # check error
    nginx -s reload # reload nginx server
```


