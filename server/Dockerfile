FROM node:14-alpine

WORKDIR /server

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]