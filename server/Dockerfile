FROM node:16-alpine3.14

WORKDIR /usr/src/app

COPY ./package.json .

COPY ./package-lock.json .

COPY ./build/ .

CMD "ls -lah"

RUN npm install

EXPOSE 8000

CMD ["node", "app.js"]