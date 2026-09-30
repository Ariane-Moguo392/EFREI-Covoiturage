> **Présentation : Ariane Emmanuelle MOGUO**

# Application de covoiturage – Projet EFREI

## 📌 Description
Ce projet est une application web de covoiturage développée dans un cadre académique à l’EFREI.
Elle permet la mise en relation de conducteurs et de passagers afin de partager des trajets.
L’application repose sur une architecture client–serveur avec un frontend en Vue.js
et un backend en Node.js (Express), connecté à une base de données MySQL.

---

## 🎯 Objectifs du projet
- Concevoir une application web complète de covoiturage
- Mettre en œuvre une architecture frontend / backend moderne
- Gérer les utilisateurs, trajets et réservations
- Manipuler une base de données relationnelle (MySQL)
- Appliquer les bonnes pratiques de structuration d’un projet web

---

## 🛠️ Technologies utilisées

### Frontend
- Vue.js (Vite)
- JavaScript
- HTML / CSS
- Bootstrap

### Backend
- Node.js
- Express.js

### Base de données
- MySQL

### Outils
- Git & GitHub (versioning)
- npm

---

## 📂 Structure du projet

client/
└── vite-project/ → application frontend Vue.js

server/ → serveur backend Express.js

users.sql → script SQL de la base de données

README.md → documentation du projet


---

## 🗄️ Base de données (MySQL)
La base de données permet de gérer :
- les utilisateurs (conducteurs et passagers)
- les informations nécessaires à l’authentification
- les données liées aux trajets et réservations

### Importation
1. Créer une base de données MySQL
2. Importer le fichier `users.sql` (structure uniquement, sans comptes préexistants)

via phpMyAdmin ou en ligne de commande.

---

## ▶️ Installation et exécution en local

### 1️⃣ Backend (Express.js)

```bash
cd server
npm install
npm start
http://localhost:3000
````
### 2️⃣ Frontend (Vue.js)
```bash
cd client/vite-project
npm install
npm run dev
http://localhost:5173
````

🔐 Sécurité

Les informations sensibles (identifiants de base de données, clés, mots de passe)
ne sont pas exposées publiquement dans le dépôt.

Les variables sensibles doivent être stockées dans :

des fichiers de configuration

ou des variables d’environnement (.env)

👨‍🎓 Contexte académique
Projet réalisé dans le cadre de la formation d’ingénieur à l’EFREI.
Ce projet a pour objectif de mettre en pratique les compétences acquises en :

développement web

architecture client–serveur

gestion de bases de données

📧 Contact
Pour toute question ou remarque concernant ce projet,
vous pouvez me contacter via GitHub ou LinkedIn.

## Préparation de la configuration

Avant le lancement, créez `server/.env` à partir de `server/.env.example` et renseignez la base MySQL et une valeur longue et aléatoire pour `SESSION_SECRET`. Le serveur lit les variables d’environnement ; si votre terminal ne charge pas `.env` automatiquement, exportez-les avant `npm start`. Les trajets et comptes fournis dans le dépôt original ont été retirés de cette copie pour protéger leurs données.
