### STAGE 1: Build ###
FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --immutable --immutable-cache

COPY . .
#RUN yarn dev

# Expose the default port
EXPOSE 3000
CMD ["yarn", "dev"]
