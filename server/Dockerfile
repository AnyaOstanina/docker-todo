FROM node:12-alpine as development
WORKDIR /app-server
COPY package*.json ./
RUN npm install rimraf
RUN npm install --only=development
COPY . .

RUN npm run build

FROM node:12-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app-server
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /app-server/dist ./dist
EXPOSE 8080
CMD ["node", "dist/main"]