FROM node:22 as etapa-uno

WORKDIR /usr/app

COPY ./ ./

RUN npm install 


RUN npm run build 


FROM node:22-alpine as etapa-dos

WORKDIR /usr/app

COPY --from=etapa-uno /usr/app/dist ./dist
COPY --from=etapa-uno /usr/app/node_modules ./node_modules
COPY --from=etapa-uno /usr/app/package*.json ./


EXPOSE 3000

CMD ["node", "dist/main.js"]