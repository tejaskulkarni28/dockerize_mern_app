FROM node:20-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]



