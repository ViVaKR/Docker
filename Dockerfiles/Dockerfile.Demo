#* 생성할 이미지
FROM baseimage 

#* 메타데이터를 추가 (key-value)
LABEL key="value"

#* 이미지가 올라갔을 때 수행되는 명령어들
#* -y 옵션으로 무조건 설치 가능
# RUN ["커멘트", "파라미터 1", "파라미터 2"]
RUN \
    apt-get update && \
    apt-get install -y apache2

# 작업 디렉토리 지정
# shell의 cd 명령문
# 작업디렉토리 로 전환 후 
# RUN, CMD, ENTRYPOINT, COPY, ADD 명령은 
# 해당 디렉토리 기준으로 실행됨
WORKDIR /the/workdir/path

# 이미지를 어떤 계정에서 실행하는 지 지정
# 기본적으로 root
USER root

# 호스트 파일 또는 디렉토리를 도커 이미지의 파일 시스템으로 복사하기
COPY source dest

# COPY 보다 파워풀한 명령문 (압축파일 또는 네트워크상의 파일 가능)
ADD source dest

# ENV
# EXPOSE <포트>, EXPOSE 80
# EXPOSE <포트>/<프로토콜>, TCP 와 UDP 중 선택할 수 있으며 기본값은 TCP, EXPOSE 9999/udp
EXPOSE 8080

# 컨테이너를 시작할 때마다 실행됨
# ENTRYPOINT ["커멘드", "파라미터 1", "파라미터 2"]
# (예) ENTRYPOINT [ "npm", "start" ]
# Django 서버 실행
ENTRYPOINT [ "python" , "manage.py", "runserver"]

# 컨테이너가 생성된 이후에 항상 실행중인 상태로 만들기
# ENTRYPOINT 명령문으로 지정된 커맨드에 널길 파라미터를 지정
# 최초 한번 실행되나, docker run 에 인자를 넘기면 실행되지 않음
# CMD ["<커맨드>","<파라미터1>","<파라미터2>"]
# CMD ["<파라미터1>","<파라미터2>"]
CMD ["apachectl", "-D", "FOREGROUND"]

# 환경변수 설정
# ENV key=value
ENV NODE_ENV production

# docker build 커맨드 실행시 --build-arg 옵션을 통해 넘길 수 있는 인자를 정의
# ARG 로 설정한 값은 이미지를 빌드할 때만 유효함.
ARG port
#+ (ex) docker build --build-arg port=8080
ARG port=8080
#+ (ex) CMD start.sh -h 127.0.0.1 -p ${port}

# docker build
# docker build -t [이미지이름:이미지버전] [Dockerfile 의 경로]
# (ex) docker build -t apache-image .

# (1) cd ~
# (2) mkdir html && cd html
# (3) vim index.html
# (4) Hello World
# (5) docker run --name apache-container -d -p 80:80 -v ~/html/:/var/www/html apache-image
# -> --name : 컨테이너이름, 
# -> -d : 백그라운드모드로 실행, 
# -> -p [호스트포트][컨테이너포트] : 연결포트, 
# -> -v : 로컬과 컨테이너 파일 연동

#* .dockerignore : 이미지를 빌드할 때 제외 시킬 파일 설정 (.gti, *.md)

