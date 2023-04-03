FROM node:18-alpine3.16

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


