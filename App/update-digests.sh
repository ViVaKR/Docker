#! /usr/bin/env bash

set -e

SDK_IMAGE="mcr.microsoft.com/dotnet/sdk:9.0"
RUNTIME_IMAGE="mcr.microsoft.com/dotnet/runtime:9.0"
COMPOSE_FILE="docker-compose.yaml"

echo "👉 Pulling latest .NET images..."
docker pull $SDK_IMAGE
docker pull $RUNTIME_IMAGE

SDK_SHA=$(docker inspect --format='{{index .RepoDigests 0}}' $SDK_IMAGE)
RUNTIME_SHA=$(docker inspect --format='{{index .RepoDigests 0}}' $RUNTIME_IMAGE)

echo "✅ SDK: $SDK_SHA"
echo "✅ Runtime: $RUNTIME_SHA"

echo "👉 Updating compose file..."
sed -i "s|# base SDK:.*|# base SDK: $SDK_SHA|g" $COMPOSE_FILE
sed -i "s|# base runtime:.*|# base runtime: $RUNTIME_SHA|g" $COMPOSE_FILE

echo "✅ Compose file updated successfully!"

echo "👉 Rebuilding container..."

docker compose build --no-cache

echo "✅ Build complete!"

    # digest 최신화 + 이미지 재빌드
    # ./update-digests.sh
    # docker compose build --no-cache

    # 테스트 실행 (예: 10회 출력)
    # docker compose run --rm dotnet-console 10
    # docker image prune -f
