FROM mhart/alpine-node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

COPY package.json yarn.lock ./
RUN yarn install

CMD yarn start:prod

COPY . ./
RUN yarn build
