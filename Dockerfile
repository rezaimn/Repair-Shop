FROM node:12-alpine as node

WORKDIR /app

RUN npm install -g @angular/cli@8

COPY package*.json ./

RUN npm ci

COPY . .

ARG CONF

RUN ng build --configuration=${CONF}

FROM nginx:stable-alpine as nginx

COPY nginx_default.conf  /etc/nginx/conf.d/default.conf

COPY --chown=nginx:nginx --from=node /app/dist /var/www
