# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Kopiowanie zależności
COPY package*.json ./
COPY prisma ./prisma/

# Instalacja
RUN npm install

# Kopiowanie reszty plików
COPY . .

# Generowanie klienta Prisma
RUN npx prisma generate

# Budowanie aplikacji Next.js
RUN npm run build

EXPOSE 3000

# Start aplikacji
CMD ["npm", "start"]