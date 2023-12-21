# Docker

## 컨테이너 (Container)

* 실행가능한 이미지 인스턴스
* 인스턴스에는 고유한 파일시스템, 메모리 및 네트워크 인터페이스가 있음
* Application

## 레지스트리

* 이미지 리포지토리 컬렉션
* 레지스트리의 이미지에서 바로 컨테이너를 생성할 수 있음.
* Docker Hub : 공용 레지스트리
* MCR (Microsoft Container Registry) : 마이크로소프트가 제공하는 컨테이너 이미지 공식 소스.
  * [Go To MCR](https://hub.docker.com/_/microsoft-dotnet/)

## Dockerfile : 도커 이미지 정의 명세

* 이미지를 생성하는 명령 세트를 정의 하는 파일.
* 이미지를 다시 빌드할 때는 변경된 계층만 다시 빌드됨.
* 컨테이너 환경 구성을 위한 파일
* 패키지, 소스코드, 명령어, 환경변수 설정등 목적
* 순차적인 명령어 실행의 쉘 스크립와 유사한 구조
* 일반적으로 도커파일명은 : **Docker** 로 함
* 사용자가 편하게 도커파일을 제작할 수 있는 장점
* 유지보수가 쉽고 버전 관리가 용이함
* 이미지 + 환경추가 -> 최종이미지 생성 목적

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

## Docker Instructions

`FROM` "FROM"을 사용하여 시작하려는 기본 이미지를 지정합니다.  
`RUN` RUN은 이미지 빌드 프로세스 중에 명령을 실행하는 데 사용됩니다.  
`ENV` 이미지 내에서 환경 변수를 설정하여 빌드 프로세스 중과 컨테이너가 실행되는 동안 모두 액세스할 수 있도록 합니다. 빌드 시간 변수만 정의해야 하는 경우 ARG 명령을 활용해야 합니다.  
`COPY` COPY 명령은 호스트 시스템에서 Docker 이미지로 파일 또는 폴더를 복사하는 데 사용됩니다.  
`EXPOSE` Docker 이미지가 런타임에 수신 대기할 포트를 지정하는 데 사용됩니다.  
`ADD` COPY 명령의 고급 형식입니다. 호스트 시스템에서 docker 이미지로 파일을 복사할 수 있습니다. URL에서 Docker 이미지의 대상으로 파일을 복사하는 데 사용할 수도 있습니다. 실제로 이를 사용하여 호스트 시스템에서 tarball을 복사하고 도커 이미지의 대상으로 자동으로 추출할 수 있습니다.  
`WORKDIR` 현재 작업 디렉터리를 설정하는 데 사용됩니다.  
`VOLUME` Docker 컨테이너에 볼륨을 생성하거나 탑재하는 데 사용됩니다  
`USER` 컨테이너를 실행할 때 사용자 이름과 UID를 설정합니다. 이 지시어를 사용하여 컨테이너의 루트가 아닌 사용자를 설정할 수 있습니다.  
`LABEL` 도커 이미지의 메타데이터 정보 지정  
`ARG` 빌드 타임에 ARG	키-값 쌍 변수를 정의합니다. 그러나 이러한 ARG 변수는 컨테이너가 실행 중일 때 액세스할 수 없습니다. 실행 중인 컨테이너 내에서 변수를 유지 관리하려면 대신 ENV 명령을 사용합니다.  
`CMD` 실행 중인 컨테이너 내에서 명령을 실행합니다. 하나의 CMD 명령만 허용되며, 여러 명령이 있는 경우 마지막 명령어만 적용됩니다.  
`ENTRYPOINT` Docker 컨테이너가 시작될 때 실행할 명령을 지정합니다. ENTRYPOINT를 지정하지 않으면 기본값은 "/bin/sh -c"입니다.  


## The Base Image

`FROM node:18-alpine`


## Copying source code

```bash
  FROM node;18-alpine
  WORKDIR /user/src/app

```

## Volume

```bash
    docker volume ls
    dokcer inspect $volumeName
    docker ps
    docker inspect --format="{{.Mounts}}" $containerID
```

* Docker Compose (도커 컴포즈)
  * 다수의 컨테이너의 통합 하여 어플리케이션을 구성할수 있음
  * 많은 컨테이너의 복잡도를 단순화 시킴
  * 세부적인 서비스 설정이 가능
  * **docker-compose.yaml** 파일을 사용함
  * 복수의 이미지 + 복수의 컨테이너 -> 프로젝트 구성 및 배포

### 작성

* version : 버전기록
* service : 생성할 컨테이너 이름정의 및 하위옵션 설정
* image : 컨테이너 생성에 사용할 이미지 지정
* build : 이미지를 빌드
* environment : 컨테이너 환경변수 설정
* restart : 자동으로 컨테이너를 실행할 지 여부 설정
* volumes : 컨테이너 데이터를 로컬 디렉토리로 지정할 경로 설정
* networks : 사용할 네트워크 지정
* ports : 포트지정
* depends_on : 컨테이너간의 의존관계 설정
* networks : 도커 컴포즈를 이용해 생성할 네트워크의 하위 옵션 설정
* driver : 네트워크 타입 설정
* ipam : subnet, gateway 정보 설정
* docker-compose up -d\*\*

## Dockerignore

- name : `.dockerignore`
- contents ex:
  .git  
  .gitignore  
  npm-debug.log
  Dockerfile*
  docker-compose*
  README.md
  LICENSE
  .vscode

## Oracle Docker

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

* 컨테이너 정보 단축하기 (docker ps result format)

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
Dockerfile build -> image (create)

## commit/build : 이미지가 생성됨

```bash
    docker commit [container] [name] # 이미지 생성
    docker build -t 이미지명[:태그] Dockerfile_Path # 이미지 생성
```

## 컨테이너 배포

1. 로그인 `$ docker login`
2. 이미지태그 설정 :  `docker tag mcr.microsoft.com/mssql/server:2022-latest vivabm/mssql:v1 My Docker ID`
3. 태그 형식 : `아이디/이미지명:태그` , 슬레시는 하나만 넣어야 함
4. 배포 : `Docker push vivabm/mssql:v1`

## Docker Registry

* Registry : 컨테이너 이미지를 저장하는 저장소
  * Docker Hub : hub.docker.com
  * Private Registry : 사내의 컨테이너 저장소

## Restore

```bash
  docker cp ./db.bak viv-sql:/home
  docker exec -u 0 -it viv-sql bash
  chmod 644 *.*
  chown root:root *.*
```

## `Docker.raw` file location

`/Users/<whowmi>/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw`


## Complete Remove Docker

```bash
  sudo rm -Rf /Applications/Docker.app
  sudo rm -f /usr/local/bin/docker
  sudo rm -f /usr/local/bin/docker-machine
  sudo rm -f /usr/local/bin/com.docker.cli
  sudo rm -f /usr/local/bin/docker-compose
  sudo rm -f /usr/local/bin/docker-compose-v1
  sudo rm -f /usr/local/bin/docker-credential-desktop
  sudo rm -f /usr/local/bin/docker-credential-ecr-login
  sudo rm -f /usr/local/bin/docker-credential-osxkeychain
  sudo rm -f /usr/local/bin/hub-tool
  sudo rm -f /usr/local/bin/hyperkit
  sudo rm -f /usr/local/bin/kubectl.docker
  sudo rm -f /usr/local/bin/vpnkit
  sudo rm -Rf ~/.docker
  sudo rm -Rf ~/Library/Containers/com.docker.docker
  sudo rm -Rf ~/Library/Application\ Support/Docker\ Desktop
  sudo rm -Rf ~/Library/Group\ Containers/group.com.docker
  sudo rm -f ~/Library/HTTPStorages/com.docker.docker.binarycookies
  sudo rm -f /Library/PrivilegedHelperTools/com.docker.vmnetd
  sudo rm -f /Library/LaunchDaemons/com.docker.vmnetd.plist
  sudo rm -Rf ~/Library/Logs/Docker\ Desktop
  sudo rm -Rf /usr/local/lib/docker
  sudo rm -f ~/Library/Preferences/com.docker.docker.plist
  sudo rm -Rf ~/Library/Saved\ Application\ State/com.electron.docker-frontend.savedState
  sudo rm -f ~/Library/Preferences/com.electron.docker-frontend.plist
```

## Network

```bash

  # Create Network
  $ docker network create --driver bridge aplpine-net
  $ docker network ls
  $ docker network inspect aplpine-net
  $ docker network rm aplpine

  $ docker run -dit --name alpine1 --network aplpine-net alpine ash
  $ docker network connect bridge aplpine4
```

## Commands

```bash
  
  # Docker without sudo (Linux system)
  $ (sudo groupadd docker)
  $ sudo usermod -aG docker $USER
  # or 
  $ sudo groupadd docker
  $ sudo gpasswd -a $USER docker
  # or
  $ sudo setfacl -m user:$USER:rw /var/run/docker.sock

  # common
  $ docker ps
  $ docker ps -a
  $ docker container ls -a
  $ docker start [container_id]
  $ docker attach [container_id]
  $ docker stop [container_id]
  $ docker exec -it [container_id] /bin/bash

  # Start container automatically
  $ docker run -d --restart unless-stopped redis
  # Changes the restart policy for an already running container name redis
  $ docker update --restart unless-stopped redis

  # Ensures all  running containers restart
  $ docker update --restart unless-stopped $(docker ps -q)


  # prune

  $ sudo docker system df

  # image
  $ docker image prune
  $ docker image prune -a
  $ docker images prune -f

  # volumes
  $ docker volume prune

  # networks
  $ docker network prune

  # everything
  $ docker system prune
  $ docker system prune

  $ sudo docker container prune -f
  $ sudo docker buildx prune -f

  # docker compose
  $ sudo apt-get install docker-compose-plugin
```



## Docker Search

```bash
  $ docker search httpd
  $ docker pull httpd

  $ docker login
  # -> UserName
  # -> Password
  # ~/.docker/config.json 

  # push
  $ docker tag nginx:latest vivabm/nginx:latest
  $ docker push vivabm/nginx:latest


```

## Registry : 컨테이너 이미지를 저장하는 저장소

[Docker Hub](https://hub.docker.com)

- Public  : 공개
  - Official
  - Verified 
  - etc
- Private : 사내의 컨테이너 저장소

```bash
 #  docker registry
 $ docker run -d -p 6543:5000 --restart always --name registry registry:2
 $ docker tag nginx:latest localhost:6543/nginx:latest

 # [ Image Repository ] #
 # (use 1) localhost:6543/nginx:latest
 # (use 2) docker.example.com:6543/nginx:latest
 $ docker push localhost:6543/nginx:latest

# 이미지 확인
 $ curl -X GET http://localhost:6543/v2/_catalog

 # 태그 정보 확인
 $ curl -X GET http://localhost:6543/v2/nginx/tags/list
```

## 컨테이너 라이프 사이클

- docker HOST
- docker Registry
- docker pull
- docker run

1. 컨테이너 이미지 사용
   - $ docker search
   - $ docker pull
   - $ docker images
   - $ docker inspect
   - $ docker rmi
2. 컨테이너 실행 및 종료 
3. 동작중인 컨테이너 관리


```bash

  # Search
  $ docker search nginx --limit 5
  $ docker search nginx --filter=stars=100

  # Pull
  $ docker pull
  $ docker images
  $ docker images --no-trunc

  # 컨테이너로 생성
  # docker create [옵션] <이미지이름:태그명>
  # create 명령어는 기본 백그라운드로 실행됨
  # tag -> latest 는 태그명 생략 가능
  $ docker create --name webserver -h webserver -p 11111:80 nginx:tagname

  # 컨테이너 실행
  # docker start [option] 컨테이너이름
  $ docker start webserver
  $ curl localhost:11111  # macos


  # 컨테이너 생성 및 실행 
  # docker run [옵션] <이미지이름:태크명>
  # run (pull + create + start)
  $ docker run --name webserver -d nginx:tagName

  # 실행중인 컨테이너 관리 명령어 모음
  $ docker ps -a # (-a) 실행중이 아닌 컨테이너 까지 확인, 
  $ docker ps -aq # Container ID 만 보여줌
  $ docker top webserver # docker process check
  $ docker logs -f webserver # follow, 실시간 모니터링 (-f )
  $ docker exec -it webserver /bin/bash  # (-i) interactive, (-t) pseudo-tty
  $ docker attach webserver # 포그라운드로 실행중인 컨테이너 연결
  $ docker cp [옵션] CONTAINER:SRC_PATH  DEST_PATH
  $ docker cp [옵션] SRC_PATH  CONTAINER:DEST_PATH

  # eginx root html location
  # `cd /usr/share/nginx/html/`

  # 상태 확인 (컨테이너명 or 이미지명)
  $ docker inspect webserver
  # Inspect Get IPAddress
  $ docker inspect --format '{{.NetworkSettings.IPAddress}}' webserver
  $ docker inspect  --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' webserver

  # 컨테이너 중지
  $ docker stop webserver

  # 컨테이너 삭제
  # docker stop [옵션] 컨테이너 이름
  $ docker rm webserver

```

## (macos) `settings.json`  file localtion
`/Users/vivakr/Library/Group Containers/group.com.docker`

## `daemon.json` location
* macos : `~/.docker/daemon.json `
* windows : `%USERPROFILE%\.docker\daemon.json`
* linux : `/etc/docker/daemon.json`

## 컨테이너 리소스 관리

1. CPU
  * cpus : 컨테이너에 할당할 CPU Core 수를 지정, 
  * cpuset-cpus : 컨테이너가 사용할 수 있는 CPU 나 코어를 할당. CPU Index 는 0 부터
  * cpu-share : 컨테이너가 사용하는 CPU 비중을 1024 값을 을 기반으로 설정, 가중치
2. Memory
  * --memory, -m : 컨테이너가 사용할 최대 메모리 양
  * --memory-swap : 컨테이너가 사용할 최대 메모리, 생략시 2배 (스왑 - 메모리 => 스왑 메모리)
  * --oom-kill-disable : OOM (Out Of Memory) Killer 가 프로세스를 Kill 하지 못하도록 보호
  * --memory-reservation : --memory 값보다 적은 값으로 구성하는 소프트 제한 값 설정, 보장
3. Block I/O

```bash
  # CPU
  $ docker run -d --cpus=".5" nginx:latest
  $ docker run -d --cpu-shares 2048 nginx:latest
  $ docker run -d --cpuset-cpus 0-3 nginx:latest

  # Memory (b, k, m, g)
  $ docker run -d -m 512m nginx:latest
  $ docker run -d -m 1g --memory-reservation 500m nginx:latest
  $ docker run -d -m 200m --memory-swap 300m nginx:latest
  $ docker run -d -m 200m --oom-kill-disable nginx:latest
```

## Container Storage

1. 컨테이너 볼륨 : `Union File System`, `Overlay`
   * 컨테이너 이미지는 ReadOnly, 컨테이너에 추가 되는 데이터들은 별도의 RW 레이어에 저장됨
   * volume option
     * `$ -v <host path>: <container mount path>`
     * `$ docker run -d -v /webdata:/var/www/html:ro httpd:latest`
2. 컨테이너 데이터 공유


## Container (컨테이너)

- 컨테이너는 하나의 Application Process
- 각각의 컨테이너는 완벽하게 Isolate 되어 있음
- Docker Host (커널) -> Isolated Containers
- 컨테이너에는 기본적인 설비가 있음 : base image (uuid) -> source image -> 동작 레이어

## 용어

- Container Image
- Container
- Docker Host (Linux Kernel)
- Docker Daemon
  - systemctl start docker
- Docker Client Command
  - $ docker search nginx : 이미지 검색  
  - $ docker pull nginx : 컨테이너 이미지 다운로드  
  - $ docker run -d --name web -p 80:80 nginx:latest : 실행  
- Docker Hub
- Container Images
- Container : 동작중인 컨테이너 (읽기/쓰기)

hub.docker.com : 컨테이너 웹 저장소

베어 메탈
하이퍼바이저
스프트웨어적인 기술
가상 머신 (가상 컴퓨터) : 가상화 플렛폼
스킬 아웃/인
서비스 중단 없는 애플리케이션 운영 수요
도커는 컨테이너 엔진 중의 하나
컨테이너 폴랫폼
컨테이너 애플리케이션
아이솔레이트 된 공간의 작은 용량, 확장성이 매우 좋음


## 컨테이너간 통신 (네트워크)
1. 컨테이너는 어떻게 통신하는가?
2. 컨테이너 포트 외부 노출
3. 컨테이너 네트워크 추가
4. 컨테이너 간 통신

* Container Network Model
* docker0
  * virtual ethernet bridge : 172.17.0.0/16
  * L2 통신기반
  * container 생성시 veth 인터페이스 생성(sandbox)
  * 모든 컨테이너는 외부 통신을 docker0 (gateway, 172.17.0.1)를 통해 진행
  * container running 시 `172.17.x,y` 대역 범위에 IP 할당


## 컨테이너 네트워크 추가, Create User Define Network (사용자 정의 네트워크)

```bash
  # get list 
  $ docker network ls

  # create example
  $ docker network create --driver bridge --subnet 192.168.100.0/24 --gateway 192.168.100.254 vivakrnet
  $ docker inspect network vivakrnet

  # create network with user defined network example, asign static ip address
  $ docker run -it --name demo --net vivakrnet --ip 192.168.100.100 busybox

  # check
  $ ip addr 
  #--> inet 192.168.100.100
  $ ping 8.8.8.8

  # remove network
  $ docker network rm vivakrnet
```


## 컨테이너간의 통신

