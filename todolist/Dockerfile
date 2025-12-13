# Używamy wersji Slim (Debian) zamiast Alpine - ma lepszą kompatybilność z bibliotekami
FROM node:20-slim

# Instalujemy OpenSSL, którego wymaga Prisma
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# Generujemy klienta
RUN npx prisma generate

# Budujemy aplikację
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]