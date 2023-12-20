# syntax=docker/dockerfile:1

FROM ubuntu:latest
# 앞에 명령이 성공한 후 에 뒷 명령실행
# build 시 실행되는 명령어
RUN apt-get update
RUN apt-get install python3 -y
# mkdir -p /var/www/html
WORKDIR /var/www/html  

COPY ["index.html", "."]
# echo "Hello, <strong>Docker</strong>" > index.html

# python3 -m http.server
# 컨테이너가 실행될때 실행되는 명령어
CMD [ "python3", "-u", "-m", "http.server"]

# docker build -t web-server-build . 
# docker rm --force web-server    
# docker run -p 12345:7000 --name web-server web-server-build
