# BIND9

```bash

    docker-compose up
    docker network create --name viv-net --subnet 172.24.0.0/16

docker run -d --name viv-bind9 -e TZ=Asia/Seoul -v ./bind/config:/etc/bind/named.conf -v ./cached/data:/var/cache/bind  -v ./resource/records:/var/lib/bind -p 30053:53 -p 30053:53/udp ubuntu/bind9

# docker run -d --name bind9-container -e TZ=UTC -p 30053:53 -p 30053:53/udp ubuntu/bind9:9.18-22.04_beta

docker run -d --name viv-bind9 -e TZ=Asia/Seoul -p 53:53 -p 53:53/udp ubuntu/bind9:latest

-v ./bind/config:/etc/bind/named.conf
-v ./cached/data:/var/cache/bind
-v ./resource/records:/var/lib/bind


tar -czf bind_backup_$(date +%F).tar.gz bind/
```
********
