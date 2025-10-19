# FAC Bot - Bot Discord d'Apprentissage

## Vue d'ensemble
FAC Bot est un bot Discord interactif complet pour l'apprentissage du code. Il combine tutoriels structurés, système de support par tickets, et projets pratiques pour créer une expérience d'apprentissage communautaire complète.

## État Actuel
- ✅ Structure du bot complète avec gestionnaire de commandes
- ✅ Système de tutoriels avec 3 niveaux (Débutant, Intermédiaire, Avancé)
- ✅ Support pour JavaScript, Python, et HTML/CSS
- ✅ 8 projets pratiques avec descriptions détaillées
- ✅ Système de support avec création automatique de tickets
- ✅ Messages de bienvenue pour nouveaux membres
- ✅ Interface interactive avec boutons et menus déroulants
- ✅ Commandes: /tutoriels, /projets, /aide, /ressources, /support, /server
- ✅ Configuration automatique de serveur avec /server (6 catégories, 8 rôles, ~35 salons)

## Architecture du Projet

### Structure des Dossiers
```
/commands/          - Commandes slash Discord
/events/            - Gestionnaires d'événements (ready, interactionCreate, guildMemberAdd)
/interactions/
  /buttons/         - Handlers pour boutons cliquables
  /menus/           - Handlers pour menus déroulants
/data/              - Fichiers JSON avec tutoriels et projets
```

### Fonctionnalités Principales

#### 1. Système de Tutoriels
- Organisation par niveau: débutant, intermédiaire, avancé
- Langages: JavaScript, Python, HTML/CSS
- Chaque tutoriel inclut:
  - Description détaillée
  - Liens vers ressources externes
  - Exercices pratiques
- Navigation interactive avec menus déroulants

#### 2. Projets Pratiques
8 projets allant de débutant à avancé:
- Calculatrice Interactive
- Liste de Tâches
- Application Météo
- Jeu de Quiz
- Bot Discord Simple
- Site Portfolio
- Chatbot IA
- Site E-commerce

#### 3. Système de Support
- Création automatique de tickets privés
- Catégorie "Tickets" auto-générée
- Permissions configurées automatiquement
- Fermeture facile avec bouton
- Gestion de tickets multiples par utilisateur

#### 4. Messages de Bienvenue
- Embed personnalisé pour chaque nouveau membre
- Boutons d'action pour commencer
- Présentation des fonctionnalités principales

#### 5. Configuration Automatique de Serveur (/server)
- Création automatique de structure de serveur complète
- 6 catégories thématiques (Informations, Apprentissage, Projets, Support, Communauté, Vocal)
- 8 rôles de progression (Admin, Modérateur, Mentor, Expert, Avancé, Intermédiaire, Débutant, Bot)
- ~35 salons textuels organisés par thème
- 7 salons vocaux pour sessions de code
- Messages de bienvenue, règles et guide des commandes automatiques
- Permissions préconfigurées pour chaque rôle
- Avertissement anti-duplication intégré

## Configuration Requise

### Secrets Replit
- `DISCORD_TOKEN` - Token du bot Discord
- `DISCORD_CLIENT_ID` - ID de l'application Discord

### Permissions Discord
Le bot nécessite les intents suivants:
- Guilds
- GuildMembers
- GuildMessages
- MessageContent

### Permissions du Bot
- Gérer les canaux (création de tickets)
- Envoyer des messages et embeds
- Lire l'historique des messages
- Gérer les permissions de canaux

## Déploiement

1. Configurer les secrets DISCORD_TOKEN et DISCORD_CLIENT_ID
2. Exécuter `node deploy-commands.js` pour déployer les commandes slash
3. Lancer `node index.js` pour démarrer le bot

## Dépendances
- discord.js v14
- Node.js 20

## Modifications Récentes
- Création complète du bot avec toutes les fonctionnalités MVP
- Implémentation de 6 commandes slash interactives
- Système complet d'interactions (10 handlers de boutons/menus)
- Base de données JSON avec tutoriels et projets
- Système de tickets avec gestion automatique (bugfix: slugification des noms d'utilisateur)
- Nouvelle commande /server pour configuration automatique du serveur
- Correction du comptage de catégories et ajout d'avertissement anti-duplication

## Prochaines Phases (Non Implémentées)
- Système de progression individuelle avec badges
- Quiz interactifs avec validation automatique
- Système de mentorat pair-à-pair
- Statistiques et tableaux de bord
- Génération de certificats

## Notes Techniques
- Utilisation de Collections Discord.js pour gérer commandes/interactions
- Chargement dynamique des modules depuis les dossiers
- Support des regex pour les IDs d'interactions dynamiques
- Gestion d'erreurs complète dans tous les handlers
