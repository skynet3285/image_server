FROM node:21
WORKDIR /app

RUN mkdir ./images
COPY .env package.json yarn.lock tsconfig.json ./
COPY ./src ./src

RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
