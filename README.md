# Docker Note

- Docker File (도커파일)
  - 컨테이너 환경 구성을 위한 파일  
  - 패키지, 소스코드, 명령어, 환경변수 설정등 목적  
  - 순차적인 명령어 실행의 쉘 스크립와 유사한 구조  
  - 일반적으로 도커파일명은 : **Docker** 로 함  
  - 사용자가 편하게 도커파일을 제작할 수 있는 장점  
  - 유지보수가 쉽고 버전 관리가 용이함
  - 이미지 + 환경추가 -> 최종이미지 생성 목적


```docker
    FROM [이미지] : 기본 이미지 설정  
    RUN ["명령어", "인자1", "인자2"] : 빌드시 명령어 지정  
    ENTRYPOINT ["명령어", "인자1", "인자2] : 컨테이너에서 항상 실행될 명령어설정, 종료시 컨테이너도 종료  
    CMD ["명령어", "인자1", "인자2"] : 컨테이너 실행시 최초 일회 실행될 명령어 설정  
    EXPOSE [Port]/[Protocol(option)] : 서비스할 포트 지정   
    ADD [호스트 파일] [저장경로]   
    WORKDIR [경로] : 명령어가 실행될 작업 디렉토를 지정  
    ENV [키] [값] : 환경변수 설정  >>> LABEL [키]=[값] : key value lebel, meta data  
    USR [UID]:[GID] : 사용자 지정   
    ARG [Key]=[Value] : docker build argumene option 을 넘겨줄 환경값 지정  
```

## Build

```bash
    $ docker build -t hello-docker:1.0.0 .  
    $ docker image history **head-image-id-take-3**  
    $ docker run --name container-naming -p 4680:80 hello-docker:1.0.0  
    # browser -> localhost:4680 -> (hit enter)  
    # after changed html -> docker stop ps-id & docker rmi image-id  
    #goto (no.1) with change version number  
    $ docker pull my-docker-id/images-name  
```  

## Volume

```bash
    docker volume ls
    dokcer inspect $volumeName
    
    docker ps
    docker inspect --format="{{.Mounts}}" $containerID
```

- Docker Compose (도커 컴포즈)  
  - 다수의 컨테이너의 통합 하여 어플리케이션을 구성할수 있음
  - 많은 컨테이너의 복잡도를 단순화 시킴
  - 세부적인 서비스 설정이 가능
  - **docker-compose.yaml** 파일을 사용함
  - 복수의 이미지 + 복수의 컨테이너 -> 프로젝트 구성 및 배포

### 작성

- version : 버전기록  
- service : 생성할 컨테이너 이름정의 및 하위옵션 설정  
- image : 컨테이너 생성에 사용할 이미지 지정  
- build : 이미지를 빌드  
- environment : 컨테이너 환경변수 설정  
- restart : 자동으로 컨테이너를 실행할 지 여부 설정  
- volumes : 컨테이너 데이터를 로컬 디렉토리로 지정할 경로 설정  
- networks : 사용할 네트워크 지정  
- ports : 포트지정  
- depends_on : 컨테이너간의 의존관계 설정    
- networks : 도커 컴포즈를 이용해 생성할 네트워크의 하위 옵션 설정   
- driver : 네트워크 타입 설정   
- ipam : subnet, gateway 정보 설정   
- docker-compose up -d**

## direct -> $ docker run  

## (image) MSSQL  
>
> $ docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=비밀번호' -e 'TZ=Asia/Seoul' -e MSSQL_COLLATION=korean_wansung_ci_as -e MSSQL_TCP_PORT=포트 --name sql1 --hostname mac-sql1 -p 포트:포트 -d --restart unless-topped mcr.microsoft.com/mssql/server:2022-latest

> Make a Docker container start automatically on system boot.
>> $ docker update --restart unless-stopped **name**

> SQL Server Command Line Tolls for macOS released
>> brew install msodbcsql mssql-tools
>> sqlcmd -S _host,port_ -U SA -p '_password_'
---

## (image) Oracle

```bash
docker run -d --name viv-oracle -p 포트:포트 -e ORACLE_PASSWORD='비밀번호' -v /Users/${whoami}/Database/Oracle-Data:/opt/oracle/oradata viv-oracle
```

## Commands

```bash
    docker ps -a # all container
    docker ps -s # service container
    docker rm [container-id] # remove container
    
    docker images   # image list
    docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
    
    docker start [container-id]  
    docker stop [container-id]  
    docker rmi [repository]  
```

## Config

```bash
 docker ps -a output format
 code ~/.docker/config.json  
```
- 컨테이너 정보 단축하기 (docker ps result format)

```json
{
    "psFormat": "table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}"
}
```

> Container Rename

```bash
    $ docker rename [CONTAINER] [NEW_NAME]
    #Remove Image
    $ docker rmi [IMAGE_ID]
    # Tag Docker Image
    $ docker tag [imageId] [repoName/imageName:tagName]
```

## 도커이미지

image -> run  
dontainer commit -> image (backup)  
Dockerfile  build -> image (create)

## commit/build : 이미지가 생성됨

```bash
    docker commit [container] [name] # 이미지 생성
    docker build -t [name] # 이미지 생성
```
