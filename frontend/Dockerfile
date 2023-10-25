FROM node:18-buster-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn" , "dev"]