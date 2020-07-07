FROM mhart/alpine-node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

COPY package.json package-lock.json ./
RUN yarn install

CMD npm run start:prod

COPY . ./
RUN npm run build
