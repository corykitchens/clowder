FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app


COPY build /usr/src/app/build
COPY package.json /usr/src/app/package.json

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "run", "serve"]