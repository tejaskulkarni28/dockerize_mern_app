FROM node:20-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

COPY ./ ./

EXPOSE 3001

CMD ["node", "server.js"]



