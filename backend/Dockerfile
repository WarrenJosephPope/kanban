FROM node:alpine

RUN apk update && apk add bash

WORKDIR /usr/app/backend

COPY package*.json ./
EXPOSE ${PORT}

RUN npm install && npm install -D

COPY . .

CMD npm start