FROM node:8

ARG APP_DIR=/app

RUN mkdir -p $APP_DIR

ADD ./package.json $APP_DIR/package.json
ADD ./package-lock.json $APP_DIR/package-lock.json
ADD ./app.js $APP_DIR/app.js

WORKDIR $APP_DIR

RUN npm install

CMD node app.js