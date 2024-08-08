FROM node:17

WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/ ./dist/

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/main.js"]
