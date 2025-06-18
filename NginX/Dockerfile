FROM ubuntu:latest
ADD df.sh /bin/df.sh
RUN chmod +x /bin/df.sh
ENTRYPOINT [ "/bin/df.sh" ]

# ! 컨테이너간의 데이터 공유 #
# docker build -t vivabm/df:latest .

#! nginx container shared
# docker run -v /Users/vivakr/Docker/NginX/44440/html:/webdata -d --restart unless-stopped --name viv-df -h vivdf vivabm/df:latest
