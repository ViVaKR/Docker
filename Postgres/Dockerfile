FROM postgres:latest
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime && sed -i 's/# ko_KR.UTF-8 UTF-8/ko_KR.UTF-8 UTF-8/' /etc/locale.gen && locale-gen
ENV LANG=ko_KR.UTF-8 LC_ALL=ko_KR.UTF-8
