# 빌드 스테이지
FROM node:22-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# 프로덕션 스테이지
FROM node:22-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
RUN chown -R appuser:appgroup /usr/src/app
RUN chmod -R 755 /usr/src/app
USER appuser
EXPOSE 8293
CMD ["node", "server.mjs"]
