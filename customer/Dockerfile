FROM node

WORKDIR /usr/src/

COPY package*.json ./

COPY ./src ./

RUN npm install

CMD ["npm", "run", "dev"]