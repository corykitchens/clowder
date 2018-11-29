FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app


COPY . /usr/src/app/
# install and cache app dependencies
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]