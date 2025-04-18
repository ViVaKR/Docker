# 빌드 스테이지
FROM node:slim@sha256:dfb18d8011c0b3a112214a32e772d9c6752131ffee512e974e59367e46fcee52 AS builder

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 의존성 설치를 위해 package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 프로덕션 스테이지
FROM node:slim@sha256:dfb18d8011c0b3a112214a32e772d9c6752131ffee512e974e59367e46fcee52 AS runner

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 빌드된 파일 복사
COPY --from=builder /usr/src/app .

# 애플리케이션 포트 설정
EXPOSE 5130

# 애플리케이션 실행 명령
CMD ["node", "server.mjs"]
