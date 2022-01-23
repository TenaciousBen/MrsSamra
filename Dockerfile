FROM node:16 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn.lock ./yarn.lock

COPY .npmrc .npmrc

RUN yarn install

# Bundle app source
COPY . .

ENV NODE_ENV production

RUN yarn build

FROM base as dev

FROM dev as prod

ENV PORT 3000
EXPOSE 3000
CMD [ "npm", "start" ]