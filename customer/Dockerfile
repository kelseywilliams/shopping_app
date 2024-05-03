FROM node

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./app ./

RUN npm install

CMD ["npm", "start"]