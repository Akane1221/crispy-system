# 🤖 FAC Bot - Bot d'Apprentissage Interactif

FAC Bot est un bot Discord complet conçu pour aider les membres à apprendre à coder, avec des tutoriels, un système de support, et des projets pratiques.

## ✨ Fonctionnalités

### 📚 Système de Tutoriels
- Tutoriels organisés par niveau (Débutant, Intermédiaire, Avancé)
- Support pour JavaScript, Python, HTML/CSS
- Liens vers des ressources d'apprentissage de qualité
- Exercices pratiques pour chaque tutoriel
- Navigation interactive avec menus déroulants

### 🚀 Projets Pratiques
- 8 projets variés avec descriptions détaillées
- Niveaux de difficulté adaptés à tous
- Temps estimé et compétences requises
- Instructions pas à pas

### 🎫 Système de Support
- Création de tickets privés pour obtenir de l'aide
- Gestion automatique des permissions
- Fermeture facile des tickets
- Suivi des tickets ouverts

### 🎉 Messages de Bienvenue
- Accueil automatique des nouveaux membres
- Embeds informatifs avec boutons d'action
- Introduction aux fonctionnalités du bot

### 🏗️ Configuration Automatique de Serveur
- `/server` - Crée une structure de serveur complète en un clic
- 6 catégories organisées (Informations, Apprentissage, Projets, Support, Communauté, Vocal)
- 8 rôles de progression (Admin, Modérateur, Mentor, Expert, Avancé, Intermédiaire, Débutant, Bot)
- ~35 salons textuels thématiques
- 7 salons vocaux pour sessions de code
- Messages de bienvenue et règles automatiques
- Permissions pré-configurées

### 💡 Autres Commandes
- `/aide` - Guide complet d'utilisation
- `/ressources` - Liens vers des sites d'apprentissage
- Interface entièrement interactive avec boutons et menus

## 🛠️ Installation

### Prérequis
1. Un compte Discord Developer avec un bot créé
2. Node.js installé (version 16+)

### Configuration

1. **Créer le bot sur Discord:**
   - Va sur https://discord.com/developers/applications
   - Crée une nouvelle application
   - Dans "Bot", active les intents suivants:
     - Presence Intent
     - Server Members Intent
     - Message Content Intent
   - Copie le token du bot

2. **Configurer les secrets Replit:**
   - `DISCORD_TOKEN` - Token de ton bot
   - `DISCORD_CLIENT_ID` - ID de l'application (onglet "General Information")

3. **Inviter le bot sur ton serveur:**
   ```
   https://discord.com/api/oauth2/authorize?client_id=TON_CLIENT_ID&permissions=8&scope=bot%20applications.commands
   ```
   Remplace `TON_CLIENT_ID` par l'ID de ton application

4. **Déployer les commandes slash:**
   ```bash
   node deploy-commands.js
   ```

5. **Lancer le bot:**
   ```bash
   node index.js
   ```

## 📋 Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `/tutoriels` | Explore les tutoriels de codage par niveau et langage |
| `/projets` | Découvre des projets pratiques à réaliser |
| `/aide` | Affiche l'aide et toutes les commandes |
| `/ressources` | Liens vers des ressources d'apprentissage |
| `/support` | Crée un ticket de support privé |
| `/server` | 🏗️ Crée une structure de serveur complète (Admin uniquement) |

## 🎯 Structure du Projet

```
.
├── commands/           # Commandes slash du bot
├── events/            # Gestionnaires d'événements Discord
├── interactions/      # Boutons et menus déroulants
│   ├── buttons/
│   └── menus/
├── data/              # Données JSON (tutoriels, projets)
├── index.js           # Point d'entrée du bot
├── deploy-commands.js # Script de déploiement des commandes
└── README.md          # Ce fichier
```

## 🔧 Permissions Requises

Le bot nécessite les permissions suivantes:
- Gérer les canaux (pour créer les tickets)
- Envoyer des messages
- Envoyer des messages embeds
- Lire l'historique des messages
- Ajouter des réactions
- Gérer les messages

## 💡 Utilisation

1. **Pour les nouveaux membres:**
   - Le bot envoie automatiquement un message de bienvenue
   - Utilise `/tutoriels` pour commencer à apprendre

2. **Pour obtenir de l'aide:**
   - Utilise `/support` pour créer un ticket privé
   - Un salon sera créé uniquement pour toi

3. **Pour les projets:**
   - Tape `/projets` pour voir tous les projets
   - Sélectionne un projet pour voir les détails complets

## 🌟 Contribution

Ce bot est conçu pour être facilement extensible. Tu peux:
- Ajouter de nouveaux tutoriels dans `data/tutorials.json`
- Ajouter de nouveaux projets dans `data/projects.json`
- Créer de nouvelles commandes dans le dossier `commands/`
- Ajouter des interactions dans `interactions/`

## 📝 Licence

Ce projet est libre d'utilisation pour des fins éducatives.

## 🎓 Apprentissage

FAC Bot est conçu pour encourager:
- L'apprentissage par la pratique
- L'entraide communautaire
- La progression régulière
- Le partage de connaissances

Bon apprentissage! 🚀
