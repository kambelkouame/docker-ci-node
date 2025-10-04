# Étape 1 : Image de base
FROM node:18-alpine

# Étape 2 : Répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package et installer les dépendances
COPY package*.json ./
RUN npm install

# Étape 4 : Copier tout le code source
COPY . .

# Étape 5 : Exposer le port de l’application
EXPOSE 3000

# Étape 6 : Démarrer l’application
CMD ["npm", "start"]
