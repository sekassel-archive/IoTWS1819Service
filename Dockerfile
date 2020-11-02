FROM node:14-slim as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 3000
CMD npm run start:prod
