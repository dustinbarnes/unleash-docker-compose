FROM node:10-alpine

COPY . .

RUN npm install --production

EXPOSE 4242

CMD node index.js