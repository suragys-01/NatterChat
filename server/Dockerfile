FROM node:18.9.1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8747
CMD [ "npm","start" ]