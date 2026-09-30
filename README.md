# Application de covoiturage – Projet Academique

## Présentation

Cette application web de covoiturage a été développée dans le cadre d’un projet académique à l’EFREI. Elle vise à mettre en relation des conducteurs et des passagers pour organiser des trajets partagés.

Le projet suit une architecture client–serveur : l’interface est réalisée avec Vue.js, le serveur avec Node.js et Express, et les données sont stockées dans MySQL.

## Objectifs

- Développer une application web de covoiturage complète
- Mettre en place une architecture séparant le frontend et le backend
- Gérer les utilisateurs, les trajets et les réservations
- Utiliser une base de données relationnelle MySQL
- Structurer le code selon les bonnes pratiques du développement web

## Technologies utilisées

| Partie | Technologies |
|---|---|
| Frontend | Vue.js, Vite, JavaScript, HTML, CSS, Bootstrap |
| Backend | Node.js, Express.js |
| Base de données | MySQL |
| Outils | Git, GitHub, npm |

## Organisation du projet

```text
client/
└── vite-project/   Application frontend Vue.js

server/             Serveur backend Express.js
users.sql           Script SQL de la base de données
README.md           Documentation du projet
```

## Base de données

La base de données contient les informations relatives aux utilisateurs, notamment les conducteurs et les passagers, ainsi que les données nécessaires à l’authentification, aux trajets et aux réservations.

Pour l’installer, créez une base de données MySQL, puis importez le fichier `users.sql` à l’aide de phpMyAdmin ou de la ligne de commande.

## Installation et lancement en local

### Backend

Dans un terminal, exécutez :

```bash
cd server
npm install
npm start
```

Le serveur est accessible à l’adresse [http://localhost:3000](http://localhost:3000).

### Frontend

Dans un second terminal, exécutez :

```bash
cd client/vite-project
npm install
npm run dev
```

L’application est accessible à l’adresse [http://localhost:5173](http://localhost:5173).

## Sécurité

Les informations confidentielles, comme les identifiants de connexion à la base de données, les clés et les mots de passe, ne doivent pas être publiées dans le dépôt. Elles peuvent être placées dans des variables d’environnement, notamment dans un fichier `.env` exclu du suivi Git.

## Contexte académique

Ce projet s’inscrit dans la formation d’ingénieur à l’EFREI. Il permet de mettre en pratique des compétences en développement web, en architecture client–serveur et en gestion de bases de données.

## Contact

Pour toute question concernant le projet, vous pouvez me joindre via GitHub ou LinkedIn.
