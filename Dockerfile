# Étape 1 : Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur NGINX
FROM nginx:alpine

# Copier les fichiers construits
COPY --from=build /app/dist /usr/share/nginx/html


# Remplacer la config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
