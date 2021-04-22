FROM node:10

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]