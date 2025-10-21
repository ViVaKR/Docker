# DotNet App Launch Docker

## Default Commands

```bash

docker pull mcr.microsoft.com/dotnet/sdk:9.0
docker pull mcr.microsoft.com/dotnet/sdk:9.0-noble
docker inspect --format='{{index .RepoDigests 0}}' mcr.microsoft.com/dotnet/sdk:9.0

# dotnet console app
docker compose build --no-cache
docker compose run --rm dotnet-console 10
docker image prune -f


#
docker build -t counter-image -f Dockerfile .

```

## /etc/systemd/system/vivakr-api.service

```ini
[Unit]
Description=ViVaKR ASP.NET Core API Service
After=network.target

[Service]
# 실행할 명령 (dotnet + dll)
ExecStart=/usr/bin/dotnet /home/viv/WebServer/com.vivakr/api/ViVaKR.API.dll
WorkingDirectory=/home/viv/WebServer/com.vivakr/api

# 환경 변수
Environment=ASPNETCORE_ENVIRONMENT=Production

# 로그를 별도 파일로 남기고 싶다면 (선택)
StandardOutput=append:/home/viv/WebServer/com.vivakr/api/vivakr-api.log
StandardError=append:/home/viv/WebServer/com.vivakr/api/vivakr-api.err

# 서비스 정책
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=vivakr-api

[Install]
WantedBy=multi-user.target


```

## dotnet/sdk

- 샘플에서는 앱을 빌드하는 데 이 이미지를 사용합니다. 이미지는 CLI(명령줄 도구)가 포함된 .NET SDK를 포함합니다. 이미지는 로컬 개발, 디버깅 및 유닛 테스트에 최적화되어 있습니다. 개발 및 컴파일용으로 설치된 도구는 이미지를 비교적 크게 만듭니다.

## dotnet/aspnet

- 샘플에서는 앱을 실행하는 데 이 이미지를 사용합니다. 이 이미지는 ASP.NET Core 런타임 및 라이브러리를 포함하며 프로덕션에서 실행 중인 앱에 최적화되어 있습니다. 배포 및 앱 시작 속도를 위해 디자인된 이 이미지는 비교적 작기 때문에 Docker 레지스트리에서 Docker 호스트까지 네트워크 성능이 최적화됩니다. 앱을 실행하는 데 필요한 이진 파일 및 콘텐츠만 컨테이너에 복사됩니다. 콘텐츠는 실행할 준비가 되어 있어, docker run부터 앱 시작까지 가장 빠른 속도로 가능합니다. 동적 코드 컴파일은 Docker 모델에 필요하지 않습니다.
