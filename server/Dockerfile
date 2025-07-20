FROM node:20-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm install nodemon --save-dev

COPY ./ ./

EXPOSE 3001

CMD ["npx","nodemon", "server.js"]



