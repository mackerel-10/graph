FROM node:20-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g typescript
RUN npm install -D @types/node
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "dev"]