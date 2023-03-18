# Docker Note

>> 애플리케이션 구축, 실행 및 배송을 위한 플랫폼
---
> Create Dockerfile (도커파일 생성)

* $ mkdir hello-docker

> Dockerfile

```docker
FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js
```

> Build Dockerfile  
1 $ docker build -t hello-docker:1.0.0 .  
2 $ docker image history **head-image-id-take-3**  
3 $ docker run --name container-naming -p 4680:80 hello-docker:1.0.0  
4 browser -> localhost:4680 -> (hit enter)  
5 $ docker pull my-docker-id/images-name  
---
> MSSQL Docker Run Statement
>> docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=비밀번호' -e 'TZ=Asia/Seoul' -e MSSQL_COLLATION=korean_wansung_ci_as -e MSSQL_TCP_PORT=59173 --name sql1 --hostname mac-sql1 -p 59173:59173 -d --restart unless-topped mcr.microsoft.com/mssql/server:2022-latest
---
> Make a Docker container start automatically on system boot.
>> $ docker update --restart unless-stopped **name**
---
> SQL Server Command Line Tolls for macOS released
>> brew install msodbcsql mssql-tools
>> sqlcmd -S _host,port_ -U SA -p '_password_'
---

### Commands
docker ps -a  
docker rm **container-id**
docker images  
docker rmi **repository**
docker start **container-id**
docker stop **container-id**

### Config
> **"docker ps -a"** output format
> code ~/.docker/config.json  
```json
{
    "psFormat": "table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}"
}
```
---
