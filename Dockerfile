#Create our image from Node alpine
FROM node:alpine

LABEL app="andela-eats-frontend"
LABEL AUTHOR="Charles Muthini <charles.muthini@andela.com>"

RUN yarn global add serve@6.5.6

COPY dist /app

WORKDIR /app