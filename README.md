# Docker Note

>> 애플리케이션 구축, 실행 및 배송을 위한 플랫폼
---
> Dockerfile Examples

```docker
FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js
```

```docker
FROM httpd:alpine
COPY . /usr/local/apache2/htdocs/
```

> Build Dockerfile (e.g. http:alpine)  
1. $ docker build -t hello-docker:1.0.0 .  
2. $ docker image history **head-image-id-take-3**  
3. $ docker run --name container-naming -p 4680:80 hello-docker:1.0.0  
4. browser -> localhost:4680 -> (hit enter)  
5. after changed html -> docker stop ps-id & docker rmi image-id  
6. -> goto (no.1) with change version number  
7. $ docker pull my-docker-id/images-name  
---
> (image) MSSQL  
>> $ docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=비밀번호' -e 'TZ=Asia/Seoul' -e MSSQL_COLLATION=korean_wansung_ci_as -e MSSQL_TCP_PORT=59173 --name sql1 --hostname mac-sql1 -p 59173:59173 -d --restart unless-topped mcr.microsoft.com/mssql/server:2022-latest

> Make a Docker container start automatically on system boot.
>> $ docker update --restart unless-stopped **name**

> SQL Server Command Line Tolls for macOS released
>> brew install msodbcsql mssql-tools
>> sqlcmd -S _host,port_ -U SA -p '_password_'
---
> (image) RabbitMQ
>> $ docker run -d --hostname my-rabbit --name some-rabbit -p 13579:15672 rabbitmq:3-management
>> localhost:13579
>> guest, guest
---
> (image) MySql
>> $ docker pull mysql
>> 
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
> Container Rename
>> $ docker rename **CONTAINER** **NEW_NAME**

> Remove Image
>> $ docker rmi **IMAGE ID**

> Tag Docker Image
>> $ docker tag __imageId__ __repoName/imageName:tagName__



