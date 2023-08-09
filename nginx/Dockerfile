FROM ubuntu:22.04
LABEL maintainer="Kim Bum Jun <bm@live.co.kr>"
# install apache
RUN apt-get update \ 
    && apt-get install -y apache2
RUN echo "TEST WEB" > /var/www/html/index.html
EXPOSE 80
CMD [ "/usr/sbin/apache2ctl", "-DFOREGROUND" ]

# 빌드 및 확인
# docker build -t viv-httpd:v1 .
# docker run -d -80:80 --name viv-httpd viv-httpd:v1
# curl localhost:80

#! 삭제
#* docker rm -f viv-httpd
