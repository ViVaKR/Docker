# 한글판 이미지 설치
FROM postgres:latest
RUN localedef -i ko_KR -c -f UTF-8 -A /usr/share/locale/locale.alias ko_KR.UTF-8
ENV LANG ko_KR.utf8


# Run (끝에 마침표 잊지않기) -> $ docker build -t postgres-ko:latest .
