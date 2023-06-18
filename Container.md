# Container (컨테이너)

- 컨테이너는 하나의 Application Process
- 각각의 컨테이너는 완벽하게 Isolate 되어 있음
- Docker Host (커널) -> Isolated Containers
- 컨테이너에는 기본적인 설비가 있음 : base image (uuid) -> source image -> 동작 레이어

## 용어

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

## 리눅스 환경이 필요한 이유

- 리눅스 커널의 기능이 필요
- 커널
  - Storage
    - Device Mapper
    - Btrfs
    - Aufs
  - namespaces
    - PID
    - MNT
    - IPC
    - UTS
    - NET
  - Networking
    - veth
    - bridge
    - iptages

1. chroot : 독립된 공간 형성
2. namespace : isolate 기능 지원 (6개)
3. cgroup : 필요한 만큼의 HW 지원

윈도우, 맥 : Hypervisor 활성화 필요

개발자가 만들 그대로 어디에서든 돌아감
확장/축소가 쉽고 MSA, Devops 에 적합함
개발환경과 운영환경의 차이점 극복

## 도커 설치

- Windows
  - hub.docker.com 계정 등록
  - Docker Desktop 설치 : Hyper-V, WSL2 (Windoes Subsystem for Linux v.2) 활성화 됨


