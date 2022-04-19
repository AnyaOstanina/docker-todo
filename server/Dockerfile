WORKDIR /app-server
COPY package*.json ./
RUN npm install rimraf
RUN npm install --only=development
COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app-server
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /app-server/dist ./dist
CMD ["node", "dist/main"]