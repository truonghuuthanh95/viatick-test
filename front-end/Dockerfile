FROM node:12-alpine AS build

ENV NODE_ENV production

WORKDIR /app

COPY package.json ./

RUN yarn --network-timeout 100000 && yarn install

COPY . /app

RUN yarn build 

FROM node:12-alpine

WORKDIR /app

RUN yarn global add serve

COPY --from=build /app/build ./build
EXPOSE 3000
CMD serve -s -p 3000 build
