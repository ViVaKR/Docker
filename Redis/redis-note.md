# Redis

## Docker run

```bash
    docker run -v /Users/vivabm/Database/Redis-Data:/usr/local/etc/redis --name viv-redis -p 63790:6379 -d redis
    
    docker exec -it viv-redis sh
    redis-cli
    
    # 127.0.0.1:6379> ping -> PONG
    # 127.0.0.1:6379> select 0 -> OK
    # 127.0.0.1:6379> dbsize -> (integer) 0
    # 127.0.0.1:6379> scan 0
        # 1) "0"
        # (empty array)
    # check this empty database
    # now go to application... 
```
