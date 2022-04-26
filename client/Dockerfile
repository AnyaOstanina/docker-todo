FROM node:12-alpine as builder
WORKDIR /app-client
COPY package.json /app-client/package.json
RUN npm install --only=prod
COPY . /app-client
RUN npm run build
FROM nginx:1.16.0-alpine
ARG GIT_COMMIT=''
LABEL git_commit=$GIT_COMMIT
ARG BUILD_TIME=''
LABEL build_time=$BUILD_TIME
COPY --from=builder /app-client/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY build.sh /app-client/build.sh
EXPOSE 80
RUN apk --no-cache add curl
ENTRYPOINT ["sh", "-x", "./app-client/build.sh"]
CMD ["nginx", "-g", "daemon off;"]