FROM node:alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN yarn install --production
RUN yarn add --dev typescript @types/node

# Copying source files
COPY . .

# Building app
RUN yarn build

EXPOSE 3000

# Running the app
CMD [ "yarn", "start" ]