FROM node:12-alpine as development
WORKDIR /app-server
COPY package*.json ./
RUN npm install rimraf
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:12-alpine as production
ARG GIT_COMMIT=unspecified
LABEL git_commit=$GIT_COMMIT
ARG BUILD_TIME=unspecified
LABEL build_time=$BUILD_TIME
WORKDIR /app-server
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /app-server/dist ./dist
EXPOSE 8080
RUN apk --no-cache add curl
CMD ["node", "dist/main"]