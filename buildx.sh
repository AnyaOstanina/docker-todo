docker buildx build --platform linux/amd64,linux/arm64 -t client_build ./client && docker buildx build --platform linux/amd64,linux/arm64 -t server_build ./server