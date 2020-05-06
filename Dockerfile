FROM node:12.16.3-slim

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

USER node

CMD [ "node", "index.js" ]
