# 🚀 Guide de Démarrage Rapide - FAC Bot

## ✅ Le Bot est Maintenant en Ligne !

Votre bot FAC Bot est opérationnel et prêt à aider votre communauté à apprendre à coder !

## 📋 Prochaines Étapes

### 1. Inviter le Bot sur votre Serveur Discord

Si ce n'est pas déjà fait, utilisez ce lien pour inviter le bot (remplacez `VOTRE_CLIENT_ID` par votre Application ID) :

```
https://discord.com/api/oauth2/authorize?client_id=VOTRE_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

**Permissions recommandées :**
- Gérer les canaux (pour les tickets)
- Envoyer des messages et embeds
- Lire l'historique des messages

### 2. Configuration du Serveur (Optionnel)

Le bot fonctionne immédiatement, mais vous pouvez optimiser l'expérience :

**Créez ces salons (optionnel) :**
- `#bienvenue` - Pour les messages de bienvenue automatiques
- `#aide` ou `#support` - Pour que les membres posent leurs questions
- `#projets` - Pour partager les réalisations

**Le bot créera automatiquement :**
- Une catégorie "Tickets" lors de la première demande de support

### 3. Tester les Commandes

Tapez `/` dans Discord pour voir toutes les commandes :

- `/tutoriels` - Explorer les tutoriels par niveau
- `/projets` - Voir les projets pratiques
- `/aide` - Guide complet d'utilisation
- `/ressources` - Liens vers sites d'apprentissage
- `/support` - Créer un ticket de support

### 4. Personnalisation (Optionnel)

Vous pouvez personnaliser :

**Tutoriels :** Modifiez `data/tutorials.json`
- Ajoutez vos propres langages
- Ajoutez des tutoriels personnalisés
- Modifiez les liens vers vos ressources préférées

**Projets :** Modifiez `data/projects.json`
- Ajoutez de nouveaux projets
- Personnalisez les descriptions
- Adaptez les niveaux de difficulté

**Commandes :** Ajoutez de nouveaux fichiers dans `commands/`
- Créez de nouvelles commandes
- N'oubliez pas de redéployer : `node deploy-commands.js`

## 🎯 Fonctionnalités Principales

### 📚 Système de Tutoriels
- 3 niveaux : Débutant, Intermédiaire, Avancé
- JavaScript, Python, HTML/CSS
- Navigation interactive avec menus déroulants
- Liens vers ressources externes
- Exercices pratiques

### 🚀 Projets Pratiques
- 8 projets variés (Débutant → Avancé)
- Descriptions détaillées
- Temps estimé et compétences requises
- Conseils de démarrage

### 🎫 Système de Support
- Tickets privés automatiques
- Un ticket par utilisateur
- Fermeture facile
- Permissions gérées automatiquement

### 🎉 Messages de Bienvenue
- Accueil automatique des nouveaux membres
- Boutons d'action pour démarrer
- Présentation des fonctionnalités

## 💡 Conseils pour la Communauté

1. **Encouragez l'utilisation des commandes** - Partagez `/tutoriels` et `/projets`
2. **Créez des rôles** - "Débutant", "Intermédiaire", "Avancé", "Mentor"
3. **Organisez des sessions** - Code en live, pair programming
4. **Célébrez les réussites** - Channel pour partager les projets terminés
5. **Support actif** - Répondez rapidement aux tickets

## 🔧 Maintenance

**Le bot redémarre automatiquement** si le code est modifié.

**Pour redéployer les commandes après modification :**
```bash
node deploy-commands.js
```

**Pour voir les logs :**
Les logs sont visibles dans la console Replit (workflow "FAC Bot")

## 📊 Statistiques Actuelles

- ✅ 5 commandes slash déployées
- ✅ 10 boutons interactifs
- ✅ 3 menus déroulants
- ✅ 3 événements Discord
- ✅ Tutoriels pour 3 langages
- ✅ 8 projets pratiques

## 🆘 Besoin d'Aide ?

**Problème de connexion :**
- Vérifiez que les intents sont activés dans Discord Developer Portal
- Vérifiez que DISCORD_TOKEN et DISCORD_CLIENT_ID sont corrects

**Les commandes n'apparaissent pas :**
- Exécutez `node deploy-commands.js`
- Attendez quelques minutes (jusqu'à 1h pour les commandes globales)

**Le bot ne répond pas :**
- Vérifiez les logs dans la console Replit
- Assurez-vous que le workflow "FAC Bot" est en cours d'exécution

## 🎓 Profitez de FAC Bot !

Votre communauté peut maintenant apprendre à coder de manière interactive et collaborative. Bon apprentissage ! 🚀
