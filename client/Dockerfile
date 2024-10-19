# Dockerfile for dev

FROM node:18-alpine

WORKDIR /usr/camdn

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]