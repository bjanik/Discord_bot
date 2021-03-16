FROM node:latest

WORKDIR /srv

COPY . /srv

RUN npm install

CMD ["node", "poc.js"]

