const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();

const loadCommands = () => {
  const commandsPath = path.join(__dirname, 'commands');
  if (!fs.existsSync(commandsPath)) return;
  
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
      console.log(`[COMMANDE] Chargée: ${command.data.name}`);
    }
  }
};

const loadEvents = () => {
  const eventsPath = path.join(__dirname, 'events');
  if (!fs.existsSync(eventsPath)) return;
  
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
  
  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
    console.log(`[ÉVÉNEMENT] Chargé: ${event.name}`);
  }
};

const loadInteractions = () => {
  const buttonsPath = path.join(__dirname, 'interactions/buttons');
  if (fs.existsSync(buttonsPath)) {
    const buttonFiles = fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js'));
    for (const file of buttonFiles) {
      const button = require(path.join(buttonsPath, file));
      const buttonId = button.customId || button.id;
      client.buttons.set(buttonId, button);
      console.log(`[BOUTON] Chargé: ${buttonId}`);
    }
  }

  const menusPath = path.join(__dirname, 'interactions/menus');
  if (fs.existsSync(menusPath)) {
    const menuFiles = fs.readdirSync(menusPath).filter(file => file.endsWith('.js'));
    for (const file of menuFiles) {
      const menu = require(path.join(menusPath, file));
      const menuId = menu.customId || menu.id;
      client.selectMenus.set(menuId, menu);
      console.log(`[MENU] Chargé: ${menuId}`);
    }
  }
};

loadCommands();
loadEvents();
loadInteractions();

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('❌ ERREUR: DISCORD_TOKEN n\'est pas défini dans les variables d\'environnement!');
  console.log('📝 Veuillez créer votre bot sur https://discord.com/developers/applications');
  console.log('💡 Puis ajoutez le token dans les secrets Replit avec la clé: DISCORD_TOKEN');
  process.exit(1);
}

client.login(token);
