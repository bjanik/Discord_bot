FROM node:latest

WORKDIR /app

COPY . .

RUN npm install -g typescript

RUN npm install

CMD ["npm", "run", "bot"]