# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/doc ./doc
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/test ./test

EXPOSE 4000
CMD [ "npm", "run", "start:migrate:prod" ]
