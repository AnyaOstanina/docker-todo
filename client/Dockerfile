FROM node:12-alpine as builder
WORKDIR /app-client
COPY package.json /app-client/package.json
RUN npm install --only=prod
COPY . /app-client
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=builder /app-client/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]