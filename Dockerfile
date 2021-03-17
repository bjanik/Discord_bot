FROM node:latest

WORKDIR /app

#VOLUME /app

COPY . .

RUN npm install -g typescript

RUN npm install -g

CMD ["npm", "run", "bot"]
