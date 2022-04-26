GIT_COMMIT=$(git log -1 --format=%h) && BUILD_TIME=$(date +%s) && docker-compose build --build-arg GIT_COMMIT=$GIT_COMMIT --build-arg BUILD_TIME=$BUILD_TIME && docker-compose up -d
