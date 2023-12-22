FROM ubuntu:latest
RUN apt-get update ; apt-get -y install rig boxes
ADD genis.sh /bin/genid.sh
RUN chmod +x /bin/genid.sh
ENTRYPOINT ["/bin/genid.sh"]

# $ docker build -t genid
